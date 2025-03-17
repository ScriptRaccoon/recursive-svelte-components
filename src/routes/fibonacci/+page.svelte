<script lang="ts">
	import Fibonacci from './Fibonacci.svelte';
	import RangeInput from '$lib/RangeInput.svelte';

	let fiboIndex = $state(8);
	let fiboWrapper = $state<HTMLElement | null>(null);

	const countBlocks = (node: HTMLElement, _key: number) => {
		const blocks = Array.from(node.querySelectorAll('.block'));
		for (let i = 0; i < blocks.length; i++) {
			blocks[i].innerHTML = String(i + 1);
		}
	};

	$effect(() => {
		if (fiboWrapper) countBlocks(fiboWrapper, fiboIndex);
	});
</script>

<h1>Fibonacci Sequence</h1>

<RangeInput bind:value={fiboIndex} label="index for fibonacci sequence" min={0} max={12} />

<div class="wrapper" bind:this={fiboWrapper}>
	<Fibonacci index={fiboIndex} />
</div>

<style>
	.wrapper {
		margin-inline: 2rem;
		margin-block: 1rem 2rem;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.wrapper :global(.block) {
		width: 2rem;
		height: 2rem;
		background-color: steelblue;
		border-radius: 0.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
	}
</style>
