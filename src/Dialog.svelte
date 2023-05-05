<script>
	import {init} from './acts.js'

	import Base from './Base.svelte'

	export let name = undefined
	export let component = undefined
	export let componentProps = undefined

	let element

	const dialog = init({
		component,
		componentProps,
	}, name)

	function handleKeydown(event) {
		if (event.key === 'Escape') {
			event.preventDefault()
			if (element && element.isOpen) {
				dialog.close()
			}
		}
	}

	$: {
		element?.[$dialog.open ? 'open' : 'close']()
	}
</script>

<svelte:window on:keydown={handleKeydown}/>

<Base bind:this={element} {...$$restProps}>
	{#if $dialog.component}
		<svelte:component this={$dialog.component} {...$dialog.componentProps ?? {}} />
	{/if}
</Base>
