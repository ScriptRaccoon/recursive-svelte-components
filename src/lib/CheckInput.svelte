<script lang="ts">
	type Props = {
		label: string
		checked: boolean
	}

	let { label, checked = $bindable() }: Props = $props()
</script>

<label>
	<span>
		{label}
	</span>
	<input type="checkbox" bind:checked />
</label>

<style>
	label {
		display: flex;
		justify-content: center;
		font-size: 1rem;
		gap: 0.5rem;
	}
</style>
