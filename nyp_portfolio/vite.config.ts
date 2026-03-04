import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/nyp_portfolio/',
  plugins: [react()],
})