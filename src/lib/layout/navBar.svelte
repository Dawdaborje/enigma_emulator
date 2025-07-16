<script>
	import { onMount } from 'svelte';

	let typedText = '';
	const fullText = 'ENIGMA';

	onMount(() => {
		// Typewriter effect
		let i = 0;
		const timer = setInterval(() => {
			if (i < fullText.length) {
				typedText = fullText.substring(0, i + 1);
				i++;
			} else {
				clearInterval(timer);
			}
		}, 200);

		return () => clearInterval(timer);
	});
</script>

<header class="w-full p-6">
	<nav class="mx-auto flex max-w-7xl items-center justify-between">
		<div class="text-2xl font-bold text-amber-400">
			{typedText}<span class="animate-pulse text-amber-300">|</span>
		</div>
		<div class="hidden space-x-6 md:flex">
			<a href="#about" class="text-gray-300 transition-colors duration-200 hover:text-amber-400"
				>About</a
			>
			<a href="#features" class="text-gray-300 transition-colors duration-200 hover:text-amber-400"
				>Features</a
			>
			<a href="#history" class="text-gray-300 transition-colors duration-200 hover:text-amber-400"
				>History</a
			>
		</div>
	</nav>
</header>

<style>
	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}

	.animate-pulse {
		animation: pulse 1s infinite;
	}
</style>
