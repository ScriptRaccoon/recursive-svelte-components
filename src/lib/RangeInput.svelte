<script lang="ts">
	type Props = {
		value: number
		label: string
		min: number
		max: number
		step?: number
	}

	let { value = $bindable(), label, min, max, step = 1 }: Props = $props()
</script>

<label>
	<input type="range" bind:value {min} {max} {step} aria-label={label} />
	<span aria-hidden={true} class="value">
		{value}
	</span>
</label>

<style>
	label {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	.value {
		width: 2ch;
	}
</style>
