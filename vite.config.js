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
  // NOTE: do NOT use `define: { global: 'window' }` — it renames object keys
  // like `{ global: x }` in destructuring (e.g. @supabase/supabase-js), breaking
  // settings.global.headers → undefined.headers → TypeError.
  // Modern packages use globalThis; Node-style `global` refs are handled by Vite's
  // pre-bundler (esbuild) automatically.
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
    open: true,
    proxy: {
      // ISRIC SoilGrids WMS proxy — 解決 localhost CORS 問題
      '/isric-proxy': {
        target: 'https://maps.isric.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/isric-proxy/, '')
      },
      // ISPRA 義大利地質圖 proxy — 解決 CORS 問題
      '/ispra': {
        target: 'https://sgi2.isprambiente.it',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ispra/, '')
      },
      // BRGM 法國地質調查局 proxy — 解決 CORS 問題
      '/brgm': {
        target: 'https://geoservices.brgm.fr',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/brgm/, '')
      },
      // IGME 西班牙地質調查局 proxy — 解決 CORS 問題
      '/igme': {
        target: 'https://mapas.igme.es',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/igme/, '')
      },
      // BGR 德國聯邦地球科學與自然資源研究所 BUEK200 土壤圖 proxy
      '/bgr': {
        target: 'https://services.bgr.de',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/bgr/, '')
      },
      // HuGeo 匈牙利地質調查局地質圖 proxy（原 MBFSZ，2025-02 遷移至 hugeo.hu）
      '/hugeo': {
        target: 'https://map.hugeo.hu',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/hugeo/, '')
      },
      // ASRIS 澳洲土壤資源資訊服務 proxy — 解決 CORS 問題
      '/asris': {
        target: 'https://www.asris.csiro.au',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/asris/, '')
      },
      // LNEG 葡萄牙地質調查局地質圖 proxy — 解決 CORS 問題
      '/lneg': {
        target: 'https://sig.lneg.pt',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/lneg/, '')
      },
      // GNS Science 紐西蘭地質調查局 proxy — 解決 CORS 問題
      '/gnsgeo': {
        target: 'https://data.gns.cri.nz',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/gnsgeo/, '')
      },
      // CGS 加州地質調查局 proxy — 解決 CORS 問題
      '/cgs': {
        target: 'https://maps.conservation.ca.gov',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/cgs/, '')
      }
    }
  }
})
