import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import url from '@rollup/plugin-url';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'named',
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
      exports: 'named',
    },
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve({
      extensions: ['.js', '.jsx'],
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      extensions: ['.js', '.jsx'],
      babelHelpers: 'bundled',  // Explicitly set this option
    }),
    url({
      include: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.gif'], // Handle image files
      limit: 102400, // Files under 8kb will be converted to base64
      emitFiles: true, // Ensures larger files are copied to the output directory
      fileName: '[name][hash][extname]' // Ensures files are uniquely named and hashed
    }),
    copy({
      targets: [
        { src: 'src/assets/images/*', dest: 'dist/images' } // Copy all images to dist/images
      ]
    }),
  ],
  external: ['react', 'react-dom', '@mui/material', 'react-icons', 'react-color'],
};
