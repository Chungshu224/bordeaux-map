import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// Polyfill for missing core-js 3.x internals referenced by jspdf/@babel/runtime
function coreJsCompatPlugin() {
  return {
    name: 'core-js-compat',
    resolveId(id, importer) {
      // catch any missing core-js internal module
      if (importer && importer.includes('?commonjs-external') && id.includes('/internals/')) {
        return `\0coreJs:stub:${id}`
      }
    },
    load(id) {
      if (id.startsWith('\0coreJs:stub:')) {
        return `module.exports = function() {};`
      }
    },
  }
}

export default defineConfig({
  plugins: [vue(), coreJsCompatPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  define: {
    global: 'window',
  },
  optimizeDeps: {
    include: ['html2pdf.js', 'html2canvas'],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  server: {
    port: 5173,
    open: true
  }
})
