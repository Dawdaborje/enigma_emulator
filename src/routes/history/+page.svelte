<script>
	import { onMount } from 'svelte';

	let isVisible = false;
	let activeSection = 'invention';

	onMount(() => {
		isVisible = true;
	});

	const timelinePeriods = [
		{
			id: 'invention',
			year: '1918-1920',
			title: 'The Invention',
			subtitle: 'Birth of a Legend',
			description:
				'Arthur Scherbius, a German electrical engineer, patents his "cipher machine" design, initially intended for commercial use to protect business communications.',
			keyEvents: [
				'1918: Arthur Scherbius patents the Enigma concept',
				'1919: First commercial Enigma machines produced',
				'1920: Scherbius Cipher Machines company founded'
			],
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwx4-LO5IYl74yGE8F6munSaLf-_KqeVMokQ&s',
			color: 'from-blue-500 to-purple-600'
		},
		{
			id: 'adoption',
			year: '1920s-1930s',
			title: 'Military Adoption',
			subtitle: 'From Business to Battlefield',
			description:
				'The German military recognizes the potential of Enigma and begins adopting it for secure communications, making crucial modifications for enhanced security.',
			keyEvents: [
				'1926: German Navy adopts Enigma',
				'1928: German Army begins using Enigma',
				'1930: Luftwaffe implements Enigma systems'
			],
			image: '⚔️',
			color: 'from-green-500 to-teal-600'
		},
		{
			id: 'polish',
			year: '1932-1939',
			title: 'Polish Breakthrough',
			subtitle: 'Mathematical Genius',
			description:
				'Polish mathematicians led by Marian Rejewski make the first significant breakthrough in cracking Enigma using mathematical analysis rather than traditional cryptography.',
			keyEvents: [
				'1932: Marian Rejewski breaks Enigma cipher',
				'1934: Poles build replica Enigma machines',
				'1939: Intelligence shared with Britain and France'
			],
			image: '🧮',
			color: 'from-red-500 to-pink-600'
		},
		{
			id: 'bletchley',
			year: '1939-1945',
			title: 'Bletchley Park',
			subtitle: 'The Codebreakers',
			description:
				'British mathematicians and cryptographers at Bletchley Park, including Alan Turing, develop advanced methods to break Enigma on an industrial scale.',
			keyEvents: [
				'1939: Government Code and Cypher School established',
				'1940: First Colossus computer built',
				'1941: Naval Enigma regularly broken'
			],
			image: '🏛️',
			color: 'from-amber-500 to-orange-600'
		},
		{
			id: 'impact',
			year: '1945-Present',
			title: 'Historical Impact',
			subtitle: 'Legacy and Lessons',
			description:
				'The breaking of Enigma significantly shortened WWII and laid the foundation for modern computer science and cryptography.',
			keyEvents: [
				'1945: War ends, Enigma work classified',
				'1970s: First public revelations about Ultra',
				'Today: Enigma inspires cybersecurity education'
			],
			image: '🌍',
			color: 'from-purple-500 to-indigo-600'
		}
	];

	const keyFigures = [
		{
			name: 'Arthur Scherbius',
			role: 'Inventor',
			years: '1878-1929',
			contribution: 'Invented the Enigma machine and founded the company that produced it.',
			quote: 'The perfect cipher machine should be simple to operate but impossible to break.',
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwx4-LO5IYl74yGE8F6munSaLf-_KqeVMokQ&s'
		},
		{
			name: 'Marian Rejewski',
			role: 'Polish Cryptographer',
			years: '1905-1980',
			contribution: 'First person to break the Enigma cipher using mathematical methods.',
			quote: 'Mathematics was our weapon against the seemingly unbreakable cipher.',
			image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Marian_Rejewski_1932_small.jpg'
		},
		{
			name: 'Alan Turing',
			role: 'British Mathematician',
			years: '1912-1954',
			contribution: 'Developed the Bombe machine and advanced cryptanalytic techniques.',
			quote:
				'We can only see a short distance ahead, but we can see plenty there that needs to be done.',
			image: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Alan_Turing_%281951%29.jpg'
		},
		{
			name: 'Dilly Knox',
			role: 'Senior Cryptographer',
			years: '1884-1943',
			contribution: 'Led the initial British efforts to understand Enigma mechanics.',
			quote: 'The machine thinks it is unbreakable, but every cipher has a weakness.',
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD_KZfdQFjXPJSWZW8B4z3ZjvpXmamTW_YuQ&s'
		}
	];

	const warImpact = [
		{
			title: 'Battle of the Atlantic',
			description:
				'Breaking Naval Enigma helped Allied convoys avoid U-boat attacks, saving countless lives and supplies.',
			impact: 'Reduced shipping losses by 70%',
			icon: '🚢'
		},
		{
			title: 'D-Day Landings',
			description:
				'Enigma intelligence revealed German troop positions and confirmed the success of deception operations.',
			impact: 'Ensured tactical surprise',
			icon: '🏖️'
		},
		{
			title: 'Eastern Front',
			description:
				'Intercepted communications revealed German strategies and troop movements on the Russian front.',
			impact: 'Aided Soviet resistance',
			icon: '❄️'
		},
		{
			title: 'War Duration',
			description: 'Historians estimate that breaking Enigma shortened the war by 2-3 years.',
			impact: 'Saved millions of lives',
			icon: '⏰'
		}
	];

	/**
	 * @param {string} sectionId
	 */
	function setActiveSection(sectionId) {
		activeSection = sectionId;
	}
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
					class="mb-6 text-5xl font-bold tracking-tight transition-all duration-1000 sm:text-6xl {isVisible
						? 'translate-y-0 opacity-100'
						: 'translate-y-10 opacity-0'}"
				>
					<span class="text-white">The</span>
					<span class="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"
						>Enigma</span
					>
					<span class="text-white">Story</span>
				</h1>
				<p
					class="mx-auto mb-8 max-w-3xl text-xl text-gray-300 transition-all delay-300 duration-1000 sm:text-2xl {isVisible
						? 'translate-y-0 opacity-100'
						: 'translate-y-10 opacity-0'}"
				>
					From commercial cipher machine to the most famous code in history
				</p>
				<div
					class="transition-all delay-500 duration-1000 {isVisible
						? 'translate-y-0 opacity-100'
						: 'translate-y-10 opacity-0'}"
				>
					<div
						class="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/20 px-6 py-3 text-amber-400"
					>
						<svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span class="font-medium">1918-1945: 27 Years That Changed History</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Interactive Timeline -->
	<section class="bg-gray-900 py-20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold">Timeline of Innovation</h2>
				<p class="mx-auto max-w-3xl text-xl text-gray-300">
					Follow the journey from invention to impact across three decades
				</p>
			</div>

			<!-- Timeline Navigation -->
			<div class="mb-12 flex flex-wrap justify-center gap-4">
				{#each timelinePeriods as period}
					<button
						class="group rounded-lg px-6 py-3 transition-all duration-300 {activeSection ===
						period.id
							? 'bg-amber-500 text-black'
							: 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'}"
						on:click={() => setActiveSection(period.id)}
					>
						<div class="text-sm font-medium">{period.year}</div>
						<div class="text-xs opacity-80">{period.title}</div>
					</button>
				{/each}
			</div>

			<!-- Timeline Content -->
			<div class="grid items-center gap-8 lg:grid-cols-2">
				<!-- Content -->
				<div>
					{#each timelinePeriods as period}
						{#if activeSection === period.id}
							<div class="space-y-6">
								<div>
									<div class="mb-2 text-sm font-medium text-amber-400">{period.year}</div>
									<h3 class="mb-2 text-3xl font-bold text-white">{period.title}</h3>
									<div class="mb-4 text-lg text-gray-400">{period.subtitle}</div>
									<p class="text-lg leading-relaxed text-gray-300">{period.description}</p>
								</div>

								<div class="space-y-3">
									<h4 class="text-lg font-semibold text-amber-400">Key Events:</h4>
									<ul class="space-y-2">
										{#each period.keyEvents as event}
											<li class="flex items-start space-x-3">
												<svg
													class="mt-1 h-4 w-4 flex-shrink-0 text-amber-400"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path
														fill-rule="evenodd"
														d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
														clip-rule="evenodd"
													/>
												</svg>
												<span class="text-gray-300">{event}</span>
											</li>
										{/each}
									</ul>
								</div>
							</div>
						{/if}
					{/each}
				</div>

				<!-- Visual -->
				<div class="flex justify-center">
					{#each timelinePeriods as period}
						{#if activeSection === period.id}
							<div class="text-center">
								<img
									class="mx-auto mb-6 h-32 w-32 rounded-full bg-gradient-to-br {period.color} flex animate-pulse items-center justify-center text-6xl shadow-2xl"
									src={period.image}
									alt={period.id}
								/>
								<div class="mb-2 text-2xl font-bold text-white">{period.title}</div>
								<div class="text-amber-400">{period.subtitle}</div>
							</div>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Key Figures -->
	<section class="bg-gray-800/30 py-20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold">Heroes and Pioneers</h2>
				<p class="mx-auto max-w-3xl text-xl text-gray-300">
					The brilliant minds who created, used, and ultimately defeated the Enigma machine
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
				{#each keyFigures as figure}
					<div
						class="group rounded-2xl border border-gray-700 bg-gray-800/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/50 hover:bg-gray-800/80"
					>
						<div class="text-center">
							<div class="mb-4 text-6xl"></div>
							<img src={figure.image} alt={figure.name} />
							<h3
								class="mb-2 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-amber-400"
							>
								{figure.name}
							</h3>
							<div class="mb-2 font-medium text-amber-400">{figure.role}</div>
							<div class="mb-4 text-sm text-gray-400">{figure.years}</div>
							<p class="mb-4 text-sm leading-relaxed text-gray-300">{figure.contribution}</p>
							<blockquote class="border-l-2 border-amber-500 pl-3 text-xs text-gray-400 italic">
								"{figure.quote}"
							</blockquote>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- War Impact -->
	<section class="bg-gray-900 py-20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold">Impact on World War II</h2>
				<p class="mx-auto max-w-3xl text-xl text-gray-300">
					How breaking Enigma changed the course of the war and saved countless lives
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
				{#each warImpact as impact}
					<div class="group text-center">
						<div
							class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-3xl transition-transform duration-300 group-hover:scale-110"
						>
							{impact.icon}
						</div>
						<h3
							class="mb-3 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-amber-400"
						>
							{impact.title}
						</h3>
						<p class="mb-4 text-sm leading-relaxed text-gray-300">{impact.description}</p>
						<div class="text-sm font-semibold text-amber-400">{impact.impact}</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Technical Evolution -->
	<section class="bg-gray-800/30 py-20">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold">Technical Evolution</h2>
				<p class="text-xl text-gray-300">
					How the Enigma machine evolved from simple concept to complex cipher
				</p>
			</div>

			<div class="space-y-8">
				<!-- Commercial Version -->
				<div class="grid items-center gap-8 lg:grid-cols-2">
					<div class="rounded-2xl border border-gray-700 bg-gray-800/60 p-8 backdrop-blur-sm">
						<h3 class="mb-4 text-2xl font-semibold text-amber-400">Commercial Enigma (1920s)</h3>
						<ul class="space-y-3 text-gray-300">
							<li class="flex items-start space-x-3">
								<div class="mt-1 h-2 w-2 rounded-full bg-amber-500"></div>
								<span>3 rotors with fixed wiring</span>
							</li>
							<li class="flex items-start space-x-3">
								<div class="mt-1 h-2 w-2 rounded-full bg-amber-500"></div>
								<span>No plugboard connections</span>
							</li>
							<li class="flex items-start space-x-3">
								<div class="mt-1 h-2 w-2 rounded-full bg-amber-500"></div>
								<span>Simple reflector design</span>
							</li>
							<li class="flex items-start space-x-3">
								<div class="mt-1 h-2 w-2 rounded-full bg-amber-500"></div>
								<span>17,576 possible settings</span>
							</li>
						</ul>
					</div>
					<div class="text-center">
						<div class="mb-4 text-8xl">📠</div>
						<div class="text-lg text-gray-400">Basic cipher for businesses</div>
					</div>
				</div>

				<!-- Military Version -->
				<div class="grid items-center gap-8 lg:grid-cols-2">
					<div class="text-center lg:order-2">
						<div class="mb-4 text-8xl">⚙️</div>
						<div class="text-lg text-gray-400">Enhanced military security</div>
					</div>
					<div
						class="rounded-2xl border border-gray-700 bg-gray-800/60 p-8 backdrop-blur-sm lg:order-1"
					>
						<h3 class="mb-4 text-2xl font-semibold text-amber-400">
							Military Enigma (1930s-1940s)
						</h3>
						<ul class="space-y-3 text-gray-300">
							<li class="flex items-start space-x-3">
								<div class="mt-1 h-2 w-2 rounded-full bg-amber-500"></div>
								<span>5 available rotors (choose 3)</span>
							</li>
							<li class="flex items-start space-x-3">
								<div class="mt-1 h-2 w-2 rounded-full bg-amber-500"></div>
								<span>Plugboard with up to 13 pairs</span>
							</li>
							<li class="flex items-start space-x-3">
								<div class="mt-1 h-2 w-2 rounded-full bg-amber-500"></div>
								<span>Ring settings and daily keys</span>
							</li>
							<li class="flex items-start space-x-3">
								<div class="mt-1 h-2 w-2 rounded-full bg-amber-500"></div>
								<span>158+ quintillion combinations</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Legacy Section -->
	<section class="bg-gray-900 py-20">
		<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
			<h2 class="mb-8 text-4xl font-bold">The Lasting Legacy</h2>
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
							d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
						/>
					</svg>
				</div>
				<blockquote class="mb-8 text-2xl leading-relaxed text-gray-300">
					"The story of Enigma is not just about a machine—it's about human ingenuity, the power of
					mathematics, and how intellectual courage can change the world."
				</blockquote>
				<div class="grid gap-8 text-center md:grid-cols-3">
					<div>
						<div class="mb-2 text-3xl font-bold text-amber-400">Foundation</div>
						<div class="text-gray-300">of modern computer science</div>
					</div>
					<div>
						<div class="mb-2 text-3xl font-bold text-amber-400">Inspiration</div>
						<div class="text-gray-300">for cybersecurity research</div>
					</div>
					<div>
						<div class="mb-2 text-3xl font-bold text-amber-400">Symbol</div>
						<div class="text-gray-300">of mathematical triumph</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Call to Action -->
	<section class="bg-gradient-to-br from-amber-500/10 to-orange-500/10 py-20">
		<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
			<h2 class="mb-6 text-4xl font-bold">Experience History</h2>
			<p class="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
				Now that you know the story, experience the machine that changed history. Try our authentic
				Enigma emulator and discover the complexity that fascinated and challenged the greatest
				minds of the 20th century.
			</p>
			<div class="flex flex-wrap justify-center gap-4">
				<a
					href="/playground"
					class="group rounded-lg bg-amber-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-amber-400 hover:shadow-xl"
				>
					<span class="flex items-center space-x-2">
						<span>Try the Enigma Machine</span>
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
					href="/features"
					class="rounded-lg border border-amber-500 px-8 py-4 font-semibold text-amber-400 transition-all duration-300 hover:scale-105 hover:bg-amber-500/10"
				>
					Explore Features
				</a>
			</div>
		</div>
	</section>
</div>

<style>
	/* Custom animations */
	@keyframes fade-in-up {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in-up {
		animation: fade-in-up 0.6s ease-out forwards;
	}

	/* Smooth transitions */
	* {
		transition-property: color, background-color, border-color, transform, box-shadow;
		transition-duration: 0.2s;
		transition-timing-function: ease-in-out;
	}

	/* Custom scrollbar */
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
