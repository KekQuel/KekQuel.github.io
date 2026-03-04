import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/nyp_portfolio/', // ← MUST match the GitHub Pages subpath
});