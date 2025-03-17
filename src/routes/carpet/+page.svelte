<script>
	import Carpet from './Carpet.svelte';
	import RangeInput from '$lib/RangeInput.svelte';

	let depth = $state(2);
</script>

<h1>Sierpinski Carpet</h1>

<RangeInput bind:value={depth} min={0} max={4} label="depth of carpet" />

<div class="wrapper">
	<Carpet {depth} />
</div>

<style>
	.wrapper {
		margin-top: 1rem;
		width: min(90vw, 500px);
		aspect-ratio: 1;
		margin-inline: auto;
	}
</style>
