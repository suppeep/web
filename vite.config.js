import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  build: {
    outDir: './dist',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
  plugins: [
    vue(),
    VitePWA({
      mode: 'production',
      manifest: {
        name: 'Lukas',
        short_name: 'Lukas',
        theme_color: '#4f46e5',
        background_color: '#4f46e5',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        id: '/',
        icons: [
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: 'icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'maskable_icon.png',
            sizes: '200x200',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
})
