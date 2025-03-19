<script lang="ts">
	import RangeInput from '$lib/RangeInput.svelte'
	import Curve from './Curve.svelte'

	let maxDepth = $state(4)
</script>

<h1>Koch Snowflake</h1>

<RangeInput
	bind:value={maxDepth}
	label="Maximal recursion depth of snowflake"
	min={0}
	max={6}
/>

<div class="wrapper">
	<Curve {maxDepth} />
	<div class="second">
		<Curve {maxDepth} />
	</div>
	<div class="third">
		<Curve {maxDepth} />
	</div>
</div>

<style>
	.wrapper {
		margin-top: min(14rem, 25vw);
		width: 80%;
		margin-inline: auto;
		position: relative;
	}

	.second {
		transform-origin: left;
		rotate: 60deg;
		scale: 1 -1;
	}

	.third {
		transform-origin: right;
		rotate: -60deg;
		scale: 1 -1;
	}
</style>
