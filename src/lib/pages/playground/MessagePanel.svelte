<script>
	import { enigmaEncrypt, encryptedValue, decryptedValue, states } from '$lib/engine/states.svelte';

	// @ts-ignore
	let inputMessageValue = $state('');
	let activeTab = $state('encrypt');
	let currentState = $state();

	// Subscribe to state changes
	$effect(() => {
		const unsubscribe = states.subscribe((value) => {
			currentState = value;
		});
		return unsubscribe;
	});

	function processMessage() {
		if (!inputMessageValue.trim()) return;

		// Reset rotor positions for batch processing
		const processingState = { ...currentState };

		enigmaEncrypt(inputMessageValue, activeTab, processingState);
	}

	function clearMessages() {
		inputMessageValue = '';
		encryptedValue.set('');
		decryptedValue.set('');

		// Reset output letter display
		states.update((s) => ({
			...s,
			currentLetter: '',
			outputLetter: ''
		}));
	}

	/**
	 * @param {string} tab
	 */
	function switchTab(tab) {
		activeTab = tab;
		clearMessages();
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

	<!-- Tab switcher -->
	<div class="mb-4 flex rounded-lg border border-gray-600 bg-gray-900/50">
		<button
			onclick={() => switchTab('encrypt')}
			class="flex-1 rounded-l-lg px-4 py-2 text-sm font-medium transition-colors {activeTab ===
			'encrypt'
				? 'bg-amber-500 text-black'
				: 'text-gray-300 hover:bg-gray-700'}"
		>
			Encrypt
		</button>
		<button
			onclick={() => switchTab('decrypt')}
			class="flex-1 rounded-r-lg px-4 py-2 text-sm font-medium transition-colors {activeTab ===
			'decrypt'
				? 'bg-amber-500 text-black'
				: 'text-gray-300 hover:bg-gray-700'}"
		>
			Decrypt
		</button>
	</div>

	<!-- Input -->
	<div class="mb-6">
		<!-- svelte-ignore a11y_label_has_associated_control -->
		<label class="mb-2 block text-sm font-medium text-gray-300">
			{activeTab === 'encrypt' ? 'Plain Text' : 'Encrypted Text'}
		</label>
		<textarea
			bind:value={inputMessageValue}
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
			class="flex-1 rounded-lg bg-amber-500 px-4 py-2 font-medium text-black transition-colors hover:bg-amber-400 disabled:opacity-50"
			disabled={!inputMessageValue.trim()}
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
			{#if activeTab === 'encrypt'}
				{$encryptedValue || 'Output will appear here...'}
			{:else}
				{$decryptedValue || 'Output will appear here...'}
			{/if}
		</div>
	</div>
</div>
