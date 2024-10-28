import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import ViteCSSExportPlugin from 'vite-plugin-css-export'
import { optimizeCssModules } from 'vite-plugin-optimize-css-modules'
import preloadPlugin from 'vite-preload/plugin'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), preloadPlugin(), ViteCSSExportPlugin(), optimizeCssModules(), react()],
})
