<script>
	import Carpet from './Carpet.svelte'
	import RangeInput from '$lib/RangeInput.svelte'

	let maxDepth = $state(2)
</script>

<h1>Sierpinski Carpet</h1>

<RangeInput
	bind:value={maxDepth}
	min={0}
	max={4}
	label="maximal depth of carpet"
/>

<div class="wrapper">
	<Carpet {maxDepth} />
</div>

<style>
	.wrapper {
		margin-top: 1rem;
	}
</style>
