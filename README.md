# svelte-dialog

[![NPM version][npm-img]][npm]
[![Build Status][ci-img]][ci]


[npm-img]:  https://img.shields.io/npm/v/@tadashi/svelte-dialog.svg
[npm]:      https://www.npmjs.com/package/@tadashi/svelte-dialog
[ci-img]:   https://github.com/lagden/svelte-dialog/actions/workflows/nodejs.yml/badge.svg
[ci]:       https://github.com/lagden/svelte-dialog/actions/workflows/nodejs.yml

---

Dialog - Svelte component

## Install

```
$ npm i -S @tadashi/svelte-dialog
```

## Props

property       | type         | required    | default   | description
-------------- | ------------ | ----------- | --------- | ------------
name           | String       | no          | undefined | unique name (like a ID)
open           | Boolean      | no          | false     | unique name (like a ID)
component      | Component    | yes         | undefined | Svelte Component
componentProps | Object       | no          | {}        | Svelte Component properties


## Usage

You can see more examples here: https://svelte.dev/repl/69a508aaf3a342cd88a82c35241c5e31?version=3.59.0

```svelte
<script>
  import {Dialog, acts} from '@tadashi/svelte-dialog'
  import Exemplo from './Exemplo.svelte'

  const unique = {
    name: 'exemplo',
    component: Exemplo,
    componentProps: {
      title: 'Apenas um exemplo',
      message: 'Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis',
    },
  }
</script>

<button on:click="{() => acts.open('exemplo')}">Dialog Unique</button>
<button on:click="{() => acts.open()}">Dialog</button>

<Dialog {...unique} />
<Dialog />
```


## Donate ❤️

- BTC: bc1q7famhuj5f25n6qvlm3sssnymk2qpxrfwpyq7g4
- PIX: lagden@gmail.com


## License

MIT © [Thiago Lagden](https://github.com/lagden)
