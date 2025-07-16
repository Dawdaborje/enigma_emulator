import { writable } from 'svelte/store';

// Reactive stores
export const encryptedValue = writable('');
export const decryptedValue = writable('');

// Alphabet
export const A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Rotor wirings (historical)
export const ROTORS = {
	I: 'EKMFLGDQVZNTOWYHXUSPAIBRCJ',
	II: 'AJDKSIRUXBLHWTMCQGZNPYFVOE',
	III: 'BDFHJLCPRTXVZNYEIWGAKMUSQO',
	IV: 'ESOVPZJAYQUIRHXLNFTGKDCMWB',
	V: 'VZBRGITYUPSDNHLXAWMJQOFECK'
};

// Rotor notches (when the rotor steps the next one)
export const NOTCHES = {
	I: 'Q',
	II: 'E',
	III: 'V',
	IV: 'J',
	V: 'Z'
};

// Reflector wirings
export const REFLECTORS = {
	B: 'YRUHQSLDPXNGOKMIEBFZCWVJAT',
	C: 'FVPJIAOYEDRZXWGCTKUQSBNMHL'
};

// Machine state
export const states = writable({
	rotorPositions: ['A', 'A', 'A'],
	rotorTypes: ['I', 'II', 'III'],
	ringSettings: [1, 1, 1],
	reflectorType: 'B',
	plugboard: {
		A: 'M',
		M: 'A',
		F: 'Z',
		Z: 'F'
	},
	currentLetter: '',
	outputLetter: ''
});

// Options for UI
export const rotorOptions = ['I', 'II', 'III', 'IV', 'V'];
export const reflectorOptions = ['B', 'C'];

/**
 * Apply plugboard swapping
 * @param {string} char
 * @param {Object} plugboard
 */
export function plugSwap(char, plugboard) {
	// @ts-ignore
	return plugboard[char] || char;
}

/**
 * Convert letter to position (A=0, B=1, etc.)
 * @param {string} letter
 */
export function letterToPos(letter) {
	return A.indexOf(letter);
}

/**
 * Convert position to letter (0=A, 1=B, etc.)
 * @param {number} pos
 */
export function posToLetter(pos) {
	return A[(pos + 26) % 26];
}

/**
 * @param {string[]} positions
 * @param {(string | number)[]} types
 */
export function stepRotors(positions, types) {
	const newPositions = [...positions];

	// Check for double stepping (middle rotor steps if it's at notch)
	// @ts-ignore
	const middleAtNotch = positions[1] === NOTCHES[types[1]];

	// Always step first rotor
	newPositions[0] = posToLetter((letterToPos(positions[0]) + 1) % 26);

	// Step middle rotor if first rotor was at notch position OR if middle rotor is at notch
	// @ts-ignore
	if (positions[0] === NOTCHES[types[0]] || middleAtNotch) {
		newPositions[1] = posToLetter((letterToPos(positions[1]) + 1) % 26);
	}

	// Step third rotor if middle rotor was at notch position
	if (middleAtNotch) {
		newPositions[2] = posToLetter((letterToPos(positions[2]) + 1) % 26);
	}

	return newPositions;
}

/**
 * Encode through a rotor in forward direction
 * @param {string} inputChar
 * @param {string} rotorType
 * @param {number} position
 * @param {number} ringSetting
 */
export function encodeRotorForward(inputChar, rotorType, position, ringSetting) {
	// @ts-ignore
	const rotor = ROTORS[rotorType];
	// @ts-ignore
	const pos = letterToPos(position);
	const ring = ringSetting - 1; // Ring settings are 1-26, convert to 0-25

	// Calculate input position with rotor position and ring setting
	const inputPos = (letterToPos(inputChar) + pos - ring + 26) % 26;

	// Get the substituted character
	const outputChar = rotor[inputPos];

	// Adjust for rotor position and ring setting
	const outputPos = (letterToPos(outputChar) - pos + ring + 26) % 26;

	return posToLetter(outputPos);
}

/**
 * Encode through a rotor in reverse direction
 * @param {string} inputChar
 * @param {string} rotorType
 * @param {number} position
 * @param {number} ringSetting
 */
export function encodeRotorReverse(inputChar, rotorType, position, ringSetting) {
	// @ts-ignore
	const rotor = ROTORS[rotorType];
	// @ts-ignore
	const pos = letterToPos(position);
	const ring = ringSetting - 1;

	// Adjust for rotor position and ring setting
	const inputPos = (letterToPos(inputChar) + pos - ring + 26) % 26;
	const inputLetter = posToLetter(inputPos);

	// Find the input letter in the rotor wiring
	const outputPos = rotor.indexOf(inputLetter);

	// Adjust back for rotor position and ring setting
	const finalPos = (outputPos - pos + ring + 26) % 26;

	return posToLetter(finalPos);
}

/**
 * Encode a single letter through the complete Enigma machine
 * @param {string} inputChar
 * @param {Object} machineState
 */
export function encodeLetter(inputChar, machineState) {
	if (!/^[A-Z]$/.test(inputChar)) return inputChar;

	// @ts-ignore
	const { rotorPositions, rotorTypes, ringSettings, reflectorType, plugboard } = machineState;

	// Step rotors first
	const newPositions = stepRotors(rotorPositions, rotorTypes);

	// Start with plugboard
	let char = plugSwap(inputChar, plugboard);

	// Forward through rotors (right to left)
	for (let i = 0; i < 3; i++) {
		// @ts-ignore
		char = encodeRotorForward(char, rotorTypes[i], newPositions[i], ringSettings[i]);
	}

	// Through reflector
	// @ts-ignore
	const reflectorWiring = REFLECTORS[reflectorType];
	char = reflectorWiring[letterToPos(char)];

	// Backward through rotors (left to right)
	for (let i = 2; i >= 0; i--) {
		// @ts-ignore
		char = encodeRotorReverse(char, rotorTypes[i], newPositions[i], ringSettings[i]);
	}

	// Plugboard again
	char = plugSwap(char, plugboard);

	return { outputChar: char, newPositions };
}

/**
 * Encrypt/decrypt a message
 * @param {string} text
 * @param {string} type
 * @param {Object} machineState
 */
export function enigmaEncrypt(text, type, machineState) {
	text = text.toUpperCase().replace(/[^A-Z]/g, '');
	let result = '';
	let currentState = { ...machineState };

	for (const char of text) {
		// @ts-ignore
		const { outputChar, newPositions } = encodeLetter(char, currentState);
		result += outputChar;
		// @ts-ignore
		currentState.rotorPositions = newPositions;
	}

	if (type === 'encrypt') {
		encryptedValue.set(result);
	} else {
		decryptedValue.set(result);
	}

	return result;
}

/**
 * Process a single key press for the machine interface
 * @param {string} letter
 * @param {Object} machineState
 */
export function processKeyPress(letter, machineState) {
	// @ts-ignore
	const { outputChar, newPositions } = encodeLetter(letter, machineState);

	// Update state
	states.update((s) => ({
		...s,
		rotorPositions: newPositions,
		currentLetter: letter,
		outputLetter: outputChar
	}));

	return outputChar;
}
