<script lang="ts">
	import { browser } from '$app/environment'
	import CheckInput from '$lib/CheckInput.svelte'
	import RangeInput from '$lib/RangeInput.svelte'
	import PythagorasTree from './PythagorasTree.svelte'

	let angle = $state(30)
	let maxDepth = $state(10)
	let unbounded_depth = $state(false)

	const size = browser ? window.innerWidth / 12 : 100
</script>

<h1>Pythagoras Tree</h1>

<CheckInput label="Unbounded Depth" bind:checked={unbounded_depth} />
<RangeInput bind:value={angle} label="angle" min={0} max={90} />
<RangeInput bind:value={maxDepth} label="depth" min={0} max={12} />

<div class="wrapper">
	<PythagorasTree {maxDepth} {size} {angle} {unbounded_depth} />
</div>

<style>
	.wrapper {
		margin-top: 2rem;
		display: flex;
		justify-content: center;
	}
</style>
