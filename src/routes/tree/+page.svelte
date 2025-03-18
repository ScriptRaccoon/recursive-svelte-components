<script>
	import { browser } from '$app/environment'
	import RangeInput from '$lib/RangeInput.svelte'
	import Block from './Block.svelte'

	let angle = $state(30)
	let depth = $state(10)

	const size = browser ? window.innerWidth / 12 : 100
</script>

<h1>Pythagorean Tree</h1>

<RangeInput bind:value={angle} label="angle" min={0} max={90} />
<RangeInput bind:value={depth} label="depth" min={0} max={12} />

<div class="wrapper">
	<Block {depth} {size} {angle} />
</div>

<style>
	.wrapper {
		margin-top: 2rem;
		display: flex;
		justify-content: center;
	}
</style>
