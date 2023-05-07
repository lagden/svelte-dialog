<svelte:options accessors />

<script>
	export let isOpen = false

	/** @type {HTMLDialogElement} */
	let dialog
	let animation = false

	function animationend() {
		if (dialog) {
			animation = false
			isOpen = false
			dialog.close()
			dialog.removeEventListener('animationend', animationend)
		}
	}

	export function open() {
		if (dialog && isOpen === false) {
			isOpen = true
			dialog.showModal()
		}
	}

	export function close() {
		if (dialog && isOpen === true) {
			animation = true
			dialog.addEventListener('animationend', animationend)
		}
	}

	/**
	 * @param {HTMLDialogElement} node
	 */
	function init(node) {
		globalThis.document.body.insertAdjacentElement('beforeend', node)
		return {
			destroy() {
				node.removeEventListener('animationend', animationend)
				node.remove()
			},
		}
	}
</script>

<dialog
	use:init
	bind:this={dialog}
	class:tadashi-svelte-dialog={true}
	class:tadashi-svelte-dialog--animation={animation}
	{...$$restProps}
><slot /></dialog>

<style>
	:global(.tadashi-svelte-dialog[open]) {
		opacity: 0;
		animation: dialog_in 0.3s ease-in 0.8s;
		animation-fill-mode: forwards;
	}

	:global(.tadashi-svelte-dialog[open]::backdrop) {
		animation: dialog_bg_in 0.3s ease-in;
	}

	:global(.tadashi-svelte-dialog.tadashi-svelte-dialog--animation[open]) {
		animation: dialog_out 0.3s ease-out;
	}

	:global(.tadashi-svelte-dialog.tadashi-svelte-dialog--animation[open]::backdrop) {
		animation: dialog_bg_out 0.3s ease-out;
		animation-fill-mode: forwards;
	}

	@keyframes dialog_bg_in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes dialog_bg_out {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

	@keyframes dialog_in {
		0% {
			opacity: 0;
			transform: scale(0.8);
		}
		100% {
			opacity: 1;
			transform: scale(1);
		}
	}

	@keyframes dialog_out {
		0% {
			opacity: 1;
			transform: scale(1);
		}
		100% {
			opacity: 0;
			transform: scale(1.2);
		}
	}
</style>
