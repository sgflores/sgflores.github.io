import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// User site: https://sgflores.github.io — base must be '/'
export default defineConfig({
  plugins: [vue()],
  base: '/',
})
