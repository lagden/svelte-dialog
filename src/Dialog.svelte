<script>
	import {onDestroy} from 'svelte'
	import {init} from './acts.js'

	import Base from './Base.svelte'

	export let name = undefined
	export let title = undefined
	export let message = undefined
	export let component = undefined
	export let maxHeight = false
	export let useAlignTop = true
	export let showClose = true
	export let showTitle = true
	export let customStyle = ''

	const opts = {
		title,
		message,
		component,
		maxHeight,
		useAlignTop,
		showClose,
		showTitle,
		customStyle,
	}

	const dialog = init(opts, name)

	function close() {
		$dialog.open = false
	}

	function handleKeydown(event) {
		if (event.key === 'Escape' && showClose) {
			event.preventDefault()
			close()
		}
	}

	const optsKeys = Object.keys(opts)
	const unsubscribe = dialog.subscribe(o => {
		for (const k of optsKeys) {
			opts[k] = o?.[k] ?? opts[k]
		}
	})

	onDestroy(() => {
		unsubscribe()
	})
</script>

<svelte:window on:keydown={handleKeydown}/>

{#if $dialog.open}
	<Base
		maxHeight={opts.maxHeight}
		useAlignTop={opts.useAlignTop}
		showClose={opts.showClose}
		showTitle={opts.showTitle}
		customStyle={opts.customStyle}
		{...$$restProps}
		on:click={close}
	>
		<h3 class="_tadashi_svelte_dialog__title" slot="header">{opts.title}</h3>

		{#if opts.message}
			{@html opts.message}
		{/if}

		{#if opts.component}
			<svelte:component this={opts.component.element} {...opts.component?.props ?? {}} />
		{/if}

		<slot />
	</Base>
{/if}

<style>
._tadashi_svelte_dialog__title {
	margin: var(--tadashi_svelte_dialog__title_margin, 0);
	padding: var(--tadashi_svelte_dialog__title_padding, 0);
	font-size: var(--tadashi_svelte_dialog__title_font_size, 1.5em);
}
</style>
