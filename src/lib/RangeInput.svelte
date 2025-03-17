<script lang="ts">
	type Props = {
		value: number;
		label: string;
		min: number;
		max: number;
	};

	let { value = $bindable(), label, min, max }: Props = $props();
</script>

<div>
	<label>
		<input type="range" bind:value {min} {max} aria-label={label} />
		<span aria-hidden={true}>
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
</style>
