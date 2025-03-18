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
	<div class="block" style:--size={size} style:--angle={angle}>
		<div class="left">
			<Block
				depth={depth - 1}
				size={size * Math.cos(unit * angle)}
				{angle}
			/>
		</div>
		<div class="right" style:--smaller-size={size * Math.sin(unit * angle)}>
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
		background-image: linear-gradient(skyblue, white);
		width: calc(1px * var(--size));
		aspect-ratio: 1;
	}

	.left,
	.right {
		position: absolute;
		top: 100%;
	}

	.left {
		transform: rotate(calc(1deg * var(--angle)));
	}

	.right {
		right: 0;
		transform: translateX(calc(-1px * var(--smaller-size)));
		rotate: calc(1deg * (var(--angle) - 90));
	}
</style>
