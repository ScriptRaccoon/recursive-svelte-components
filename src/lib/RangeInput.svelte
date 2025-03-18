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

<div>
	<label>
		<input type="range" bind:value {min} {max} {step} aria-label={label} />
		<span aria-hidden={true} class="value">
			{value}
		</span>
	</label>
</div>

<style>
	div,
	label {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	label {
		gap: 0.5rem;
	}

	input {
		accent-color: yellow;
	}

	.value {
		width: 2ch;
	}
</style>
