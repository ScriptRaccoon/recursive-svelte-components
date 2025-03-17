<script lang="ts">
	import Fibonacci from './Fibonacci.svelte';
	type Props = {
		index: number;
	};

	let { index }: Props = $props();
</script>

{#if index === 1}
	<div class="block"></div>
{:else if index >= 2}
	<Fibonacci index={index - 1} />
	<Fibonacci index={index - 2} />
{/if}

<style>
	.block {
		background-color: steelblue;
	}
</style>
