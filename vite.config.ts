import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext]',
        entryFileNames: 'code.js'
      }
    }
  }
});
