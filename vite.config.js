import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  // Ensure .glb files are included as assets
  assetsInclude: ['**/*.glb'],
  
  // Enable sourcemaps
  build: {
    sourcemap: true, // Enable sourcemaps for production builds
  },

  // Optional: If you want to control esbuild's sourcemap option for faster builds
  esbuild: {
    sourcemap: true, // Enable sourcemaps for esbuild transformations
  },

  server: {
    sourcemap: true, // Enable sourcemaps in the dev server for better debugging
  },
})
