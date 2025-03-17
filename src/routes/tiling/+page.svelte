<script>
	import RangeInput from '$lib/RangeInput.svelte';
	import Binary from './Binary.svelte';

	let depth = $state(4);
</script>

<h1>Binary Tiling</h1>

<RangeInput bind:value={depth} min={0} max={6} label="depth of binary tiling" />

<div class="wrapper">
	<Binary {depth} />
</div>

<style>
	.wrapper {
		margin-top: 1rem;
		width: min(90vw, 500px);
		aspect-ratio: 1;
		margin-inline: auto;
	}
</style>
