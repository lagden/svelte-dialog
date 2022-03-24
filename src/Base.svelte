<script>
	import {fade, fly} from 'svelte/transition'

	export let maxHeight
	export let useAlignTop
	export let showClose
	export let showTitle
	export let customStyle
	export let milliseconds = 400

	$$restProps.style = `${$$restProps?.style ?? ''};${customStyle}`

	function init(node) {
		document.body.insertAdjacentElement('beforeend', node)
		return {
			destroy() {
				node.remove()
			},
		}
	}

	const inFly = {
		duration: milliseconds,
		delay: milliseconds,
		y: 500,
		opacity: 0,
	}
</script>

<div
	class="_tadashi_svelte_dialog"
	class:_tadashi_svelte_dialog__align_top={useAlignTop}
	use:init
	in:fade={{duration: milliseconds}}
	out:fade={{duration: milliseconds, delay: milliseconds + 100}}
	{...$$restProps}
>
	<div
		class="_tadashi_svelte_dialog__box"
		in:fly={inFly}
		out:fade={{duration: milliseconds}}
	>
		<div
			class="_tadashi_svelte_dialog__content _tadashi_svelte_dialog__grid"
			class:_tadashi_svelte_dialog__grid___no_show_title={!showTitle}
			class:_tadashi_svelte_dialog__grid___no_show_close={!showClose}
			class:_tadashi_svelte_dialog__grid___no_show_title_close={!showTitle && !showClose}
		>
			<div
				class="_tadashi_svelte_dialog__header"
				class:_tadashi_svelte_dialog__header___no_show={!showTitle}
			>
				<slot name="header" />
			</div>
			<button
				type="button"
				class="_tadashi_svelte_dialog__close"
				class:_tadashi_svelte_dialog__close___no_show={!showClose}
				on:click
			>×</button>
			<div
				class="_tadashi_svelte_dialog__body"
				class:_tadashi_svelte_dialog_body__max={maxHeight}
			>
				<slot />
			</div>
		</div>
	</div>
</div>

<style>
	/*
	:root {
		--tadashi_svelte_dialog_backdrop_filter: blur(3px);
		--tadashi_svelte_dialog_background_color: hsl(0deg 0% 0% / 20%);
		--tadashi_svelte_dialog_zindex: 1000;

		--tadashi_svelte_dialog__box_min_width: 320px;
		--tadashi_svelte_dialog__box_max_width: 800px;
		--tadashi_svelte_dialog__box_padding: 1em;

		--tadashi_svelte_dialog__content_background_color: hsl(0deg 0% 100%);
		--tadashi_svelte_dialog__content_border: 0;
		--tadashi_svelte_dialog__content_border_radius: 3px;
		--tadashi_svelte_dialog__content_box_shadow: 0px 0px 8px hsl(0deg 0% 49% / 20%);
		--tadashi_svelte_dialog__content_padding: 2em;

		--tadashi_svelte_dialog__close_background_color: hsl(356deg 63% 58%);
		--tadashi_svelte_dialog__close_border: 0;
		--tadashi_svelte_dialog__close_border_radius: 3px;
		--tadashi_svelte_dialog__close_color: hsl(0deg 0% 100%);
		--tadashi_svelte_dialog__close_width: 24px;
		--tadashi_svelte_dialog__close_height: 24px;
		--tadashi_svelte_dialog__close_outline: 0;
		--tadashi_svelte_dialog__close_padding: 0;
		--tadashi_svelte_dialog__close_margin: 0;
		--tadashi_svelte_dialog__close_font_size: 1.5em;
		--tadashi_svelte_dialog__close_font_family: monospace;

		--tadashi_svelte_dialog__body_max_height: 100%;
	}
	*/

	._tadashi_svelte_dialog {
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow-y: auto;
		overflow-x: hidden;
		background-color: var(--tadashi_svelte_dialog_background_color, hsl(0deg 0% 0% / 20%));
		backdrop-filter: var(--tadashi_svelte_dialog_backdrop_filter, blur(3px));
		z-index: var(--tadashi_svelte_dialog_zindex, 1001);
	}

	._tadashi_svelte_dialog__align_top {
		align-items: flex-start;
	}

	._tadashi_svelte_dialog__box {
		min-width: var(--tadashi_svelte_dialog__box_min_width, 320px);
		max-width: var(--tadashi_svelte_dialog__box_max_width, 800px);
		padding: var(--tadashi_svelte_dialog__box_padding, 1em);
		box-sizing: border-box;
	}

	._tadashi_svelte_dialog__content {
		background-color: var(--tadashi_svelte_dialog__content_background_color, hsl(0deg 0% 100%));
		background-clip: padding-box;
		border: var(--tadashi_svelte_dialog__content_border, 0);
		border-radius: var(--tadashi_svelte_dialog__content_border_radius, 3px);
		box-shadow: var(--tadashi_svelte_dialog__content_box_shadow, 0px 0px 8px hsl(0deg 0% 49% / 20%));
		box-sizing: border-box;
		padding: var(--tadashi_svelte_dialog__content_padding, 2em);
		position: relative;
	}

	._tadashi_svelte_dialog__grid {
		display: grid;
		grid-gap: 1em;
		grid-template-areas:
			"head close"
			"body body";
		grid-template-columns: 1fr auto;
		grid-template-rows: auto 1fr;
	}

	._tadashi_svelte_dialog__grid___no_show_title {
		grid-template-areas:
			".    close"
			"body body";
	}

	._tadashi_svelte_dialog__grid___no_show_close {
		grid-template-areas:
			"head"
			"body";
		grid-template-columns: 1fr;
	}

	._tadashi_svelte_dialog__grid___no_show_title_close {
		grid-template-areas:
			"body";
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
	}

	._tadashi_svelte_dialog__header {
		grid-area: head;
	}

	._tadashi_svelte_dialog__header___no_show {
		display: none;
	}

	._tadashi_svelte_dialog__body {
		grid-area: body;
		scrollbar-width: thin;
	}

	._tadashi_svelte_dialog_body__max {
		max-height: var(--tadashi_svelte_dialog__body_max_height, 100%);
	}

	._tadashi_svelte_dialog__close {
		grid-area: close;
		align-self: flex-start;
		background-color: var(--tadashi_svelte_dialog__close_background_color, hsl(356deg 63% 58%));
		border: var(--tadashi_svelte_dialog__close_border, 0);
		border-radius: var(--tadashi_svelte_dialog__close_border_radius, 3px);
		box-sizing: border-box;
		color: var(--tadashi_svelte_dialog__close_color, hsl(0deg 0% 100%));
		cursor: pointer;
		width: var(--tadashi_svelte_dialog__close_width, 24px);
		height: var(--tadashi_svelte_dialog__close_height, 24px);
		outline: var(--tadashi_svelte_dialog__close_outline, 0);
		overflow: hidden;
		padding: var(--tadashi_svelte_dialog__close_padding, 0);
		margin: var(--tadashi_svelte_dialog__close_margin, 0);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: var(--tadashi_svelte_dialog__close_font_size, 1.5em);
		font-family: var(--tadashi_svelte_dialog__close_font_family, monospace);
	}

	._tadashi_svelte_dialog__close___no_show {
		display: none;
	}
</style>
