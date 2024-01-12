<svelte:options accessors />

<script>
export let isOpen = false

/** @type {HTMLDialogElement} */
let dialog
let animation = false

function animationend() {
	if (dialog) {
		dialog.removeEventListener('animationend', animationend)
		dialog.close()
		animation = false
		isOpen = false
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
		dialog.addEventListener('animationend', animationend)
		animation = true
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
>
	<slot />
</dialog>

<style>
.tadashi-svelte-dialog[open] {
	opacity: 0;
	animation: tadashi-svelte-dialog-in 0.3s ease-in 0.8s;
	animation-fill-mode: forwards;
}

.tadashi-svelte-dialog[open]::backdrop {
	animation: tadashi-svelte-dialog-bg-in 0.3s ease-in;
}

.tadashi-svelte-dialog--animation[open] {
	animation: tadashi-svelte-dialog-out 0.3s ease-out;
}

.tadashi-svelte-dialog--animation[open]::backdrop {
	animation: tadashi-svelte-dialog-bg-out 0.3s ease-out;
	animation-fill-mode: forwards;
}

@keyframes tadashi-svelte-dialog-bg-in {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes tadashi-svelte-dialog-bg-out {
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}

@keyframes tadashi-svelte-dialog-in {
	0% {
		opacity: 0;
		transform: var(--tadashi-svelte-dialog-in-from-transform, scale(0.8));
	}
	100% {
		opacity: 1;
		transform: var(--tadashi-svelte-dialog-in-to-transform, scale(1));
	}
}

@keyframes tadashi-svelte-dialog-out {
	0% {
		opacity: 1;
		transform: var(--tadashi-svelte-dialog-out-from-transform, scale(1));
	}
	100% {
		opacity: 0;
		transform: var(--tadashi-svelte-dialog-out-to-transform, scale(1.2));
	}
}
</style>
