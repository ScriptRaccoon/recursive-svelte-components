<script lang="ts">
	import Curve from './Curve.svelte'

	type Props = {
		maxDepth: number
	}

	let { maxDepth }: Props = $props()
</script>

{#if maxDepth === 0}
	<div class="line"></div>
{:else if maxDepth > 0}
	{#each { length: 4 }}
		<div class="segment">
			<Curve maxDepth={maxDepth - 1} />
		</div>
	{/each}
{/if}

<style>
	.line {
		width: 100%;
		height: 1px;
		background-color: white;
	}

	.segment {
		position: absolute;
		width: calc((1 / 3) * 100%);
	}

	.segment:nth-child(2) {
		transform-origin: left;
		transform: translateX(100%) rotate(-60deg);
	}

	.segment:nth-child(3) {
		transform-origin: right;
		transform: translateX(100%) rotate(60deg);
	}

	.segment:nth-child(4) {
		transform: translateX(200%);
	}
</style>
