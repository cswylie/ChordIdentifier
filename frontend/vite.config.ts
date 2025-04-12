import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // or '0.0.0.0' if you're on Linux or want to access from another device
    port: 5173, // optional: specify the port explicitly
  },
});