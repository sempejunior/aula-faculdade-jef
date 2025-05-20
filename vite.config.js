import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({

    plugins: [
      basicSsl()
    ],
    base: '/aula-faculdade-jef/',
    server: {
      https: true,
      port: 3000
    },

});
