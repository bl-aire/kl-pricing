import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["legacy-js-api"],
        additionalData: `@import "./src/styles/_mantine";`,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id){
          if(id.indexOf('node_modules') !== -1){
            return 'vendor';
          }
        }
      }
    }
  },
  resolve: {
    alias: {
      "@/assets": "/assets",
      "@/utils": "/src/utils",
      "@/constants": "/src/constants",
      "@/styles": "/src/styles",
      "@/pages": "/src/pages",
      "@/helpers": "/src/helpers",
      "@/services": "/src/services",
      "@/components": "/src/components",
    }
  },
})
