<script>
	import RangeInput from '$lib/RangeInput.svelte'
	import Tiling from './Tiling.svelte'

	let maxDepth = $state(6)
</script>

<h1>Binary Tiling</h1>

<RangeInput
	bind:value={maxDepth}
	min={0}
	max={8}
	label="maximal depth of binary tiling"
/>

<div class="wrapper">
	<Tiling {maxDepth} />
</div>

<style>
	.wrapper {
		margin-top: 2rem;
		width: min(90vw, 500px);
		aspect-ratio: 1;
		margin-inline: auto;
	}
</style>
