import {writable, get} from 'svelte/store'

const dialogMap = new Map()

const base = {
	open: false,
	componentName: undefined,
	componentProps: undefined,
}

function dialogStore() {
	const {set, subscribe, update} = writable({...base})
	return {
		set,
		subscribe,
		update,
		openIt() {
			update(n => {
				n.open = true
				return n
			})
		},
		closeIt() {
			update(n => {
				n.open = false
				return n
			})
		}
	}
}

/**
 * @param {string=} name
 */
function unique(name) {
	if (dialogMap.has(name)) {
		return dialogMap.get(name)
	}
	dialogMap.set(name, dialogStore())
	return dialogMap.get(name)
}

/**
 * @param {string=} name
 */
function getUnique(name) {
	if (name !== undefined && dialogMap.has(name)) {
		return dialogMap.get(name)
	}
}

/**
 * @param {import("svelte/store").Readable<any>} store
 */
function getData(store) {
	// return globalThis.structuredClone(get(store))
	return get(store)
}

const KEY = Symbol.for('store.dialog')
const singleton = Object.create(null)
singleton[KEY] = dialogStore()

export default singleton[KEY]
export {base, unique, getUnique, getData}
