import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        cv: 'cv/index.html',
      },
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'Limon Monte.pdf',
          dest: '.',
        },
      ],
    }),
  ],
});
