<script>
	let { activeTab } = $props();

	let inputMessage = $state('');
	let outputMessage = $state('');

	function processMessage() {
		if (!inputMessage.trim()) return;

		// Simulate processing (replace with actual Enigma logic)
		outputMessage = inputMessage
			.split('')
			.map(() => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)])
			.join('');
	}

	function clearMessages() {
		inputMessage = '';
		outputMessage = '';
	}
</script>

<div class="rounded-lg border border-gray-700 bg-gray-800/60 p-6 backdrop-blur-sm">
	<h2 class="mb-6 flex items-center text-xl font-semibold text-white">
		<svg class="mr-2 h-5 w-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
			/>
		</svg>
		Message Processing
	</h2>

	<!-- Input -->
	<div class="mb-6">
		<!-- svelte-ignore a11y_label_has_associated_control -->
		<label class="mb-2 block text-sm font-medium text-gray-300">
			{activeTab === 'encrypt' ? 'Plain Text' : 'Encrypted Text'}
		</label>
		<textarea
			bind:value={inputMessage}
			placeholder={activeTab === 'encrypt'
				? 'Enter your secret message...'
				: 'Enter encrypted message...'}
			class="h-32 w-full resize-none rounded-lg border border-gray-600 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-amber-400 focus:outline-none"
		></textarea>
	</div>

	<!-- Controls -->
	<div class="mb-6 flex space-x-3">
		<button
			onclick={processMessage}
			class="flex-1 rounded-lg bg-amber-500 px-4 py-2 font-medium text-black transition-colors hover:bg-amber-400"
		>
			{activeTab === 'encrypt' ? 'Encrypt' : 'Decrypt'}
		</button>
		<button
			onclick={clearMessages}
			class="rounded-lg bg-gray-700 px-4 py-2 text-white transition-colors hover:bg-gray-600"
		>
			Clear
		</button>
	</div>

	<!-- Output -->
	<div>
		<!-- svelte-ignore a11y_label_has_associated_control -->
		<label class="mb-2 block text-sm font-medium text-gray-300">
			{activeTab === 'encrypt' ? 'Encrypted Text' : 'Plain Text'}
		</label>
		<div
			class="h-32 w-full overflow-auto rounded-lg border border-gray-600 bg-gray-900 px-4 py-3 font-mono text-sm text-amber-400"
		>
			{outputMessage || 'Output will appear here...'}
		</div>
	</div>
</div>
