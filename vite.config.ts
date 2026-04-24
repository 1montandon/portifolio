import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5018, // 🔧 Change this to your desired port number
    host: process.env.VITE_NODE_ENV === 'PROD', // 🌐 Ensures the server is accessible from the network
    strictPort: true, // 🚫 Prevents the port from changing if it’s in use
  },
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(  )
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
