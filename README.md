# svelte-dialog

[![NPM version][npm-img]][npm]
[![Build Status][ci-img]][ci]


[npm-img]:         https://img.shields.io/npm/v/@tadashi/svelte-dialog.svg
[npm]:             https://www.npmjs.com/package/@tadashi/svelte-dialog
[ci-img]:          https://github.com/lagden/svelte-dialog/workflows/Node.js%20CI/badge.svg
[ci]:              https://github.com/lagden/svelte-dialog/actions?query=workflow%3A%22Node.js+CI%22

---

Svelte component

## Install

```
$ npm i -S @tadashi/svelte-dialog
```


## Usage

You can see an example here: https://svelte.dev/repl/1edee6644cc44942bff65170a1e7b370?version=3.35.0

```html
<script>
  import {Dialog, acts} from '@tadashi/svelte-dialog'

  function showDialog(opts, name) {
    return () => {
      if (name) {
        acts.open(name)
        return
      }
      acts.update({
        title: 'Esse é um modal com o título grande',
        message: 'Apenas um <b>show</b>!',
        ...opts
      })
      acts.open()
    }
  }

  const unique = {
    name: 'yeahh',
    title: 'Uniquee!!',
    message: 'Apenas um show uniquee',
    useAlignTop: false
  }
</script>

<button on:click="{showDialog()}">Open Dialog</button>
<button on:click="{showDialog({title: 'Dialog'})}">Open Update Dialog</button>
<button on:click="{showDialog({},'yeahh')}">Open Dialog Unique</button>

<Dialog />
<Dialog {...unique} />
```


## License

MIT © [Thiago Lagden](https://github.com/lagden)
