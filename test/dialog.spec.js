import {
	jest,
	describe,
	expect,
	test,
	beforeAll,
	afterAll,
	afterEach,
} from '@jest/globals'
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
			},
		})

		const opts = {
			component: TesteModal,
			componentProps: {
				description: 'Apenas um show',
			},
		}

		acts.update(opts, 'teste')
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
