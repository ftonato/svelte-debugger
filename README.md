# svelte-debugger ([demo 🚀](https://svelte.dev/repl/fbd4c72596ef48a588edfcbbbad64893?version=3.6.7))

[![npm][badge-version]][npm]
[![bundle size][badge-size]][bundlephobia]
[![license][badge-license]][license]

A _JSON_ debugger component for [Svelte][svelte] apps.

![](debugger.png)

## Installation

```bash
npm install svelte-debugger --save
```

or

```bash
yarn add svelte-debugger
```

## Usage

```html
<script>
  import Debugger from 'svelte-debugger';
</script>

<Debugger data={example} />
```

## Properties

```html
<Debugger
  data={example}
  indent={2}
  colorOptions={{ falseColor: '#ff3e00', trueColor: '#40b3ff' }}
/>
```

## Parameters

The following parameters are available:

| parameter | default   | description                                                                                                                                                                                                         |
|-----------|-----------|---------------------------------------------------------------------------------------------------------------------|
| data       | {}         | The non-formated _object_ to debug                |
| indent    | 2         | The size number of spaces between _keys_ and _values_ |
| colorOptions | {}       | An object that describes the individual color of each property (`keyColor`, `numberColor`, `stringColor`, `trueColor`, `falseColor`, `nullColor`) from our _data_ object |

[svelte]: https://svelte.dev/
[badge-version]: https://img.shields.io/npm/v/svelte-debugger.svg
[npm]: https://www.npmjs.com/package/svelte-debugger
[badge-size]: https://img.shields.io/bundlephobia/minzip/svelte-debugger.svg
[bundlephobia]: https://bundlephobia.com/result?p=svelte-debugger
[badge-license]: https://img.shields.io/npm/l/svelte-debugger.svg
[license]: https://github.com/ftonato/svelte-debugger/blob/master/LICENSE

## License

[MIT](LICENSE)
