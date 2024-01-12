<script>
import {Dialog, acts} from '$lib/index.js'
import Exemplo from '../fixture/Exemplo.svelte'

const unique = {
	name: 'exemplo',
	component: Exemplo,
	componentProps: {
		title: 'Apenas um exemplo',
		message: 'Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis',
	},
}
</script>

<button on:click={() => acts.open('exemplo')}>Dialog Unique</button>
<button on:click={() => acts.open()}>Dialog</button>

<Dialog {...unique} />
<Dialog />
