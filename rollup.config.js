import typescript from '@rollup/plugin-typescript'

export default {
  input: './lib/index.tsx',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.js',
      format: 'es'
    }
  ],
  plugins: [typescript()],
  external: ['react', 'hoist-non-react-statics']
}