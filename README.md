# svelte-debugger ([demo 🚀](https://svelte.dev/repl/fbd4c72596ef48a588edfcbbbad64893?version=3.6.7))

[![npm][badge-version]][npm]
[![bundle size][badge-size]][bundlephobia]
[![license][badge-license]][license]

A **_JSON debugger_** component for [Svelte][svelte] apps.

![Svelte Debugger](debugger.png)

## Installation

Install with [npm](https://www.npmjs.com/):
```sh
npm install svelte-debugger --save
```

install with [yarn](https://yarnpkg.com/):
```sh
yarn add svelte-debugger
```
----

## Usage

```html
<script>
  import Debugger from 'svelte-debugger';

  // This variable is used for the example below
  const example = {
    "id": 1,
    "name": "Leanne Graham",
      "address": {
        "street": "Kulas Light",
        "zipcode": 92998,
        "timezone": null
      },
      "company": {
        "name": "Romaguera-Crona",
        "registered": false,
        "daylightSaving": true,
      }
    };
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

| parameter    | default | description                                                                                                                                                              |
| ------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| data         | {}      | The non-formated *object* to format                                                                                                                                       |
| indent       | 2       | The size number of spaces between *keys* and *values*                                                                                                                    |
| colorOptions | {}      | An object that describes the individual color of each property (`keyColor`, `numberColor`, `stringColor`, `trueColor`, `falseColor`, `nullColor`) from our *data* object |

[svelte]: https://svelte.dev/
[badge-version]: https://img.shields.io/npm/v/svelte-debugger.svg
[npm]: https://www.npmjs.com/package/svelte-debugger
[badge-size]: https://img.shields.io/bundlephobia/minzip/svelte-debugger.svg
[bundlephobia]: https://bundlephobia.com/result?p=svelte-debugger
[badge-license]: https://img.shields.io/npm/l/svelte-debugger.svg
[license]: https://github.com/ftonato/svelte-debugger/blob/master/LICENSE

## License

[MIT](LICENSE)
