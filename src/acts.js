import storeDialog, * as store from './store'

/**
 * @param {string} name
 */
function getDialog(name) {
	return name ? store.getUnique(name) : storeDialog
}

/**
 * @param {{ component: any; componentProps: any; }} opts
 * @param {any} name
 */
export function init(opts, name) {
	const dialog = name ? store.unique(name) : storeDialog
	opts = {
		...store.base,
		...opts,
	}
	dialog.set(opts)
	return dialog
}

/**
 * @param {{ component: any; componentProps: any; }} opts
 * @param {string} name
 */
export function update(opts, name) {
	const dialog = getDialog(name)
	if (dialog && opts) {
		const data = store.getData(dialog)
		const base = data ?? {}
		opts = {
			...base,
			...opts,
		}
		dialog.set(opts)
	}
}

/**
 * @param {string} [name]
 */
export function open(name) {
	const dialog = getDialog(name)
	if (dialog) {
		dialog.open()
	}
}

/**
 * @param {string} [name]
 */
export function close(name) {
	const dialog = getDialog(name)
	if (dialog) {
		dialog.close()
	}
}
