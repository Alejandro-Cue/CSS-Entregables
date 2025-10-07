import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: './Spa&Beauty', // la carpeta donde está tu index.html
  build: {
    outDir: 'dist', // carpeta de salida de la compilación
    rollupOptions: {
      input: path.resolve(__dirname, 'Spa&Beauty/index.html'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Si quieres incluir variables o mixins globales en todos los archivos
        additionalData: `@use './sass/abstracts/index' as *;`
      }
    }
  },
  server: {
    open: true // abre el navegador automáticamente al iniciar
  }
});
