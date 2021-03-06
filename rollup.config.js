import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import common from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default [{
  input: pkg.svelte,
  output: [
    {
      file: pkg.browser,
      format: 'iife',
      name: 'SvelteDebugger',
    },
  ],
  plugins: [
    svelte({
      legacy: true,
    }),
    resolve({
      browser: true,
    }),
    common(),
    babel({
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.svelte'],
    }),
  ],
},
{
  input: pkg.svelte,
  output: [
    {
      file: pkg.module,
      format: 'es',
    },
    {
      file: pkg.main,
      format: 'cjs',
    },
  ],
  plugins: [
    svelte({
      legacy: true,
    }),
  ],
}];
