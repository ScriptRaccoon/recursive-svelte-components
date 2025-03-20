<script lang="ts">
	import BinaryTree from './BinaryTree.svelte'

	type Props = {
		maxDepth: number
		size: number
		leftAngle: number
		rightAngle: number
	}

	let { maxDepth, size, leftAngle, rightAngle }: Props = $props()
</script>

{#if maxDepth >= 0}
	<div
		class="branch"
		style:--size="{size}px"
		style:--left-angle="{leftAngle}deg"
		style:--right-angle="{rightAngle}deg"
		style:--thickness="{size * 0.05}px"
	>
		<BinaryTree
			maxDepth={maxDepth - 1}
			size={0.75 * size}
			{leftAngle}
			{rightAngle}
		/>
		<BinaryTree
			maxDepth={maxDepth - 1}
			size={0.75 * size}
			{leftAngle}
			{rightAngle}
		/>
	</div>
{/if}

<style>
	.branch {
		width: var(--thickness);
		height: var(--size);
		background-color: white;
		position: relative;
	}

	.branch > :global(*) {
		position: absolute;
		transform-origin: top;
		top: 100%;
		transition: rotate 100ms ease-out;
		opacity: 0.95;
	}

	.branch > :global(*:nth-child(1)) {
		rotate: var(--left-angle);
	}

	.branch > :global(*:nth-child(2)) {
		rotate: var(--right-angle);
	}
</style>
