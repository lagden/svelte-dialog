<script>
import {onDestroy, tick} from 'svelte'
import {init, componentMap} from './acts.js'

import Base from './Base.svelte'

export let name = undefined
export let open = false
export let component = undefined
export let componentName = undefined
export let componentProps = {}

let {
	class: class_attr,
	...attrs
} = $$restProps
let isOpen = open

/** @type {import("svelte").ComponentType} */
let componentBase

/** @type {import("svelte").ComponentType} */
let componentMaped

const dialogStore = init({
	name,
	open,
	component,
	componentName,
	componentProps,
})

function closeDialog() {
	dialogStore.closeIt()
}

function handleKeydown(event) {
	if (event.key === 'Escape') {
		event.preventDefault()
		closeDialog()
	}
}

function onDialogState(event) {
	isOpen = event.detail
}

const unsubscribe = dialogStore.subscribe(async data => {
	componentMaped = undefined
	await tick()
	componentMaped = componentMap.get(data.componentName)
	componentBase?.[data.open ? 'open' : 'close']()
})

onDestroy(() => {
	unsubscribe && unsubscribe()
})
</script>

<svelte:window on:keydown={handleKeydown} />

<Base
	bind:this={componentBase}
	on:dialogState={onDialogState}
	{...class_attr ? {class: class_attr} : {}}
	{...attrs}
>
	{#if isOpen && componentMaped}
		<svelte:component
			this={componentMaped}
			{...$dialogStore.componentProps ?? {}}
			{...name ? {name} : {}}
		/>
	{/if}
</Base>
