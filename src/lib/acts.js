import storeDialog, * as store from './store'

/**
 * @param {string=} name
 */
function getDialog(name) {
	return name ? store.getUnique(name) : storeDialog
}

/**
 * @param {{ name: string=; open: boolean=false; component: import("svelte").ComponentType=; componentProps: import("svelte").ComponentProps=; }} opts
 */
export function init(opts) {
	const {name, ...rest} = opts
	const dialog = name ? store.unique(name) : storeDialog
	dialog.set({
		...store.base,
		...rest,
	})
	return dialog
}

/**
 * @param {{ name: string=; open: boolean=false; component: import("svelte").ComponentType=; componentProps: import("svelte").ComponentProps=; }} opts
 */
export function update(opts) {
	const {name, ...rest} = opts
	const dialog = getDialog(name)
	if (dialog) {
		const current = store.getData(dialog)
		dialog.set({
			...current,
			...rest,
		})
	}
}

/**
 * @param {string=} [name]
 */
export function open(name) {
	const dialog = getDialog(name)
	if (dialog) {
		dialog.open()
	}
}

/**
 * @param {string=} [name]
 */
export function close(name) {
	const dialog = getDialog(name)
	if (dialog) {
		dialog.close()
	}
}
