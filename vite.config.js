import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://54.95.55.62/',
        changeOrigin: true,
        rewrite: (path)=> path.replace(/^\/api/, '')
      }
    }
  }
})
