<script>
	import {fade} from 'svelte/transition'

	export let maxHeight = false
	export let useAlignTop = true

	function init(node) {
		document.body.insertAdjacentElement('beforeend', node)
	}
</script>

<div
	class="_tadashi_svelte_dialog"
	class:_tadashi_svelte_dialog__align_top={useAlignTop}
	use:init
	in:fade|local={{duration: 400}}
>
	<div class="_tadashi_svelte_dialog__box">
		<div class="_tadashi_svelte_dialog__content _tadashi_svelte_dialog__grid">
			<div class="_tadashi_svelte_dialog__header">
				<slot name="header" />
			</div>
			<button type="button" class="_tadashi_svelte_dialog__close" on:click>×</button>
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
	:root {
		--tadashi_svelte_dialog_background_color: hsla(0, 0%, 0%, 0.2);
		--tadashi_svelte_dialog_zindex: 1000;

		--tadashi_svelte_dialog__box_min_width: 320px;
		--tadashi_svelte_dialog__box_max_width: 800px;
		--tadashi_svelte_dialog__box_padding: 1em;

		--tadashi_svelte_dialog__content_background_color: white;
		--tadashi_svelte_dialog__content_border: 0;
		--tadashi_svelte_dialog__content_border_radius: 3px;
		--tadashi_svelte_dialog__content_box_shadow: 0px 0px 8px hsla(0, 0%, 49%, 0.2);
		--tadashi_svelte_dialog__content_padding: 2em;

		--tadashi_svelte_dialog__close_background_color: hsl(356, 63%, 58%);
		--tadashi_svelte_dialog__close_border: 0;
		--tadashi_svelte_dialog__close_border_radius: 3px;
		--tadashi_svelte_dialog__close_color: white;
		--tadashi_svelte_dialog__close_width: 24px;
		--tadashi_svelte_dialog__close_height: 24px;
		--tadashi_svelte_dialog__close_outline: 0;
		--tadashi_svelte_dialog__close_padding: 0;
		--tadashi_svelte_dialog__close_margin: 0;
		--tadashi_svelte_dialog__close_font_size: 1.5em;
		--tadashi_svelte_dialog__close_font_family: monospace;

		--tadashi_svelte_dialog__body_max_height: 100%;
	}

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
		z-index: var(--tadashi_svelte_dialog_zindex);
		background-color: var(--tadashi_svelte_dialog_background_color);
	}

	._tadashi_svelte_dialog__align_top {
		align-items: flex-start;
	}

	._tadashi_svelte_dialog__box {
		min-width: var(--tadashi_svelte_dialog__box_min_width);
		max-width: var(--tadashi_svelte_dialog__box_max_width);
		padding: var(--tadashi_svelte_dialog__box_padding);
		box-sizing: border-box;
	}

	._tadashi_svelte_dialog__content {
		background-color: var(--tadashi_svelte_dialog__content_background_color);
		background-clip: padding-box;
		border: var(--tadashi_svelte_dialog__content_border);
		border-radius: var(--tadashi_svelte_dialog__content_border_radius);
		box-shadow: var(--tadashi_svelte_dialog__content_box_shadow);
		box-sizing: border-box;
		padding: var(--tadashi_svelte_dialog__content_padding);
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

	._tadashi_svelte_dialog__header {
		grid-area: head;
	}

	._tadashi_svelte_dialog__body {
		grid-area: body;
		scrollbar-width: thin;
	}

	._tadashi_svelte_dialog_body__max {
		max-height: var(--tadashi_svelte_dialog__body_max_height);
	}

	._tadashi_svelte_dialog__close {
		grid-area: close;
		align-self: flex-start;
		background-color: var(--tadashi_svelte_dialog__close_background_color);
		border: var(--tadashi_svelte_dialog__close_border);
		border-radius: var(--tadashi_svelte_dialog__close_border_radius);
		box-sizing: border-box;
		color: var(--tadashi_svelte_dialog__close_color);
		cursor: pointer;
		width: var(--tadashi_svelte_dialog__close_width);
		height: var(--tadashi_svelte_dialog__close_height);
		outline: var(--tadashi_svelte_dialog__close_outline);
		overflow: hidden;
		padding: var(--tadashi_svelte_dialog__close_padding);
		margin: var(--tadashi_svelte_dialog__close_margin);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: var(--tadashi_svelte_dialog__close_font_size);
		font-family: var(--tadashi_svelte_dialog__close_font_family);
	}
</style>
