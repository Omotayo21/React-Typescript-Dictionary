import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve : {
     extensions : ['.ts', '.tsx', '.js', '.jsx', ',json'],
  },
  build: {
    rollupOptions: {
      external: ['/src/main.tsx'], // Adjust this according to your project structure
    },
  },
})
