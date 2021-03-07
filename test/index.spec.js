/* globals describe, afterEach, test, expect */

import {cleanup, render} from '@testing-library/svelte'
import {Dialog, acts} from '../src'

describe('Dialog', () => {
	afterEach(cleanup)

	test('should match snapshot', done => {
		const {container} = render(Dialog, {
			props: {
				name: 'teste',
				title: 'Teste',
				message: 'Apenas um show.'
			}
		})
		acts.open('teste')

		setTimeout(() => {
			expect(container).toMatchSnapshot()
			done()
		}, 1000)
	})
})
