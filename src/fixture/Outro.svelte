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
	<h1 class="text-xl mb-4">{title} - {name}</h1>
	{#if message}
		<p class="mb-8">{message}</p>
	{/if}
	<button class="btn btn-accent" on:click={() => acts.close(name)}>Close</button>
</div>
