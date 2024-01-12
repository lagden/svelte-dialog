<script>
import {acts} from '$lib/index.js'

export let name
export let title = 'title'
export let message = 'message'
</script>

<h1>{title}</h1>
<p>{message}</p>
<button on:click={() => acts.close(name)}>Close</button>
