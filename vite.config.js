import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        faridabad: resolve(__dirname, 'ac-servicing-faridabad.html'),
        surajkund: resolve(__dirname, 'ac-servicing-surajkund.html'),
        ro: resolve(__dirname, 'ro-servicing-faridabad.html'),
      },
    },
  },
})