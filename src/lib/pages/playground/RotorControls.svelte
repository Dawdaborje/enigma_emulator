<script>
	// @ts-nocheck

	import { states, A, rotorOptions, reflectorOptions } from '$lib/engine/states.svelte';

	let currentState = $state();

	// Subscribe to state changes
	$effect(() => {
		const unsubscribe = states.subscribe((value) => {
			currentState = value;
		});
		return unsubscribe;
	});

	/**
	 * @param {number} index
	 * @param {number} direction
	 */
	function updateRotorPosition(index, direction) {
		states.update((s) => {
			const newPositions = [...s.rotorPositions];
			const currentIndex = A.indexOf(newPositions[index]);
			const newIndex = (currentIndex + direction + 26) % 26;
			newPositions[index] = A[newIndex];

			return {
				...s,
				rotorPositions: newPositions
			};
		});
	}

	/**
	 * @param {number} index
	 * @param {any} type
	 */
	function updateRotorType(index, type) {
		states.update((s) => {
			const newTypes = [...s.rotorTypes];
			newTypes[index] = type;

			return {
				...s,
				rotorTypes: newTypes
			};
		});
	}

	/**
	 * @param {number} index
	 * @param {string} value
	 */
	function updateRingSetting(index, value) {
		states.update((s) => {
			const newSettings = [...s.ringSettings];
			newSettings[index] = Math.max(1, Math.min(26, parseInt(value) || 1));

			return {
				...s,
				ringSettings: newSettings
			};
		});
	}

	/**
	 * @param {any} type
	 */
	function updateReflector(type) {
		states.update((s) => ({
			...s,
			reflectorType: type
		}));
	}

	function resetRotors() {
		states.update((s) => ({
			...s,
			rotorPositions: ['A', 'A', 'A'],
			ringSettings: [1, 1, 1],
			currentLetter: '',
			outputLetter: ''
		}));
	}
</script>

<div class="rounded-lg border border-gray-700 bg-gray-800/60 p-6 backdrop-blur-sm">
	<h2 class="mb-6 flex items-center text-xl font-semibold text-white">
		<svg class="mr-2 h-5 w-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
			/>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
			/>
		</svg>
		Machine Settings
	</h2>

	<!-- Reset button -->
	<div class="mb-6">
		<button
			onclick={resetRotors}
			class="rounded-lg bg-gray-700 px-4 py-2 text-sm text-white transition-colors hover:bg-gray-600"
		>
			Reset Rotors
		</button>
	</div>

	<!-- Rotors -->
	<div class="space-y-6">
		{#if currentState}
			{#each currentState.rotorPositions as position, i}
				<div class="rounded-lg border border-gray-600 bg-gray-900/50 p-4">
					<h3 class="mb-3 text-sm font-medium text-gray-300">Rotor {i + 1}</h3>

					<!-- Rotor Type -->
					<div class="mb-3">
						<!-- svelte-ignore a11y_label_has_associated_control -->
						<label class="mb-1 block text-xs text-gray-400">Type</label>
						<select
							value={currentState.rotorTypes[i]}
							onchange={(e) => updateRotorType(i, e.target.value)}
							class="w-full rounded border border-gray-600 bg-gray-800 px-3 py-2 text-sm text-white"
						>
							{#each rotorOptions as option}
								<option value={option}>{option}</option>
							{/each}
						</select>
					</div>

					<!-- Position -->
					<div class="mb-3">
						<!-- svelte-ignore a11y_label_has_associated_control -->
						<label class="mb-1 block text-xs text-gray-400">Position</label>
						<div class="flex items-center space-x-2">
							<button
								onclick={() => updateRotorPosition(i, -1)}
								class="h-8 w-8 rounded bg-gray-700 text-sm text-white transition-colors hover:bg-gray-600"
							>
								-
							</button>
							<div
								class="flex-1 rounded border border-gray-600 bg-gray-800 px-3 py-2 text-center font-mono text-white"
							>
								{position}
							</div>
							<button
								onclick={() => updateRotorPosition(i, 1)}
								class="h-8 w-8 rounded bg-gray-700 text-sm text-white transition-colors hover:bg-gray-600"
							>
								+
							</button>
						</div>
					</div>

					<!-- Ring Setting -->
					<div>
						<!-- svelte-ignore a11y_label_has_associated_control -->
						<label class="mb-1 block text-xs text-gray-400">Ring Setting</label>
						<input
							type="number"
							value={currentState.ringSettings[i]}
							onchange={(e) => updateRingSetting(i, e.target.value)}
							min="1"
							max="26"
							class="w-full rounded border border-gray-600 bg-gray-800 px-3 py-2 text-sm text-white"
						/>
					</div>
				</div>
			{/each}
		{/if}

		<!-- Reflector -->
		<div class="rounded-lg border border-gray-600 bg-gray-900/50 p-4">
			<h3 class="mb-3 text-sm font-medium text-gray-300">Reflector</h3>
			<select
				value={currentState?.reflectorType || 'B'}
				onchange={(e) => updateReflector(e.target.value)}
				class="w-full rounded border border-gray-600 bg-gray-800 px-3 py-2 text-sm text-white"
			>
				{#each reflectorOptions as option}
					<option value={option}>Type {option}</option>
				{/each}
			</select>
		</div>

		<!-- Current Status -->
		{#if currentState}
			<div class="rounded-lg border border-gray-600 bg-gray-900/50 p-4">
				<h3 class="mb-3 text-sm font-medium text-gray-300">Current Status</h3>
				<div class="grid grid-cols-3 gap-4 text-center">
					{#each currentState.rotorPositions as position, i}
						<div class="rounded bg-gray-800 p-2">
							<div class="text-xs text-gray-400">R{i + 1}</div>
							<div class="font-mono text-amber-400">{position}</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>
