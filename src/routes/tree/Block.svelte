<script lang="ts">
	import Block from './Block.svelte'

	type Props = {
		depth: number
		angle: number
		size: number
	}

	const unit = Math.PI / 180

	let { depth, size, angle }: Props = $props()
</script>

{#if depth >= 0}
	<div class="block" style:--size="{size}px" style:--angle="{angle}deg">
		<div class="left">
			<!-- The component renders itself! -->
			<Block
				depth={depth - 1}
				size={size * Math.cos(unit * angle)}
				{angle}
			/>
		</div>
		<div
			class="right"
			style:--smaller-size="{size * Math.sin(unit * angle)}px"
		>
			<!-- The component renders itself! -->
			<Block
				depth={depth - 1}
				size={size * Math.sin(unit * angle)}
				{angle}
			/>
		</div>
	</div>
{/if}

<style>
	.block {
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
		transform: rotate(var(--angle));
	}

	.right {
		right: 0;
		transform: translateX(calc(-1 * var(--smaller-size)));
		rotate: calc(var(--angle) - 90deg);
	}
</style>
