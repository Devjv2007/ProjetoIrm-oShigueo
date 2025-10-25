// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: './',
  server: {
    host: true,          // escuta em 0.0.0.0 (acesso pela rede)
    port: 5173,          // porta fixa
    strictPort: true,    // não muda a porta se a 5173 estiver ocupada
    open: false,         // não abrir o browser automaticamente
  },
  preview: {
    host: true,          // preview também acessível pela rede
    port: 4173,
    strictPort: true,
  },
})