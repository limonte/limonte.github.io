import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig(({ command }) => {
  if (command === 'build') {
    return {
      build: {
        assetsInlineLimit: -1,
      },
      plugins: [
        viteStaticCopy({
          targets: [
            {
              src: ['assets/head.svg.xml', 'assets/alien.ascii'],
              dest: 'assets'
            },
            {
              src: 'css/svg-styles.css',
              dest: 'css'
            }
          ]
        })
      ],
    }
  }
  return {}
})
