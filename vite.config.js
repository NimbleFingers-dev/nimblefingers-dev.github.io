import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Sitio de organización en GitHub Pages (nimblefingers-dev.github.io): se sirve desde la raíz.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2020',
    cssMinify: true,
    sourcemap: false,
  },
});
