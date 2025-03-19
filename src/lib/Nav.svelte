<script>
	import { faGithub } from '@fortawesome/free-brands-svg-icons'
	import { faHome } from '@fortawesome/free-solid-svg-icons'
	import Fa from 'svelte-fa'
	import Link from './Link.svelte'
</script>

<nav>
	<ul>
		<li>
			<Link path="/folders" name="Folders and Files" />
		</li>
		<li>
			<Link path="/carpet" name="Sierpinski Carpet" />
		</li>
		<li>
			<Link path="/fibonacci" name="Fibonacci Sequence" />
		</li>
		<li>
			<Link path="/tiling" name="Binary Tiling" />
		</li>
		<li>
			<Link path="/tree" name="Pythagorean Tree" />
		</li>
		<li>
			<Link path="/squares" name="Inscribed Squares" />
		</li>
		<li>
			<Link path="/snowflake" name="Koch Snowflake" />
		</li>

		<li>
			<ul class="special-links">
				<li>
					<a href="/" aria-label="Home">
						<Fa icon={faHome} />
					</a>
				</li>
				<li>
					<a
						href="https://github.com/ScriptRaccoon/recursive-svelte-components"
						target="_blank"
						aria-label="GitHub"
					>
						<Fa icon={faGithub} />
					</a>
				</li>
			</ul>
		</li>
	</ul>
</nav>

<style>
	ul {
		list-style: none;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 0.5rem 1rem;
	}

	nav {
		padding-inline: 0.5rem;
		margin-block: 1.5rem;
	}

	.special-links {
		display: flex;
		gap: 1rem;
	}

	@media (max-width: 720px) {
		ul {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 0.5rem;
		}

		ul :global(.link) {
			display: block;
		}

		.special-links {
			justify-content: flex-end;
		}
	}
</style>
