<script>
	import {init} from './acts.js'

	import Base from './Base.svelte'

	export let name = undefined
	export let open = false
	export let component = undefined
	export let componentProps = {}

	/** @type {import("svelte").ComponentType} */
	let componentBase

	const dialog = init({
		name,
		open,
		component,
		componentProps,
	})

	function closeDialog() {
		if (componentBase && componentBase.isOpen) {
			dialog.close()
		}
	}

	function handleKeydown(event) {
		if (event.key === 'Escape') {
			event.preventDefault()
			closeDialog()
		}
	}

	$: {
		componentBase?.[$dialog.open ? 'open' : 'close']()
	}
</script>

<svelte:window on:keydown={handleKeydown}/>

<Base bind:this={componentBase} {...$$restProps}>
	{#if $dialog.component}
		<svelte:component
			this={$dialog.component}
			{...($dialog.componentProps ?? {})}
			{...(name ? {name} : {})}
		/>
	{:else}
		<h3>Missing component!</h3>
		<button on:click="{closeDialog}">Close</button>
	{/if}
</Base>
