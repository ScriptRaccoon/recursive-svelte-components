<script lang="ts">
	import sampleFolder from './sample.json'
	import Folder from './Folder.svelte'
</script>

<h1>Folders and Files</h1>

<p>Open the folder and its subfolders.</p>

<Folder folder={sampleFolder} />

<style>
	p {
		margin-bottom: 1.5rem;
	}
</style>
