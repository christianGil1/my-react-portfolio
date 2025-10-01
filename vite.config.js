import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // if deploying to vercel, use '/' else '/my-react-portfolio/'
  base: process.env.VERCEL ? '/' : '/my-react-portfolio/',
  plugins: [react(), tailwindcss()],
})
