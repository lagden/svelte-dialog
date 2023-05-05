# svelte-dialog

[![NPM version][npm-img]][npm]
[![Build Status][ci-img]][ci]


[npm-img]:  https://img.shields.io/npm/v/@tadashi/svelte-dialog.svg
[npm]:      https://www.npmjs.com/package/@tadashi/svelte-dialog
[ci-img]:   https://github.com/lagden/svelte-dialog/actions/workflows/nodejs.yml/badge.svg
[ci]:       https://github.com/lagden/svelte-dialog/actions/workflows/nodejs.yml

---

Svelte component

## Install

```
$ npm i -S @tadashi/svelte-dialog
```

## Props

property       | type         | required    | default   | description
-------------- | ------------ | ----------- | --------- | ------------
name           | String       | no          | false     | unique name (like a ID)
component      | Component    | yes         | undefined | A Svelte Component
componentProps | Object       | no          | {}        | Component properties


## Usage

You can see more examples here: https://svelte.dev/repl/1edee6644cc44942bff65170a1e7b370?version=3.59.0

```svelte
<script>
  import {Dialog, acts} from '@tadashi/svelte-dialog'
  import Exemplo from './Exemplo.svelte'

  function showDialogOnlyOpen(name) {
    return () => {
      acts.open(name)
    }
  }

  const unique = {
    name: 'exemplo',
    component: Exemplo,
    componentProps: {
      description: 'Apenas um exemplo',
    },
  }
</script>

<button on:click="{showDialogOnlyOpen('exemplo')}">Dialog Unique</button>

<Dialog {...unique} />
```


## License

MIT © [Thiago Lagden](https://github.com/lagden)
