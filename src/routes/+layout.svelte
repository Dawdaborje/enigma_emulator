<script lang="ts">
	import Footer from '$lib/layout/footer.svelte';
	import NavBar from '$lib/layout/navBar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900">
	<div>
		<NavBar />
	</div>
	<div>
		{@render children()}
	</div>
	<div>
		<Footer />
	</div>
</div>
