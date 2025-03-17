<script lang="ts">
	import Binary from './Binary.svelte';

	type Props = {
		depth: number;
	};

	let { depth }: Props = $props();
</script>

<div class="container">
	{#if depth > 0}
		<div class="box">
			<!-- The component renders itself! -->
			<Binary depth={depth - 1} />
		</div>
		<div class="box">
			<!-- The component renders itself! -->
			<Binary depth={depth - 1} />
		</div>
		<div class="box">
			<!-- The component renders itself! -->
			<Binary depth={depth - 1} />
		</div>
		<div class="box">
			<!-- The component renders itself! -->
			<Binary depth={depth - 1} />
		</div>
	{:else if depth === 0}
		<div class="box full"></div>
	{/if}
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-rows: 1fr 1fr;
		grid-template-columns: 1fr 1fr;
		gap: 0.25rem;
		background-color: #000;
	}

	.box {
		background-color: skyblue;
	}

	.box.full {
		grid-row: 1 / span 2;
		grid-column: 1 / span 2;
	}
</style>
