import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
  base: process.env.VITE_BASE_PATH || "/MarketCrewe-v1-frontend/tree/main/marketcrew-frontend"
})