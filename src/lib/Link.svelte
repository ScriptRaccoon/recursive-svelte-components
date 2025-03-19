<script lang="ts">
	type Props = {
		path: string
		name: string
	}

	let { path, name }: Props = $props()

	import { page } from '$app/state'
</script>

<a
	class="link"
	href={path}
	class:active={page.route.id === path}
	aria-current={page.route.id === path}
>
	{name}
</a>

<style>
	.link {
		background-color: rebeccapurple;
		padding: 0.3rem 0.8rem;
		border-radius: 0.25rem;
		text-decoration: none;
		font-size: 1rem;
		white-space: nowrap;
	}

	.link.active {
		background-color: mediumorchid;
	}
</style>
