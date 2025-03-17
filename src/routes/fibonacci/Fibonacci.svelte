<script lang="ts">
	import Fibonacci from './Fibonacci.svelte'
	type Props = {
		index: number
	}

	let { index }: Props = $props()
</script>

{#if index === 1}
	<div class="block"></div>
{:else if index >= 2}
	<!-- The component renders itself! -->
	<Fibonacci index={index - 1} />
	<Fibonacci index={index - 2} />
{/if}

<style>
	.block {
		width: 2rem;
		height: 2rem;
		background-color: #555;
		border-radius: 0.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
