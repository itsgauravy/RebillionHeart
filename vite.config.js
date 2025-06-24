import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  
  ],
  
  server: {
    host: '0.0.0.0',        
    port: 5173,               
    strictPort: true,         
     allowedHosts: [
      'ef40-2401-4900-462b-1924-59cf-457e-da1f-48ed.ngrok-free.app'
    ]
  }

})
