<script>
	import { onMount } from 'svelte';

	let isVisible = false;
	let activeDemo = 'rotor';

	onMount(() => {
		isVisible = true;
	});

	const coreFeatures = [
		{
			id: 'rotor',
			icon: '⚙️',
			title: 'Authentic Rotor Mechanics',
			description:
				'Experience the exact rotor stepping and double-stepping behavior of the original Enigma I machine.',
			details: [
				'5 historically accurate rotors (I, II, III, IV, V)',
				'Correct notch positions and stepping sequences',
				'Double-stepping mechanism implementation',
				'Ring setting adjustments (1-26)',
				'Visual rotor position indicators'
			],
			demo: {
				title: 'Rotor Configuration',
				description:
					'Each rotor can be independently configured with different types, positions, and ring settings.'
			}
		},
		{
			id: 'encryption',
			icon: '🔐',
			title: 'Real-Time Encryption',
			description:
				'Watch as your messages are encrypted and decrypted letter by letter, just like the original machine.',
			details: [
				'Live encryption as you type',
				'Individual key press simulation',
				'Batch message processing',
				'Lampboard visualization',
				'Character-by-character feedback'
			],
			demo: {
				title: 'Encryption Process',
				description:
					'See each letter light up on the lampboard as it gets encrypted through the rotor stack.'
			}
		},
		{
			id: 'plugboard',
			icon: '🔌',
			title: 'Plugboard Configuration',
			description:
				'Set up letter pairs on the plugboard to add an extra layer of encryption complexity.',
			details: [
				'Visual plugboard interface',
				'Easy drag-and-drop connections',
				'Up to 13 letter pairs',
				'Historical plugboard settings',
				'Real-time connection feedback'
			],
			demo: {
				title: 'Plugboard Setup',
				description:
					'Connect letter pairs to create additional substitution before and after rotor encryption.'
			}
		},
		{
			id: 'reflector',
			icon: '🪞',
			title: 'Multiple Reflectors',
			description: 'Choose between different reflector types used throughout Enigma history.',
			details: [
				'Reflector B (standard)',
				'Reflector C (alternative)',
				'Historically accurate wiring',
				'Easy reflector switching',
				'Impact visualization'
			],
			demo: {
				title: 'Reflector Types',
				description:
					'Different reflectors produce different encryption patterns for the same input.'
			}
		}
	];

	const advancedFeatures = [
		{
			icon: '📊',
			title: 'Machine State Management',
			description: 'Complete control over every aspect of the Enigma machine configuration.',
			features: [
				'Save and load machine settings',
				'Reset to default configurations',
				'Export configuration data',
				'Quick setup presets',
				'Session persistence'
			]
		},
		{
			icon: '🎯',
			title: 'Interactive Learning',
			description: 'Educational tools to help understand how the Enigma machine works.',
			features: [
				'Step-by-step encryption breakdown',
				'Visual signal path tracing',
				'Historical context panels',
				'Cryptographic explanations',
				'Interactive tutorials'
			]
		},
		{
			icon: '⚡',
			title: 'Performance Optimized',
			description: 'Built for speed and responsiveness with modern web technologies.',
			features: [
				'Real-time calculations',
				'Smooth animations',
				'Responsive design',
				'Touch-friendly interface',
				'Keyboard shortcuts'
			]
		},
		{
			icon: '🔍',
			title: 'Analysis Tools',
			description: 'Tools to analyze and understand encryption patterns and behavior.',
			features: [
				'Character frequency analysis',
				'Encryption statistics',
				'Pattern recognition',
				'Historical comparisons',
				'Mathematical insights'
			]
		}
	];

	const userExperience = [
		{
			title: 'Intuitive Interface',
			description: 'Clean, modern design that makes complex cryptography accessible to everyone.',
			icon: '🎨'
		},
		{
			title: 'Mobile Responsive',
			description: 'Full functionality on desktop, tablet, and mobile devices.',
			icon: '📱'
		},
		{
			title: 'Keyboard Support',
			description: 'Type naturally or use the on-screen keyboard for authentic feel.',
			icon: '⌨️'
		},
		{
			title: 'Visual Feedback',
			description: 'See exactly what happens at each step of the encryption process.',
			icon: '👁️'
		}
	];

	const technicalSpecs = [
		{ label: 'Rotor Types', value: '5 (I, II, III, IV, V)' },
		{ label: 'Reflector Types', value: '2 (B, C)' },
		{ label: 'Plugboard Pairs', value: 'Up to 13' },
		{ label: 'Total Configurations', value: '158+ Quintillion' },
		{ label: 'Character Set', value: 'A-Z (26 letters)' },
		{ label: 'Ring Settings', value: '1-26 per rotor' }
	];

	/**
	 * @param {string} featureId
	 */
	function setActiveDemo(featureId) {
		activeDemo = featureId;
	}
</script>

<div class="min-h-screen bg-gray-900 text-white">
	<!-- Hero Section -->
	<section
		class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.1)_0%,transparent_50%)]"
		></div>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.05)_0%,transparent_50%)]"
		></div>

		<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="text-center">
				<h1
					class="mb-6 text-5xl font-bold tracking-tight transition-all duration-1000 sm:text-6xl {isVisible
						? 'translate-y-0 opacity-100'
						: 'translate-y-10 opacity-0'}"
				>
					<span class="text-white">Enigma</span>
					<span class="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"
						>Features</span
					>
				</h1>
				<p
					class="mx-auto mb-8 max-w-3xl text-xl text-gray-300 transition-all delay-300 duration-1000 sm:text-2xl {isVisible
						? 'translate-y-0 opacity-100'
						: 'translate-y-10 opacity-0'}"
				>
					Discover the comprehensive capabilities of our historically accurate Enigma machine
					emulator
				</p>
			</div>
		</div>
	</section>

	<!-- Core Features with Interactive Demo -->
	<section class="bg-gray-900 py-20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold">Core Features</h2>
				<p class="mx-auto max-w-3xl text-xl text-gray-300">
					Experience every aspect of the original Enigma machine with modern interactivity
				</p>
			</div>

			<div class="grid gap-8 lg:grid-cols-2">
				<!-- Feature List -->
				<div class="space-y-6">
					{#each coreFeatures as feature, i}
						<div
							class="group cursor-pointer rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 {activeDemo ===
							feature.id
								? 'border-amber-500 bg-amber-500/10'
								: 'border-gray-700 bg-gray-800/60 hover:border-amber-500/50'}"
							on:click={() => setActiveDemo(feature.id)}
							on:keydown={(e) => e.key === 'Enter' && setActiveDemo(feature.id)}
							role="button"
							tabindex="0"
						>
							<div class="flex items-start space-x-4">
								<div class="text-3xl">{feature.icon}</div>
								<div class="flex-1">
									<h3
										class="mb-2 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-amber-400"
									>
										{feature.title}
									</h3>
									<p class="mb-4 leading-relaxed text-gray-300">
										{feature.description}
									</p>
									<ul class="space-y-2">
										{#each feature.details as detail}
											<li class="flex items-start space-x-2 text-sm text-gray-400">
												<svg
													class="mt-1 h-3 w-3 flex-shrink-0 text-amber-400"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path
														fill-rule="evenodd"
														d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
														clip-rule="evenodd"
													/>
												</svg>
												<span>{detail}</span>
											</li>
										{/each}
									</ul>
								</div>
							</div>
						</div>
					{/each}
				</div>

				<!-- Interactive Demo Area -->
				<div class="rounded-2xl border border-gray-700 bg-gray-800/60 p-8 backdrop-blur-sm">
					{#each coreFeatures as feature}
						{#if activeDemo === feature.id}
							<div class="text-center">
								<div class="mb-6 text-6xl">{feature.icon}</div>
								<h3 class="mb-4 text-2xl font-semibold text-amber-400">{feature.demo.title}</h3>
								<p class="mb-8 leading-relaxed text-gray-300">{feature.demo.description}</p>

								<!-- Visual Demo based on feature type -->
								{#if feature.id === 'rotor'}
									<div class="grid grid-cols-3 gap-4">
										{#each ['I', 'II', 'III'] as rotor, i}
											<div class="rounded-lg bg-gray-900 p-4">
												<div class="mb-2 text-sm text-gray-400">Rotor {rotor}</div>
												<div class="mb-2 font-mono text-2xl text-amber-400">A</div>
												<div class="text-xs text-gray-500">Position</div>
											</div>
										{/each}
									</div>
								{:else if feature.id === 'encryption'}
									<div class="space-y-4">
										<div class="flex justify-center space-x-4">
											<div class="rounded-lg bg-gray-900 p-4">
												<div class="mb-2 text-sm text-gray-400">Input</div>
												<div class="font-mono text-2xl text-white">H</div>
											</div>
											<div class="flex items-center">
												<svg
													class="h-6 w-6 text-amber-400"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M9 5l7 7-7 7"
													/>
												</svg>
											</div>
											<div class="rounded-lg bg-gray-900 p-4">
												<div class="mb-2 text-sm text-gray-400">Output</div>
												<div class="font-mono text-2xl text-amber-400">K</div>
											</div>
										</div>
									</div>
								{:else if feature.id === 'plugboard'}
									<div class="grid grid-cols-4 gap-2">
										{#each ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] as letter}
											<div
												class="rounded bg-gray-900 p-2 text-center font-mono text-sm {letter ===
													'A' || letter === 'F'
													? 'bg-amber-500/20 text-amber-400'
													: 'text-gray-400'}"
											>
												{letter}
											</div>
										{/each}
									</div>
								{:else if feature.id === 'reflector'}
									<div class="flex justify-center space-x-8">
										<div class="text-center">
											<div class="mb-2 rounded-lg bg-gray-900 p-4">
												<div class="mb-1 text-sm text-gray-400">Reflector B</div>
												<div class="font-mono text-lg text-amber-400">Active</div>
											</div>
										</div>
										<div class="text-center">
											<div class="mb-2 rounded-lg bg-gray-700 p-4">
												<div class="mb-1 text-sm text-gray-500">Reflector C</div>
												<div class="font-mono text-lg text-gray-500">Inactive</div>
											</div>
										</div>
									</div>
								{/if}
								<br />
								<a
									href="/playground"
									class="mt-20 rounded-lg bg-amber-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-amber-400"
								>
									Try This Feature
								</a>
							</div>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Advanced Features -->
	<section class="bg-gray-800/30 py-20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold">Advanced Capabilities</h2>
				<p class="mx-auto max-w-3xl text-xl text-gray-300">
					Powerful tools and features that go beyond the basic Enigma functionality
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
				{#each advancedFeatures as feature, i}
					<div
						class="group rounded-2xl border border-gray-700 bg-gray-800/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/50 hover:bg-gray-800/80"
					>
						<div class="mb-4 text-4xl">{feature.icon}</div>
						<h3
							class="mb-3 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-amber-400"
						>
							{feature.title}
						</h3>
						<p class="mb-6 leading-relaxed text-gray-300">
							{feature.description}
						</p>
						<ul class="space-y-2">
							{#each feature.features as item}
								<li class="flex items-start space-x-2 text-sm text-gray-400">
									<svg
										class="mt-1 h-3 w-3 flex-shrink-0 text-amber-400"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										/>
									</svg>
									<span>{item}</span>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- User Experience -->
	<section class="bg-gray-900 py-20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold">User Experience</h2>
				<p class="mx-auto max-w-3xl text-xl text-gray-300">
					Designed for accessibility, usability, and educational impact
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
				{#each userExperience as feature, i}
					<div class="group text-center">
						<div
							class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-3xl transition-transform duration-300 group-hover:scale-110"
						>
							{feature.icon}
						</div>
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

	<!-- Technical Specifications -->
	<section class="bg-gray-800/30 py-20">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold">Technical Specifications</h2>
				<p class="text-xl text-gray-300">
					Complete technical details of the Enigma emulator implementation
				</p>
			</div>

			<div class="rounded-2xl border border-gray-700 bg-gray-800/60 p-8 backdrop-blur-sm">
				<div class="grid gap-6 md:grid-cols-2">
					{#each technicalSpecs as spec}
						<div
							class="flex items-center justify-between border-b border-gray-700 py-3 last:border-b-0"
						>
							<span class="font-medium text-gray-300">{spec.label}</span>
							<span class="font-mono text-amber-400">{spec.value}</span>
						</div>
					{/each}
				</div>

				<div class="mt-8 rounded-lg border border-amber-500/30 bg-amber-500/10 p-6">
					<div class="flex items-start space-x-3">
						<svg
							class="mt-1 h-6 w-6 flex-shrink-0 text-amber-400"
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
						<div>
							<h4 class="mb-2 font-semibold text-amber-400">Historical Accuracy Note</h4>
							<p class="text-sm leading-relaxed text-gray-300">
								All specifications match the original Enigma I machine used by German forces during
								World War II. The rotor wirings, notch positions, and reflector configurations are
								historically accurate and verified against museum examples.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Feature Comparison -->
	<section class="bg-gray-900 py-20">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold">Feature Comparison</h2>
				<p class="text-xl text-gray-300">See how our emulator compares to other implementations</p>
			</div>

			<div class="overflow-x-auto">
				<table class="w-full rounded-2xl border border-gray-700 bg-gray-800/60 backdrop-blur-sm">
					<thead>
						<tr class="border-b border-gray-700">
							<th class="p-6 text-left text-gray-300">Feature</th>
							<th class="p-6 text-center text-amber-400">Our Emulator</th>
							<th class="p-6 text-center text-gray-400">Basic Simulators</th>
							<th class="p-6 text-center text-gray-400">Physical Replicas</th>
						</tr>
					</thead>
					<tbody class="text-sm">
						<tr class="border-b border-gray-700/50">
							<td class="p-6 font-medium text-white">Historical Accuracy</td>
							<td class="p-6 text-center">
								<svg class="mx-auto h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clip-rule="evenodd"
									/>
								</svg>
							</td>
							<td class="p-6 text-center">
								<svg
									class="mx-auto h-5 w-5 text-yellow-400"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fill-rule="evenodd"
										d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
										clip-rule="evenodd"
									/>
								</svg>
							</td>
							<td class="p-6 text-center">
								<svg class="mx-auto h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clip-rule="evenodd"
									/>
								</svg>
							</td>
						</tr>
						<tr class="border-b border-gray-700/50">
							<td class="p-6 font-medium text-white">Interactive Learning</td>
							<td class="p-6 text-center">
								<svg class="mx-auto h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clip-rule="evenodd"
									/>
								</svg>
							</td>
							<td class="p-6 text-center">
								<svg class="mx-auto h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/>
								</svg>
							</td>
							<td class="p-6 text-center">
								<svg class="mx-auto h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/>
								</svg>
							</td>
						</tr>
						<tr class="border-b border-gray-700/50">
							<td class="p-6 font-medium text-white">Accessibility</td>
							<td class="p-6 text-center">
								<svg class="mx-auto h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clip-rule="evenodd"
									/>
								</svg>
							</td>
							<td class="p-6 text-center">
								<svg
									class="mx-auto h-5 w-5 text-yellow-400"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fill-rule="evenodd"
										d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
										clip-rule="evenodd"
									/>
								</svg>
							</td>
							<td class="p-6 text-center">
								<svg class="mx-auto h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/>
								</svg>
							</td>
						</tr>
						<tr>
							<td class="p-6 font-medium text-white">Cost</td>
							<td class="p-6 text-center font-semibold text-green-400">Free</td>
							<td class="p-6 text-center font-semibold text-green-400">Free</td>
							<td class="p-6 text-center font-semibold text-red-400">$$$</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</section>

	<!-- Call to Action -->
	<section class="bg-gradient-to-br from-amber-500/10 to-orange-500/10 py-20">
		<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
			<h2 class="mb-6 text-4xl font-bold">Experience All Features</h2>
			<p class="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
				Ready to explore the full power of our Enigma emulator? Try all the features and discover
				how this legendary machine changed the course of history.
			</p>
			<div class="flex flex-wrap justify-center gap-6">
				<a
					href="/machine"
					class="group rounded-lg bg-amber-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-amber-400 hover:shadow-xl"
				>
					<span class="flex items-center space-x-2">
						<span>Try the Machine</span>
						<svg
							class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
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
				</a>
				<a
					href="/tutorial"
					class="group rounded-lg border border-amber-500 px-8 py-4 font-semibold text-amber-400 transition-all duration-300 hover:scale-105 hover:bg-amber-500/10"
				>
					<span class="flex items-center space-x-2">
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
							/>
						</svg>
						<span>Learn How It Works</span>
					</span>
				</a>
				<a
					href="/about"
					class="group rounded-lg border border-gray-600 px-8 py-4 font-semibold text-gray-300 transition-all duration-300 hover:scale-105 hover:border-gray-500 hover:text-white"
				>
					<span class="flex items-center space-x-2">
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span>Project History</span>
					</span>
				</a>
			</div>
		</div>
	</section>

	<!-- Feature Highlights Banner -->
	<section class="bg-gray-800 py-12">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="grid gap-8 text-center md:grid-cols-3">
				<div class="group">
					<div
						class="mb-4 text-3xl font-bold text-amber-400 transition-transform duration-300 group-hover:scale-110"
					>
						158,962,555,217,826,360,000
					</div>
					<div class="text-gray-300">Total Machine Configurations</div>
				</div>
				<div class="group">
					<div
						class="mb-4 text-3xl font-bold text-amber-400 transition-transform duration-300 group-hover:scale-110"
					>
						5
					</div>
					<div class="text-gray-300">Historical Rotor Types</div>
				</div>
				<div class="group">
					<div
						class="mb-4 text-3xl font-bold text-amber-400 transition-transform duration-300 group-hover:scale-110"
					>
						100%
					</div>
					<div class="text-gray-300">Historical Accuracy</div>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	/* Custom animations and transitions */
	@keyframes pulse-glow {
		0%,
		100% {
			box-shadow: 0 0 20px rgba(245, 158, 11, 0.3);
		}
		50% {
			box-shadow: 0 0 30px rgba(245, 158, 11, 0.5);
		}
	}

	/* Custom scrollbar for better UX */
	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-track {
		background: #1f2937;
	}

	::-webkit-scrollbar-thumb {
		background: #374151;
		border-radius: 4px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #4b5563;
	}
</style>
