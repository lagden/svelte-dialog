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

property    | type         | required    | default   | description
----------- | ------------ | ----------- | --------- | ------------
name        | String       | no          | false     | unique name (like a ID)
title       | String       | no          | -         | title
message     | String       | no          | false     | message
component   | Object       | no          | false     | [see below](#component)
maxHeight   | Boolean      | no          | false     | set max-height
useAlignTop | Boolean      | no          | true      | align dialog on the top
showClose   | Boolean      | no          | true      | show close button


#### component

parameter   | type         | required    | default   | description
----------- | ------------ | ----------- | --------- | ------------
element     | Component    | yes         | -         | A Svelte Component
props       | Object       | no          | {}        | Component properties


## Usage

You can see an example here: https://svelte.dev/repl/1edee6644cc44942bff65170a1e7b370?version=3.35.0

```svelte
<script>
  import {Dialog, acts} from '@tadashi/svelte-dialog'
  import Exemplo from './Exemplo.svelte'

  function showDialog(opts = {}, name, useBase = true) {
    return () => {
      acts.update(opts, name, useBase)
      acts.open(name)
    }
  }

  function showDialogOnlyOpen(name) {
    return () => {
      acts.open(name)
    }
  }

  const base = {
    title: 'Esse é um "dialog" com o título grande',
    message: 'Apenas um <b>show</b>!'
  }

  const unique = {
    name: 'yeahh',
    title: 'Uniquee!!',
    message: 'Apenas um show uniquee',
    useAlignTop: false
  }

  const component = {
    title: 'Via Componente',
    message: false,
    useAlignTop: false,
    component: {
      element: Exemplo,
      props: {
        title: 'Exemplo',
        message: 'Forever and ever!'
      }
    }
  }
</script>

<button on:click="{showDialog(base)}">Open Dialog</button>
<button on:click="{showDialog({title: 'Dialog'}, false, false)}">Open Update only Title</button>
<button on:click="{showDialog(component)}">Open Dialog Component</button>
<button on:click="{showDialogOnlyOpen('yeahh')}">Open Dialog Unique</button>

<Dialog />
<Dialog {...unique} />

<style>
  button {
    display: block;
  }
</style>
```


## License

MIT © [Thiago Lagden](https://github.com/lagden)
