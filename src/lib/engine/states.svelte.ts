export const state = $state({
    currentLetter: '',
    outputLetter: '',
    inputMessage: '',
    outputMessage: '',
    rotorPositions: ['A', 'A', 'A'],
    rotorTypes: ['I', 'II', 'III'],
    ringSettings: [1, 1, 1],
    reflectorType: 'B'
});

export const rotorOptions = ['I', 'II', 'III', 'IV', 'V'];
export const reflectorOptions = ['B', 'C'];
export const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';