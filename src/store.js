import {writable, get} from 'svelte/store'

const dialogMap = new Map()

const base = {
	open: false,
	title: '',
	message: '',
	component: {}
}

function toggle(n, v) {
	n.open = v
	return n
}

function dialogStore() {
	const {set, subscribe, update} = writable({...base})
	return {
		set,
		subscribe,
		open: () => update(n => toggle(n, true)),
		close: () => update(n => toggle(n, false))
	}
}

const dialog = dialogStore()

const unique = name => {
	if (dialogMap.has(name)) {
		return dialogMap.get(name)
	}
	dialogMap.set(name, dialogStore())
	return dialogMap.get(name)
}

const getUnique = name => {
	if (dialogMap.has(name)) {
		return dialogMap.get(name)
	}
}

const getData = store => get(store)

export {
	base,
	dialog,
	unique,
	getUnique,
	getData
}
