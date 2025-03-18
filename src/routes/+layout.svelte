<script lang="ts">
	import './app.css'
	import Nav from '$lib/Nav.svelte'
</script>

<svelte:head>
	<title>Recursive Svelte components</title>
</svelte:head>

<Nav />

<main>
	<slot />
</main>

<style>
	main {
		max-width: 50rem;
		margin: 0 auto;
		padding-inline: 1rem;
	}
</style>
