<script lang="ts">
	import Tree from './Tree.svelte'

	type Props = {
		maxDepth: number
		angle: number
		size: number
	}

	const unit = Math.PI / 180

	let { maxDepth, size, angle }: Props = $props()
</script>

{#if maxDepth >= 0}
	<div class="square" style:--size="{size}px" style:--angle="{angle}deg">
		<div class="left">
			<!-- The component renders itself! -->
			<Tree
				maxDepth={maxDepth - 1}
				size={size * Math.cos(unit * angle)}
				{angle}
			/>
		</div>
		<div
			class="right"
			style:--smaller-size="{size * Math.sin(unit * angle)}px"
		>
			<!-- The component renders itself! -->
			<Tree
				maxDepth={maxDepth - 1}
				size={size * Math.sin(unit * angle)}
				{angle}
			/>
		</div>
	</div>
{/if}

<style>
	.square {
		position: absolute;
		background-image: var(--gradient);
		width: var(--size);
		aspect-ratio: 1;
	}

	.left,
	.right {
		position: absolute;
		top: 100%;
	}

	.left {
		rotate: var(--angle);
	}

	.right {
		right: 0;
		transform: translateX(calc(-1 * var(--smaller-size)));
		rotate: calc(var(--angle) - 90deg);
	}
</style>
