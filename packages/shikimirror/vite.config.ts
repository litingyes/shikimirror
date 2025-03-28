import external from 'unplugin-external/vite'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: ['./src/index.ts', './src/themes.ts'],
      formats: ['es'],
      fileName: (_, name) => `${name}.js`,
    },
  },
  plugins: [
    dts(),
    external(),
  ],
})
