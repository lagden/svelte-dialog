<!-- A Svelte component representing a dialog. -->
<svelte:options accessors />

<script>
import {createEventDispatcher} from 'svelte'
const dispatch = createEventDispatcher()

/**
 * Indicates whether the dialog is currently open or closed.
 * @type {boolean}
 */
export let isOpen = false

/**
 * A reference to the dialog element.
 * @type {HTMLDialogElement}
 */
let dialog

/**
 * Opens the dialog if it exists and is not already open.
 */
export function open() {
	isOpen = true
	dispatch('dialogState', isOpen)
	dialog?.showModal()
}

/**
 * Closes the dialog if it exists and is currently open.
 */
export function close() {
	dialog?.close()
}

/**
 * Closes the dialog by setting the `isOpen` flag to `false`.
 */
export function onClose() {
	isOpen = false
	dispatch('dialogState', isOpen)
}

/**
 * Initializes the dialog element and appends it to the document body.
 *
 * @param {HTMLDialogElement} node - The dialog element to initialize.
 * @returns {object} - An object with a `destroy` function to remove the dialog from the DOM.
 */
function init(node) {
	globalThis.document.body.insertAdjacentElement('beforeend', node)
	node.addEventListener('close', onClose)
	return {
		/**
		 * Destroys the dialog element, removing it from the DOM.
		 */
		destroy() {
			node.removeEventListener('close', onClose)
			node.remove()
		},
	}
}
</script>

<!-- The dialog element that is initialized and managed by this component. -->
<dialog
	use:init
	bind:this={dialog}
	{...$$restProps}
>
	<slot />
</dialog>
