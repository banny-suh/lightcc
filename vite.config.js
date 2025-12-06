import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'redirect-missing-slash',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/lightcc') {
            req.url = '/lightcc/';
          }
          next();
        });
      },
    },
  ],
  base: '/lightcc/',
})
