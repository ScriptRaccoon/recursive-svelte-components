<script lang="ts">
	import Binary from './Binary.svelte'

	type Props = {
		depth: number
	}

	let { depth }: Props = $props()
</script>

{#if depth > 0}
	<div class="grid" style:--depth={depth}>
		{#each { length: 4 } as _, i}
			<div class="box">
				{#if i <= 2}
					<Binary depth={depth - 1} />
				{/if}
			</div>
		{/each}
	</div>
{:else if depth === 0}
	<div class="box"></div>
{/if}

<style>
	.grid {
		aspect-ratio: 1;
		display: grid;
		grid-template-rows: repeat(2, 1fr);
		grid-template-columns: repeat(2, 1fr);
		gap: calc(0.5 * var(--depth) * 1px);
		background-color: black;
	}

	.box {
		background-image: var(--gradient);
		aspect-ratio: 1;
	}
</style>
