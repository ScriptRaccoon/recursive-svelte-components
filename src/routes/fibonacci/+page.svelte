<script lang="ts">
	import Fibonacci from './Fibonacci.svelte'
	import RangeInput from '$lib/RangeInput.svelte'

	let fiboIndex = $state(8)
	let fiboWrapper = $state<HTMLElement | null>(null)

	const countBlocks = (node: HTMLElement, _key: number) => {
		const blocks = Array.from(node.querySelectorAll('.block'))
		for (let i = 0; i < blocks.length; i++) {
			blocks[i].innerHTML = String(i + 1)
		}
	}

	$effect(() => {
		if (fiboWrapper) countBlocks(fiboWrapper, fiboIndex)
	})
</script>

<h1>Fibonacci Sequence</h1>

<RangeInput
	bind:value={fiboIndex}
	label="index for fibonacci sequence"
	min={0}
	max={12}
/>

<div class="wrapper" bind:this={fiboWrapper}>
	<Fibonacci index={fiboIndex} />
</div>

<style>
	.wrapper {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: 1rem;
	}
</style>
