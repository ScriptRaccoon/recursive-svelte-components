<script lang="ts">
	import Square from './Square.svelte'

	type Props = {
		size: number
		offset: number
		depth: number
	}

	let { size, offset, depth }: Props = $props()

	let next_size = $derived(size * Math.sqrt(offset ** 2 + (1 - offset) ** 2))
	let angle = $derived(-(180 / Math.PI) * Math.atan(offset / (1 - offset)))
</script>

{#if depth >= 0}
	<div class="square" style:--size="{size}px" style:--angle="{angle}deg">
		<div class="transformer">
			<Square size={next_size} {offset} depth={depth - 1} />
		</div>
	</div>
{/if}

<style>
	.square {
		position: absolute;
		outline: 2px solid white;
		width: var(--size);
		aspect-ratio: 1;
	}

	.transformer {
		position: absolute;
		inset: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		rotate: var(--angle);
	}
</style>
