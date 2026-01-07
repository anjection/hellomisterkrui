import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/hellomisterkrui/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        coa: resolve(__dirname, 'coa.html'),
        contact: resolve(__dirname, 'contact.html'),
        export: resolve(__dirname, 'export-process.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        products: resolve(__dirname, 'products.html'),
      },
    },
  },
});
