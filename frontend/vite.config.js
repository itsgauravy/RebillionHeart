import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  return {
    base:'/',
    plugins: [react()],
    // server: {
    //   host: '0.0.0.0',
    //   port: 5173,
    //   strictPort: true,
    //   allowedHosts: [
    //     '0a56-42-105-238-65.ngrok-free.app'
    //   ]
    // }

     server: {
    proxy: {
      '/api': {
        target: 'http://localhost:', // your backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
  }
})
