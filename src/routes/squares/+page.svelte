<script>
	import { browser } from '$app/environment'
	import RangeInput from '$lib/RangeInput.svelte'
	import Square from './Square.svelte'

	let maxDepth = $state(30)
	let offset = $state(0.1)

	const initial_size = browser ? Math.min(window.innerWidth - 100, 600) : 200

	let unbounded_depth = $state(false)
</script>

<h1>Inscribed Squares</h1>

<label>
	<span>Unbounded Depth</span>
	<input type="checkbox" bind:checked={unbounded_depth} />
</label>

<RangeInput bind:value={maxDepth} min={0} max={30} label="maximal depth" />
<RangeInput bind:value={offset} min={0} max={1} step={0.05} label="offset" />

<div class="wrapper">
	<Square {offset} size={initial_size} {maxDepth} {unbounded_depth} />
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
		gap: 0.5rem;
		font-size: 1rem;
	}
</style>
