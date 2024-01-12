// @vitest-environment jsdom
import {describe, it, expect, beforeAll, vi} from 'vitest'
import {Dialog, acts} from '$lib/index.js'

beforeAll(() => {
	HTMLDialogElement.prototype.show = vi.fn()
	HTMLDialogElement.prototype.showModal = vi.fn()
	HTMLDialogElement.prototype.close = vi.fn()
})

describe('dom', () => {
	it('jsdom', () => {
		expect(typeof globalThis).not.toBe('undefined')
	})

	it('dialog', () => {
		new Dialog({target: globalThis.document.body})
		acts.open()
		expect(globalThis.document.body).toMatchSnapshot()
	})
})
