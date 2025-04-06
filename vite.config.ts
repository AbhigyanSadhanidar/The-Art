import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'src': resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'src/index.tsx'), // ✅ No leading "/"
    },
  },
})
