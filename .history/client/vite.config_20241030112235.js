import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api':{
        target:'http://localhost:5500',
        secure:false,
      },
    },
  },
  plugins: [react()],
})