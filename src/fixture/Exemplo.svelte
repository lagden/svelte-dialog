<script>
import {acts} from '$lib/index.js'

export let name = undefined
export let title = undefined
export let message = undefined

let {
	class: class_attr,
	...attrs
} = $$restProps
</script>

<div {...class_attr ? {class: class_attr} : {}} {...attrs}>
	<h1 class="text-2xl mb-4">{title} - {name ?? 'geral'}</h1>
	{#if message}
		<p class="mb-8">{message}</p>
	{/if}
	<footer class="flex">
		<button class="btn btn-secondary ml-auto" on:click={() => acts.close(name)}>Close</button>
	</footer>
</div>
