<svelte:head>
	<link href="https://cdn.jsdelivr.net/npm/daisyui@4.11.1/dist/full.min.css" rel="stylesheet" type="text/css" />
	<script src="https://cdn.tailwindcss.com"></script>
</svelte:head>

<script>
import {Dialog, acts} from '$lib/index.js'
import Exemplo from '../fixture/Exemplo.svelte'
import Outro from '../fixture/Outro.svelte'

function geral() {
	acts.update({
		component: Exemplo,
		componentName: 'Exemplo',
		componentProps: {
			title: 'Geral',
			message: 'Apenas um show!',
			class: 'modal-box',
		},
	})
	acts.open()
}

function uniqueA(name) {
	acts.update({
		name,
		component: Exemplo,
		componentName: 'Exemplo',
		componentProps: {
			name,
			title: 'Unique A',
			message: 'Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis',
			class: 'modal-box',
		},
	})
	acts.open(name)
}

function uniqueB(name) {
	acts.update({
		name,
		component: Exemplo,
		componentName: 'Exemplo',
		componentProps: {
			name,
			title: 'Unique B',
		},
	})
	acts.open(name)
}

function uniqueC(name) {
	acts.update({
		name,
		component: Outro,
		componentName: 'Outro',
		componentProps: {
			name,
			title: 'Unique C',
		},
	})
	acts.open(name)
}
</script>

<div class="flex flex-col items-start gap-4">
	<button class="btn" on:click={() => geral()}>Dialog</button>
	<button class="btn" on:click={() => uniqueA('exemplo')}>Dialog name: exemplo - Component: Exemplo - Unique A</button>
	<button class="btn" on:click={() => uniqueB('exemplo')}>Dialog name: exemplo - Component: Exemplo - Unique B</button>
	<button class="btn" on:click={() => uniqueC('exemplo')}>Dialog name: exemplo - Component: Outro - Unique C</button>
</div>

<Dialog class="modal" />
<Dialog class="modal" name="exemplo" />
