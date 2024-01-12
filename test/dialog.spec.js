import {jest, describe, expect, test, beforeAll, afterAll, afterEach} from '@jest/globals'
import timekeeper from 'timekeeper'
import {cleanup, render} from '@testing-library/svelte'
import {Dialog, acts} from '../src/dialog.js'
import TesteModal from './__fixtures__/TesteModal.svelte'

beforeAll(() => {
	// Para o tempo
	timekeeper.freeze(1_604_416_038 * 1000)

	// Workaround
	HTMLDialogElement.prototype.show = jest.fn()
	HTMLDialogElement.prototype.showModal = jest.fn()
	HTMLDialogElement.prototype.close = jest.fn()
})

afterAll(() => {
	timekeeper.reset()
})

describe('Dialog', () => {
	afterEach(cleanup)

	test('should match snapshot', done => {
		const {container} = render(Dialog, {
			props: {
				name: 'teste',
				component: TesteModal,
				componentProps: {
					description: 'Apenas um show',
				},
			},
		})

		acts.open('teste')

		setTimeout(() => {
			expect(container).toMatchSnapshot()
		}, 1000)

		setTimeout(() => {
			acts.close('teste')
			done()
		}, 1500)
	})
})

describe('Dialog - no name', () => {
	afterEach(cleanup)

	test('should match snapshot', done => {
		const {container} = render(Dialog, {
			props: {
				component: TesteModal,
				componentProps: {
					description: 'Apenas um show',
				},
			},
		})

		acts.open()

		setTimeout(() => {
			expect(container).toMatchSnapshot()
		}, 1000)

		setTimeout(() => {
			acts.close()
			done()
		}, 1500)
	})
})

describe('Dialog - missing component', () => {
	afterEach(cleanup)

	test('should match snapshot', done => {
		const {container} = render(Dialog, {
			props: {
				name: 'nope',
			},
		})

		acts.open('nope')

		setTimeout(() => {
			expect(container).toMatchSnapshot()
		}, 1000)

		setTimeout(() => {
			acts.close('nope')
			done()
		}, 1500)
	})
})
