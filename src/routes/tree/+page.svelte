<script lang="ts">
	import { browser } from '$app/environment'
	import RangeInput from '$lib/RangeInput.svelte'
	import Tree from './Tree.svelte'

	let angle = $state(30)
	let maxDepth = $state(10)
	let unbounded_depth = $state(false)

	const size = browser ? window.innerWidth / 12 : 100
</script>

<h1>Pythagorean Tree</h1>

<label>
	<span>Unbounded Depth</span>
	<input type="checkbox" bind:checked={unbounded_depth} />
</label>

<RangeInput bind:value={angle} label="angle" min={0} max={90} />
<RangeInput bind:value={maxDepth} label="depth" min={0} max={12} />

<div class="wrapper">
	<Tree {maxDepth} {size} {angle} {unbounded_depth} />
</div>

<style>
	.wrapper {
		margin-top: 2rem;
		display: flex;
		justify-content: center;
	}

	label {
		display: flex;
		justify-content: center;
		font-size: 1rem;
		gap: 0.5rem;
	}
</style>
