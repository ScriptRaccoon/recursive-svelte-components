<script lang="ts">
	import Carpet from './Carpet.svelte'

	type Props = {
		maxDepth: number
	}

	let { maxDepth }: Props = $props()
</script>

{#if maxDepth >= 0}
	<div class="grid">
		{#each { length: 3 } as _, i}
			{#each { length: 3 } as _, j}
				{@const isCenter = i === 1 && j === 1}
				<div class:filled={isCenter}>
					{#if !isCenter}
						<!-- The component renders itself! -->
						<Carpet maxDepth={maxDepth - 1} />
					{/if}
				</div>
			{/each}
		{/each}
	</div>
{/if}

<style>
	.grid {
		aspect-ratio: 1;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(3, 1fr);
	}

	.filled {
		background-image: var(--gradient);
	}
</style>
