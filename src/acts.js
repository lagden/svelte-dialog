import * as store from './store'

function getDialog(name) {
	return name ? store.getUnique(name) : store.dialog
}

export function init(opts, name) {
	const dialog = name ? store.unique(name) : store.dialog
	opts = {
		...store.base,
		...opts
	}
	dialog.set(opts)
	return dialog
}

export function update(opts, name) {
	const dialog = getDialog(name)
	if (dialog) {
		opts = {
			...store.base,
			...opts
		}
		dialog.set(opts)
	}
}

export function open(name) {
	const dialog = getDialog(name)
	if (dialog) {
		dialog.open()
	}
}

export function close(name) {
	const dialog = getDialog(name)
	if (dialog) {
		dialog.close()
	}
}
