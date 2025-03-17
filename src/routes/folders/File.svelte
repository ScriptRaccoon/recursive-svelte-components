<script lang="ts">
	import Fa from 'svelte-fa'
	import { faFileAlt } from '@fortawesome/free-regular-svg-icons'

	import type { FileData } from './types'

	type Props = {
		file: FileData
	}

	let { file }: Props = $props()
</script>

<div>
	<span class="icon">
		<Fa icon={faFileAlt} />
	</span>

	{file.name}.{file.extension}
</div>

<style>
	.icon {
		display: inline-block;
		width: 1.25rem;
	}
</style>
