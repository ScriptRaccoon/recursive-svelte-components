<script>
	let sample = '<svelte:self />'
</script>

<h1>Recursive Svelte components</h1>

<p>
	This page features some examples of recursive Svelte components, i.e.,
	components that render themselves (with different props to avoid infinite
	loops).
</p>

<p>
	Notice that you don't need to use <code>{sample}</code> anymore to do that. Just
	import the component in its own file and use it.
</p>

<p>
	Every drawing here is done with CSS alone, no canvas is being used. You may
	check out the source code on <a
		href="https://github.com/ScriptRaccoon/recursive-svelte-components"
		target="_blank">GitHub</a
	> to see how it's done.
</p>
