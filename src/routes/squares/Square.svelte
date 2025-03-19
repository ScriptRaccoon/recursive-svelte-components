<script lang="ts">
	import Square from './Square.svelte'

	type Props = {
		size: number
		offset: number
		maxDepth: number
		unbounded_depth: boolean
		rotation?: number
	}

	let {
		size,
		offset,
		maxDepth,
		unbounded_depth,
		rotation = 0,
	}: Props = $props()

	let next_size = $derived(size * Math.sqrt(offset ** 2 + (1 - offset) ** 2))
	let angle = $derived(-(180 / Math.PI) * Math.atan(offset / (1 - offset)))
</script>

{#if maxDepth >= 0 || (unbounded_depth && size >= 1)}
	<div
		class="square"
		style:--size="{size}px"
		style:--rotation="{rotation}deg"
	>
		<!-- The component renders itself! -->
		<Square
			size={next_size}
			{offset}
			maxDepth={maxDepth - 1}
			rotation={angle}
			{unbounded_depth}
		/>
	</div>
{/if}

<style>
	.square {
		outline: 0.5px solid white;
		width: var(--size);
		aspect-ratio: 1;
		rotate: var(--rotation);
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
