import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import injectHTML from 'vite-plugin-html-inject'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
    injectHTML(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        faridabad: resolve(__dirname, 'ac-servicing-faridabad.html'),
        surajkund: resolve(__dirname, 'ac-servicing-surajkund.html'),
        ro: resolve(__dirname, 'ro-servicing-faridabad.html'),
        booking: resolve(__dirname, 'book-service.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        hard_water_ro: resolve(__dirname, 'blog/hard-water-faridabad-ro.html'),
        ac_safety: resolve(__dirname, 'blog/ac-safety-accidents.html'),
      },
    },
  },
})