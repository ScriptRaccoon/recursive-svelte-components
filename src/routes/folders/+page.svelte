<script lang="ts">
	import sampleFolder from './sample.json';
	import Folder from './Folder.svelte';
</script>

<h1>Folders and files</h1>

<div class="wrapper">
	<Folder folder={sampleFolder} />
</div>

<style>
	.wrapper {
		display: flex;
		justify-content: center;
	}
</style>
