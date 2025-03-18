<script lang="ts">
	import Binary from './Binary.svelte'

	type Props = {
		depth: number
	}

	let { depth }: Props = $props()
</script>

<div class="container">
	{#if depth > 0}
		{#each { length: 4 } as _}
			<div class="box">
				<!-- The component renders itself! -->
				<Binary depth={depth - 1} />
			</div>
		{/each}
	{:else if depth === 0}
		<div class="box full"></div>
	{/if}
</div>

<style>
	.container {
		aspect-ratio: 1;
		display: grid;
		grid-template-rows: repeat(2, 1fr);
		grid-template-columns: repeat(2, 1fr);
		gap: 0.25rem;
		background-color: #000;
	}

	.box {
		background-image: var(--gradient);
	}

	.box.full {
		grid-row: 1 / span 2;
		grid-column: 1 / span 2;
	}
</style>
