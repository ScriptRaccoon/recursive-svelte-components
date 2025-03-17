<script>
	import Carpet from './Carpet.svelte'
	import RangeInput from '$lib/RangeInput.svelte'

	let depth = $state(2)
</script>

<h1>Sierpinski Carpet</h1>

<RangeInput bind:value={depth} min={0} max={4} label="depth of carpet" />

<div class="wrapper">
	<Carpet {depth} />
</div>

<style>
	.wrapper {
		width: 100%;
		aspect-ratio: 1;
		padding-top: 1rem;
	}
</style>
