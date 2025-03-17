<script>
	import { faGithub } from '@fortawesome/free-brands-svg-icons'
	import { faHome } from '@fortawesome/free-solid-svg-icons'
	import Fa from 'svelte-fa'
</script>

<nav>
	<ul>
		<li>
			<a href="/" aria-label="Home">
				<Fa icon={faHome} />
			</a>
		</li>
		<li>
			<a href="/folders">Folders and Files</a>
		</li>
		<li>
			<a href="/carpet">Sierpinski Carpet</a>
		</li>
		<li>
			<a href="/fibonacci">Fibonacci Sequence</a>
		</li>
		<li>
			<a href="/tiling">Binary Tiling</a>
		</li>
		<li>
			<a
				href="https://github.com/ScriptRaccoon/recursive-svelte-components/"
				target="_blank"
				aria-label="GitHub"
			>
				<Fa icon={faGithub} />
			</a>
		</li>
	</ul>
</nav>

<style>
	ul {
		list-style: none;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 0.25rem 1rem;
	}

	nav {
		margin-block: 1.5rem;
	}
</style>
