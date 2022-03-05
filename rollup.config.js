import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import autoExternal from 'rollup-plugin-auto-external';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';
import packageJson from './package.json';

const { visualizer } = require('rollup-plugin-visualizer');
const path = require('path');
const license = require('rollup-plugin-license');

const env = JSON.stringify(process.env.NODE_ENV || 'development');

export default {
  input: './src/index.jsx',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    autoExternal(),
    json(),
    image(),
    postcss({
      extensions: ['.css', '.scss', '.sass', '.less'],
    }),
    nodeResolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    replace({
      exclude: 'node_modules/**',
      ENV: env,
      __DEV__: env === 'development' ? true : false,
      __PROD__: env === 'production' ? true : false,
      preventAssignment: true,
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/preset-react'],
      plugins: [
        [
          '@babel/plugin-proposal-class-properties',
          {
            loose: true,
          },
        ],
      ],
    }),
    commonjs(),
    typescript(),
    process.env.NODE_ENV === 'production' &&
      uglify({
        output: {
          comments: function (node, comment) {
            if (comment.type === 'comment2') {
              // multiline comment
              return /@preserve|@license|@cc_on/i.test(comment.value);
            }
            return false;
          },
        },
      }),
    license({
      sourcemap: true,
      banner: {
        commentStyle: 'regular',
        content: {
          file: path.join(__dirname, 'LICENSE'),
          encoding: 'utf-8',
        },
      },
      thirdParty: {
        allow: '(MIT OR Apache-2.0)',
      },
    }),
    visualizer(),
  ],
  external: ['react', 'react-dom', 'react-i18next', 'react-scripts', 'react-test-renderer', 'react-app-polyfill', 'styled-components'],
};
