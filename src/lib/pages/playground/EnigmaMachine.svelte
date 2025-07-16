<script>
	import { A, states, processKeyPress } from '$lib/engine/states.svelte';

	let { activeTab } = $props();
	let currentState = $state();

	// Subscribe to state changes
	$effect(() => {
		const unsubscribe = states.subscribe((value) => {
			currentState = value;
		});
		return unsubscribe;
	});

	/**
	 * @param {string} letter
	 */
	function handleKeyPress(letter) {
		if (!currentState) return;

		processKeyPress(letter, currentState);
	}
</script>

<div class="rounded-lg border border-gray-700 bg-gray-800/60 p-6 backdrop-blur-sm">
	<h2 class="mb-6 text-center text-xl font-semibold text-white">
		{activeTab === 'encrypt' ? 'Encryption' : 'Decryption'} Machine
	</h2>

	<!-- Lampboard -->
	<div class="mb-8">
		<h3 class="mb-3 text-sm font-medium text-gray-300">Output</h3>
		<div class="grid grid-cols-6 gap-2">
			{#each A as letter}
				<div
					class="flex h-12 w-12 items-center justify-center rounded-full border-2 font-mono text-sm transition-all duration-200 {letter ===
					currentState?.outputLetter
						? 'border-amber-400 bg-amber-400 text-black shadow-lg shadow-amber-400/50'
						: 'border-gray-600 bg-gray-900 text-gray-400'}"
				>
					{letter}
				</div>
			{/each}
		</div>
	</div>

	<!-- Keyboard -->
	<div>
		<h3 class="mb-3 text-sm font-medium text-gray-300">Input</h3>
		<div class="grid grid-cols-6 gap-2">
			{#each A as letter}
				<button
					onclick={() => handleKeyPress(letter)}
					class="flex h-12 w-12 items-center justify-center rounded-lg border-2 font-mono text-sm transition-all duration-200 hover:scale-105 {letter ===
					currentState?.currentLetter
						? 'border-amber-400 bg-amber-400/20 text-amber-400'
						: 'border-gray-600 bg-gray-800 text-gray-300 hover:border-gray-500 hover:bg-gray-700'}"
				>
					{letter}
				</button>
			{/each}
		</div>
	</div>

	<!-- Current encoding display -->
	{#if currentState?.currentLetter && currentState?.outputLetter}
		<div class="mt-6 rounded-lg border border-gray-600 bg-gray-900/50 p-4">
			<div class="flex items-center justify-center space-x-4 font-mono text-lg">
				<span class="text-white">{currentState.currentLetter}</span>
				<svg class="h-5 w-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
				<span class="text-amber-400">{currentState.outputLetter}</span>
			</div>
		</div>
	{/if}
</div>
