<!-- src/routes/playground/+page.svelte -->
<script>
	import EnigmaMachine from '$lib/pages/playground/EnigmaMachine.svelte';
	import MessagePanel from '$lib/pages/playground/MessagePanel.svelte';
	import RotorControls from '$lib/pages/playground/RotorControls.svelte';
	import { onMount } from 'svelte';

	let activeTab = 'encrypt';
	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	/**
	 * @param {string} tab
	 */
	function switchTab(tab) {
		activeTab = tab;
	}
</script>

<svelte:head>
	<title>Enigma Playground - Encrypt & Decrypt</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900">
	<!-- Header -->
	<header class="w-full border-b border-gray-700/50 p-6">
		<div class="mx-auto flex max-w-7xl items-center justify-between">
			<a href="/" class="text-2xl font-bold text-amber-400 transition-colors hover:text-amber-300">
				← ENIGMA
			</a>
			<h1 class="text-xl font-medium text-white">Cryptography Playground</h1>
		</div>
	</header>

	<!-- Main Content -->
	<main class="mx-auto max-w-7xl p-6">
		<!-- Tab Navigation -->
		<div
			class={`mb-8 transform transition-all duration-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
		>
			<div
				class="mx-auto flex w-fit space-x-1 rounded-lg border border-gray-700 bg-gray-800/50 p-1"
			>
				<button
					on:click={() => switchTab('encrypt')}
					class={`rounded-md px-6 py-3 font-medium transition-all duration-300 ${
						activeTab === 'encrypt'
							? 'bg-amber-500 text-black shadow-lg shadow-amber-500/25'
							: 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
					}`}
				>
					<span class="flex items-center">
						<svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
							/>
						</svg>
						Encrypt
					</span>
				</button>
				<button
					on:click={() => switchTab('decrypt')}
					class={`rounded-md px-6 py-3 font-medium transition-all duration-300 ${
						activeTab === 'decrypt'
							? 'bg-amber-500 text-black shadow-lg shadow-amber-500/25'
							: 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
					}`}
				>
					<span class="flex items-center">
						<svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
							/>
						</svg>
						Decrypt
					</span>
				</button>
			</div>
		</div>

		<!-- Machine Layout -->
		<div class="grid gap-8 lg:grid-cols-3">
			<!-- Left Panel - Rotor Controls -->
			<div
				class={`transform transition-all delay-100 duration-700 ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
			>
				<RotorControls />
			</div>

			<!-- Center Panel - Enigma Machine -->
			<div
				class={`transform transition-all delay-200 duration-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
			>
				<EnigmaMachine {activeTab} />
			</div>

			<!-- Right Panel - Message Input/Output -->
			<div
				class={`transform transition-all delay-300 duration-700 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
			>
				<MessagePanel {activeTab} />
			</div>
		</div>

		<!-- Instructions -->
		<div
			class={`mx-auto mt-12 max-w-4xl transform transition-all delay-500 duration-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
		>
			<div class="rounded-lg border border-gray-700 bg-gray-800/40 p-6 backdrop-blur-sm">
				<h3 class="mb-3 flex items-center text-lg font-semibold text-white">
					<svg
						class="mr-2 h-5 w-5 text-amber-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					How to Use
				</h3>
				<div class="grid gap-6 text-sm text-gray-300 md:grid-cols-2">
					<div>
						<h4 class="mb-2 font-medium text-amber-400">Encryption Mode</h4>
						<ul class="space-y-1">
							<li>• Set rotor positions and ring settings</li>
							<li>• Configure plugboard connections</li>
							<li>• Type your plain text message</li>
							<li>• Watch the encrypted output appear</li>
						</ul>
					</div>
					<div>
						<h4 class="mb-2 font-medium text-amber-400">Decryption Mode</h4>
						<ul class="space-y-1">
							<li>• Use the same machine settings</li>
							<li>• Input the encrypted message</li>
							<li>• The original text will be revealed</li>
							<li>• Remember: Enigma is reciprocal!</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</main>
</div>

<!-- src/lib/components/EnigmaMachine.svelte -->

<!-- src/lib/components/ -->
