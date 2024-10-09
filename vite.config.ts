import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@assets': resolve(__dirname, './public/assets'),
      '@components': resolve(__dirname, './src/components'),
    },
  },
  plugins: [react()],
  assetsInclude: ['**/*.OTF']
})
