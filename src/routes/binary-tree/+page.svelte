<script>
	import { browser } from '$app/environment'
	import RangeInput from '$lib/RangeInput.svelte'
	import BinaryTree from './BinaryTree.svelte'

	let maxDepth = $state(10)
	let leftAngle = $state(30)
	let rightAngle = $state(-50)
</script>

<RangeInput
	bind:value={maxDepth}
	label="maximal depth of binary tree"
	min={0}
	max={16}
/>

<RangeInput bind:value={leftAngle} label="left angle" min={-90} max={90} />

<RangeInput bind:value={rightAngle} label="right angle" min={-90} max={90} />

{#if browser}
	<div class="wrapper">
		<BinaryTree
			{maxDepth}
			size={Math.min(window.innerWidth, window.innerHeight) * 0.2}
			{leftAngle}
			{rightAngle}
		/>
	</div>
{/if}

<style>
	.wrapper {
		margin-top: 1rem;
		display: flex;
		justify-content: center;
	}
</style>
