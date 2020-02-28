import typescript from 'rollup-plugin-typescript2'

const tsconfigDefaults = {
  compilerOptions: {
    declaration: true,
    allowSyntheticDefaultImports: true
  },
  exclude: [
    'node_modules',
    '**/__tests__/*'
  ]
}

export default {
  input: 'src/index.ts',
  output: {
    dir: 'lib',
    format: 'cjs'
  },
  plugins: [typescript({ tsconfigDefaults })],
  external: ['axios', 'unzipper', 'fs']
}
