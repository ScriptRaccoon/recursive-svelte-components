<script lang="ts">
	import Binary from './Binary.svelte'

	type Props = {
		maxDepth: number
	}

	let { maxDepth }: Props = $props()
</script>

{#if maxDepth > 0}
	<div class="grid" style:--maxdepth={maxDepth}>
		{#each { length: 4 } as _, i}
			<div class="box">
				{#if i <= 2}
					<Binary maxDepth={maxDepth - 1} />
				{/if}
			</div>
		{/each}
	</div>
{:else if maxDepth === 0}
	<div class="box"></div>
{/if}

<style>
	.grid {
		aspect-ratio: 1;
		display: grid;
		grid-template-rows: repeat(2, 1fr);
		grid-template-columns: repeat(2, 1fr);
		gap: calc(0.5 * var(--maxdepth) * 1px);
		background-color: black;
	}

	.box {
		background-image: var(--gradient);
		aspect-ratio: 1;
	}
</style>
