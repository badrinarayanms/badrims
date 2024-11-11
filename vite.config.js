export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Ensure sourcemaps are enabled for production build
  },
  esbuild: {
    sourcemap: true, // Force source maps in esbuild
  },
});
