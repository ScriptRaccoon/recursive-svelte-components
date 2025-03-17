<script lang="ts">
	import Fa from "svelte-fa"
	import { faFolderClosed, faFolderOpen } from "@fortawesome/free-regular-svg-icons"

	import File from "./File.svelte"
	import Folder from "./Folder.svelte"
	import type { FolderData } from "./types"

	type Props = {
		folder: FolderData
		open?: boolean
	}

	let { folder, open = false }: Props = $props()
</script>

<div class="folder">
	<details bind:open>
		<summary>
			<span class="icon">
				<Fa icon={open ? faFolderOpen : faFolderClosed} />
			</span>
			{folder.name}
		</summary>

		<ul class="contents">
			{#each folder.subfolders as subfolder}
				<li>
					<Folder folder={subfolder} />
				</li>
			{/each}

			{#each folder.files as file}
				<li>
					<File {file} />
				</li>
			{/each}
		</ul>
	</details>
</div>

<style>
	summary {
		list-style: none;
	}

	summary::-webkit-details-marker {
		display: none;
	}

	.icon {
		display: inline-block;
		width: 1.25rem;
	}

	li {
		list-style: none;
	}

	.contents {
		translate: 1.5rem 0;
	}
</style>
