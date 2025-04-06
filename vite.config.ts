import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'  // Import specific function instead of whole module

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      'src': resolve(__dirname, './src'),
    },
  },
})