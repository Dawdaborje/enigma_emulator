<script>
	import { onMount } from 'svelte';

	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});

	const features = [
		{
			icon: '⚙️',
			title: 'Historical Accuracy',
			description:
				'Faithful recreation of Enigma I machine with authentic rotor wirings and mechanics'
		},
		{
			icon: '🔐',
			title: 'Real Cryptography',
			description: 'Implements the exact encryption algorithms used in World War II'
		},
		{
			icon: '🎛️',
			title: 'Interactive Controls',
			description: 'Configure rotors, reflectors, and plugboard just like the original machine'
		},
		{
			icon: '📚',
			title: 'Educational Value',
			description: 'Learn about cryptography, history, and the mathematics behind encryption'
		},
		{
			icon: '💻',
			title: 'Modern Technology',
			description: 'Built with SvelteKit and Tailwind CSS for a smooth, responsive experience'
		},
		{
			icon: '🎯',
			title: 'User Friendly',
			description: 'Intuitive interface that makes complex cryptography accessible to everyone'
		}
	];

	const timeline = [
		{
			year: '1918',
			event: 'Arthur Scherbius invents the Enigma machine',
			description: 'Originally designed for commercial use to protect business communications'
		},
		{
			year: '1920s',
			event: 'German military adopts Enigma',
			description: 'The machine becomes the backbone of German military communications'
		},
		{
			year: '1932',
			event: 'Polish mathematicians break early Enigma',
			description:
				'Marian Rejewski and team make the first breakthrough using mathematical analysis'
		},
		{
			year: '1939',
			event: 'Polish share secrets with Britain',
			description: 'Critical intelligence sharing just before World War II begins'
		},
		{
			year: '1940',
			event: 'Bletchley Park established',
			description: 'Alan Turing and team continue the codebreaking effort'
		},
		{
			year: '1941',
			event: 'First regular decryption of naval Enigma',
			description:
				'Breakthrough in reading German naval communications, crucial for Battle of Atlantic'
		}
	];

	const techStack = [
		{
			name: 'SvelteKit',
			description: 'Modern web framework for building fast, efficient applications'
		},
		{ name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid UI development' },
		{ name: 'JavaScript', description: 'Core logic implementing Enigma cryptographic algorithms' },
		{ name: 'Svelte Stores', description: 'Reactive state management for machine configuration' }
	];
</script>

<div class="min-h-screen bg-gray-900 text-white">
	<!-- Hero Section -->
	<section
		class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(245,158,11,0.1)_0%,transparent_50%)]"
		></div>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(245,158,11,0.05)_0%,transparent_50%)]"
		></div>

		<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="text-center">
				<h1
					class="mb-6 text-5xl font-bold tracking-tight transition-all duration-1000 sm:text-6xl lg:text-7xl {isVisible
						? 'translate-y-0 opacity-100'
						: 'translate-y-10 opacity-0'}"
				>
					<span class="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"
						>Enigma</span
					>
					<span class="text-white">Emulator</span>
				</h1>
				<p
					class="mx-auto mb-8 max-w-3xl text-xl text-gray-300 transition-all delay-300 duration-1000 sm:text-2xl {isVisible
						? 'translate-y-0 opacity-100'
						: 'translate-y-10 opacity-0'}"
				>
					Experience the legendary World War II encryption machine that changed the course of
					history
				</p>
				<div
					class="flex flex-wrap justify-center gap-4 transition-all delay-500 duration-1000 {isVisible
						? 'translate-y-0 opacity-100'
						: 'translate-y-10 opacity-0'}"
				>
					<span
						class="rounded-full border border-amber-500/30 bg-amber-500/20 px-4 py-2 text-amber-400"
					>
						Historical Accuracy
					</span>
					<span
						class="rounded-full border border-amber-500/30 bg-amber-500/20 px-4 py-2 text-amber-400"
					>
						Educational Tool
					</span>
					<span
						class="rounded-full border border-amber-500/30 bg-amber-500/20 px-4 py-2 text-amber-400"
					>
						Interactive Experience
					</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Project Overview -->
	<section class="bg-gray-900 py-20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
				<div>
					<h2 class="mb-6 text-4xl font-bold">About This Project</h2>
					<div class="space-y-6 text-lg leading-relaxed text-gray-300">
						<p>
							This Enigma Emulator is a faithful digital recreation of the famous German encryption
							machine used during World War II. Built with modern web technologies including
							SvelteKit and Tailwind CSS, it provides an authentic experience of how the original
							Enigma machine operated.
						</p>
						<p>
							The emulator implements the exact cryptographic algorithms, rotor mechanics, and user
							interface patterns of the historical Enigma I machine, making it both an educational
							tool and a tribute to one of the most significant pieces of technology in modern
							history.
						</p>
						<p>
							Whether you're a student learning about cryptography, a history enthusiast, or simply
							curious about how encryption worked before computers, this emulator offers hands-on
							experience with the machine that influenced the outcome of World War II.
						</p>
					</div>
				</div>

				<div
					class="rounded-2xl border border-gray-700 bg-gray-800/60 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/80"
				>
					<div class="mb-6 flex items-center">
						<div class="mr-4 rounded-full bg-amber-500/20 p-3">
							<svg
								class="h-8 w-8 text-amber-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<h3 class="text-2xl font-semibold text-amber-400">Why This Matters</h3>
					</div>
					<p class="leading-relaxed text-gray-300">
						The Enigma machine represents a pivotal moment in the history of cryptography and
						computing. By understanding how it worked, we gain insight into the foundations of
						modern cybersecurity and appreciate the mathematical elegance that protected and
						revealed some of history's most important secrets.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Features Grid -->
	<section class="bg-gray-800/30 py-20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold">Key Features</h2>
				<p class="mx-auto max-w-3xl text-xl text-gray-300">
					Discover what makes this Enigma emulator a comprehensive learning and experimentation tool
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each features as feature, i}
					<div
						class="group rounded-2xl border border-gray-700 bg-gray-800/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/50 hover:bg-gray-800/80"
					>
						<div class="mb-4 text-4xl">{feature.icon}</div>
						<h3
							class="mb-3 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-amber-400"
						>
							{feature.title}
						</h3>
						<p class="leading-relaxed text-gray-300">
							{feature.description}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Historical Timeline -->
	<section class="bg-gray-900 py-20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold">Historical Timeline</h2>
				<p class="mx-auto max-w-3xl text-xl text-gray-300">
					The journey of Enigma from commercial cipher machine to WWII game-changer
				</p>
			</div>

			<div class="relative">
				<!-- Timeline line -->
				<div
					class="absolute top-0 bottom-0 left-1/2 hidden w-1 -translate-x-1/2 transform bg-gradient-to-b from-amber-500 to-orange-500 lg:block"
				></div>

				<div class="space-y-12">
					{#each timeline as item, i}
						<div class="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
							<!-- Timeline dot -->
							<div
								class="absolute top-1/2 left-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-4 border-gray-900 bg-amber-500 lg:block"
							></div>

							<div class="lg:text-right {i % 2 === 1 ? 'lg:order-2' : ''}">
								<div
									class="rounded-2xl border border-gray-700 bg-gray-800/60 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/80"
								>
									<div class="mb-2 text-2xl font-bold text-amber-400">{item.year}</div>
									<h3 class="mb-3 text-xl font-semibold text-white">{item.event}</h3>
									<p class="leading-relaxed text-gray-300">{item.description}</p>
								</div>
							</div>

							<div class="{i % 2 === 1 ? 'lg:order-1' : ''} lg:flex lg:justify-center">
								<div class="lg:w-64"></div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Technical Implementation -->
	<section class="bg-gray-800/30 py-20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold">Technical Implementation</h2>
				<p class="mx-auto max-w-3xl text-xl text-gray-300">
					Built with modern web technologies while maintaining historical accuracy
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2">
				<!-- Tech Stack -->
				<div class="rounded-2xl border border-gray-700 bg-gray-800/60 p-8 backdrop-blur-sm">
					<h3 class="mb-6 text-2xl font-semibold text-amber-400">Technology Stack</h3>
					<div class="space-y-4">
						{#each techStack as tech}
							<div class="flex items-start space-x-4">
								<div class="mt-1 h-2 w-2 rounded-full bg-amber-500"></div>
								<div>
									<div class="font-semibold text-white">{tech.name}</div>
									<div class="text-sm text-gray-300">{tech.description}</div>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<!-- Cryptographic Details -->
				<div class="rounded-2xl border border-gray-700 bg-gray-800/60 p-8 backdrop-blur-sm">
					<h3 class="mb-6 text-2xl font-semibold text-amber-400">Cryptographic Accuracy</h3>
					<div class="space-y-4 text-gray-300">
						<p class="flex items-start space-x-3">
							<svg
								class="mt-1 h-5 w-5 flex-shrink-0 text-amber-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Authentic rotor wirings from historical Enigma I machines</span>
						</p>
						<p class="flex items-start space-x-3">
							<svg
								class="mt-1 h-5 w-5 flex-shrink-0 text-amber-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Correct double-stepping mechanism implementation</span>
						</p>
						<p class="flex items-start space-x-3">
							<svg
								class="mt-1 h-5 w-5 flex-shrink-0 text-amber-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Ring settings and plugboard functionality</span>
						</p>
						<p class="flex items-start space-x-3">
							<svg
								class="mt-1 h-5 w-5 flex-shrink-0 text-amber-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Multiple reflector types (B and C)</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Educational Value -->
	<section class="bg-gray-900 py-20">
		<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
			<h2 class="mb-8 text-4xl font-bold">Educational Impact</h2>
			<div class="rounded-2xl border border-gray-700 bg-gray-800/60 p-12 backdrop-blur-sm">
				<div class="mb-8">
					<svg
						class="mx-auto h-16 w-16 text-amber-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
						/>
					</svg>
				</div>
				<blockquote class="mb-8 text-2xl leading-relaxed text-gray-300">
					"Understanding the Enigma machine provides invaluable insights into the foundations of
					modern cryptography, the importance of mathematical analysis in codebreaking, and the
					pivotal role that technology played in shaping world history."
				</blockquote>
				<div class="grid gap-8 text-center md:grid-cols-3">
					<div>
						<div class="mb-2 text-3xl font-bold text-amber-400">1,000,000+</div>
						<div class="text-gray-300">Possible rotor combinations</div>
					</div>
					<div>
						<div class="mb-2 text-3xl font-bold text-amber-400">158,962,555,217,826,360,000</div>
						<div class="text-gray-300">Total machine configurations</div>
					</div>
					<div>
						<div class="mb-2 text-3xl font-bold text-amber-400">2-3 Years</div>
						<div class="text-gray-300">War shortened by Allied codebreaking</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Call to Action -->
	<section class="bg-gradient-to-br from-amber-500/10 to-orange-500/10 py-20">
		<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
			<h2 class="mb-6 text-4xl font-bold">Ready to Explore?</h2>
			<p class="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
				Dive into the fascinating world of World War II cryptography. Encrypt your own messages,
				learn about rotor mechanics, and discover the mathematical principles that changed history.
			</p>
			<div class="flex flex-wrap justify-center gap-4">
				<a
					href="/playground"
					class="rounded-lg bg-amber-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-amber-400 hover:shadow-lg"
				>
					Try the Machine
				</a>
				<a
					href="/tutorial"
					class="rounded-lg border border-amber-500 px-8 py-4 font-semibold text-amber-400 transition-all duration-300 hover:scale-105 hover:bg-amber-500/10"
				>
					Learn How It Works
				</a>
			</div>
		</div>
	</section>
</div>
