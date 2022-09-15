import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import purgecss from 'rollup-plugin-purgecss';

import { addScriptId } from './vite-plugin/add-script-id';

export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [
    vue(),
    addScriptId(),
    purgecss({
      content: [`./src/**/*.vue`],
      variables: false,
      safelist: {
        standard: [
          /(autv|lnil|lnir|fas?)/,
          /-(leave|enter|appear)(|-(to|from|active))$/,
          /^(?!(|.*?:)cursor-move).+-move$/,
          /^router-link(|-exact)-active$/,
          /data-v-.*/
        ]
      },
      defaultExtractor(content) {
        const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '');
        return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext]',
        entryFileNames: 'index.js'
      }
    }
  }
});
