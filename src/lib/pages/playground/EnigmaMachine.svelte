<script>
	let { activeTab } = $props();

	let currentLetter = $state('');
	let outputLetter = $state('');

	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

	/**
	 * @param {string} letter
	 */
	function handleKeyPress(letter) {
		currentLetter = letter;
		// Simulate encoding (replace with actual Enigma logic)
		const randomIndex = Math.floor(Math.random() * 26);
		outputLetter = alphabet[randomIndex];

		// Clear after a short delay
		setTimeout(() => {
			currentLetter = '';
			outputLetter = '';
		}, 1500);
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
			{#each alphabet as letter}
				<div
					class={`flex h-10 w-10 items-center justify-center rounded-full border-2 font-mono text-sm transition-all duration-200 ${
						letter === outputLetter
							? 'border-amber-400 bg-amber-400 text-black shadow-lg shadow-amber-400/50'
							: 'border-gray-600 bg-gray-900 text-gray-400'
					}`}
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
			{#each alphabet as letter}
				<button
					onclick={() => handleKeyPress(letter)}
					class={`flex h-10 w-10 items-center justify-center rounded-lg border-2 font-mono text-sm transition-all duration-200 hover:scale-105 ${
						letter === currentLetter
							? 'border-amber-400 bg-amber-400/20 text-amber-400'
							: 'border-gray-600 bg-gray-800 text-gray-300 hover:border-gray-500 hover:bg-gray-700'
					}`}
				>
					{letter}
				</button>
			{/each}
		</div>
	</div>
</div>
