import { defineConfig } from 'vite'
import { resolve } from 'path'

// Custom plugin to handle routing without 'src' in path
const routingPlugin = () => {
  return {
    name: 'custom-routing',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        // Rewrite /topics/* to /src/topics/*
        if (req.url?.startsWith('/topics/')) {
          req.url = '/src' + req.url
        }
        next()
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/plain-html/' : '/',
  plugins: [routingPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'topics/card': resolve(__dirname, 'src/topics/card/index.html'),
        'topics/grid-layout': resolve(__dirname, 'src/topics/grid-layout/index.html'),
      },
    },
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '/src': resolve(__dirname, './src'),
    },
  },
  server: {
    fs: {
      allow: ['.'],
    },
  },
})