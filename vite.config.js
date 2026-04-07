import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  
  build: {
    // ✅ Code splitting for faster initial load
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler')) {
              return 'vendor-react';
            }
            return 'vendor';
          }
        }
      }
    },
    
    // ✅ Minification with Terser
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    },
    
    // ✅ Increase chunk size warning limit
    chunkSizeWarningLimit: 1000
  },
  
  // ✅ Dev server optimization
  server: {
    hmr: {
      overlay: false // Disable overlay for smoother dev experience
    }
  }
})
