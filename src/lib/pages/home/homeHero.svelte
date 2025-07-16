<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import FeatureCards from './FeatureCards.svelte';

	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});

	function handlePlaygroundClick() {
		goto('/playground');
	}
</script>

<main class="flex flex-1 items-center justify-center px-6">
	<div
		class={`mx-auto max-w-4xl transform text-center transition-all duration-1000 ${
			isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
		}`}
	>
		<!-- Main Title -->
		<h1 class="mb-6 text-5xl font-bold tracking-wider text-white md:text-7xl">
			MY ENIGMA
			<span class="mt-2 block text-3xl font-normal text-amber-400 md:text-4xl"> EMULATOR </span>
		</h1>

		<!-- Subtitle -->
		<p class="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-gray-300 md:text-2xl">
			Recreating the legendary WWII cryptography machine that changed the course of history
		</p>

		<!-- Inspiration Quote -->
		<div
			class="mb-8 rounded-lg border border-amber-500/30 bg-black/40 p-6 shadow-lg shadow-amber-500/10 backdrop-blur-sm"
		>
			<p class="mb-2 text-lg text-gray-200 italic">
				"Sometimes it is the people no one expects anything from who do the things that no one can
				imagine."
			</p>
			<p class="text-sm text-amber-400">— Alan Turing, The Imitation Game</p>
		</div>

		<!-- Main CTA Button -->
		<div class="mb-12">
			<a
				href="/playground"
				class="group relative inline-flex transform items-center justify-center rounded-lg border border-amber-300/50 bg-gradient-to-r from-amber-400 to-yellow-500 px-8 py-4 text-lg font-semibold text-black shadow-lg shadow-amber-500/25 transition-all duration-300 ease-in-out hover:scale-105 hover:from-amber-300 hover:to-yellow-400"
			>
				<span class="relative z-10 flex items-center">
					<!-- Gear icon for machinery theme -->
					<svg
						class="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-45"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
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
					Enter the Playground
					<!-- Arrow icon -->
					<svg
						class="ml-2 h-5 w-5 transform transition-transform duration-200 group-hover:translate-x-1"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 7l5 5m0 0l-5 5m5-5H6"
						/>
					</svg>
				</span>

				<!-- Hover overlay -->
				<div
					class="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-300 to-yellow-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				></div>

				<!-- Subtle glow effect -->
				<div
					class="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 opacity-30 blur-sm transition-opacity duration-300 group-hover:opacity-50"
				></div>
			</a>
		</div>

		<!-- Feature Cards -->
		<FeatureCards />
	</div>
</main>
