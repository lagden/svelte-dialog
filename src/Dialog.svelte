<script>
	import {init} from './acts.js'

	import Base from './Base.svelte'

	export let milliseconds = 400
	export let name = undefined
	export let title = undefined
	export let message = undefined
	export let component = undefined
	export let maxHeight = false
	export let useAlignTop = true
	export let showClose = true
	export let showTitle = true
	export let customStyle = ''

	customStyle = `${$$restProps?.style ?? ''};${customStyle}`

	const dialog = init({
		title,
		message,
		component,
		maxHeight,
		useAlignTop,
		showClose,
		showTitle,
		customStyle,
	}, name)

	function close() {
		$dialog.open = false
	}

	function handleKeydown(event) {
		if (event.key === 'Escape' && showClose) {
			event.preventDefault()
			close()
		}
	}
</script>

<svelte:window on:keydown={handleKeydown}/>

{#if $dialog.open}
	<Base
		{dialog}
		{milliseconds}
		on:click={close}
	>
		<h3 class="_tadashi_svelte_dialog__title" slot="header">{$dialog.title}</h3>

		{#if $dialog.message}
			{@html $dialog.message}
		{/if}

		{#if $dialog.component?.element}
			<svelte:component this={$dialog.component.element} {...$dialog.component?.props ?? {}} />
		{/if}

		<slot />
	</Base>
{/if}

<style>
	/*
	:root {
		--tadashi_svelte_dialog__title_margin: 0;
		--tadashi_svelte_dialog__title_padding: 0;
		--tadashi_svelte_dialog__title_font_size: 1.5em;
	}
	*/

	._tadashi_svelte_dialog__title {
		margin: var(--tadashi_svelte_dialog__title_margin, 0);
		padding: var(--tadashi_svelte_dialog__title_padding, 0);
		font-size: var(--tadashi_svelte_dialog__title_font_size, 1.5em);
	}
</style>
