/* globals describe, afterEach, beforeAll, afterAll, test, expect */

import timekeeper from 'timekeeper'
import {cleanup, render} from '@testing-library/svelte'
import {Dialog, acts} from '../src/dialog.js'

beforeAll(() => {
	// Para o tempo
	timekeeper.freeze(1_604_416_038 * 1000)
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
				title: 'Teste',
				message: 'Apenas um show.',
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
