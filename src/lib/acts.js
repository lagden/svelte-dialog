import storeDialog, * as store from './store'

export const componentMap = new Map()

/**
 * @param {string=} name
 */
export function getDialog(name) {
	return name === undefined ? storeDialog : store.getUnique(name)
}

/**
 * @param {{ name: string=; open: boolean=false; component: import("svelte").ComponentType=; componentProps: import("svelte").ComponentProps=; }} opts
 */
export function init(opts) {
	const {name, component, componentName, ...rest} = opts
	if (componentName && component) {
		componentMap.set(componentName, component)
	}
	const dialog = name === undefined ? storeDialog : store.unique(name)
	dialog.update(n => {
		return {
			...n,
			...store.base,
			...(componentName ? {componentName} : {}),
			...rest,
		}
	})
	return dialog
}

/**
 * @param {{ name: string=; open: boolean=false; component: import("svelte").ComponentType=; componentProps: import("svelte").ComponentProps=; }} opts
 */
export function update(opts) {
	const {name, component, componentName, ...rest} = opts
	if (componentName && component) {
		componentMap.set(componentName, component)
	}
	const dialog = getDialog(name)
	if (dialog) {
		const current = store.getData(dialog)
		dialog.update(n => {
			return {
				...n,
				...current,
				...(componentName ? {componentName} : {}),
				...rest,
			}
		})
	}
}

/**
 * @param {string=} [name]
 */
export function open(name) {
	const dialog = getDialog(name)
	const data = store.getData(dialog)
	if (dialog && data?.open === false) {
		dialog.openIt()
	}
}

/**
 * @param {string=} [name]
 */
export function close(name) {
	const dialog = getDialog(name)
	const data = store.getData(dialog)
	if (dialog && data?.open === true) {
		dialog.closeIt()
	}
}
