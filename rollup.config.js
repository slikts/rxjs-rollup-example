import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'main.js',
  dest: 'bundle.js',
  format: 'iife',
  plugins: [
    resolve({ jsnext: true, main: true }),
    commonjs(),
  ],
};
