import { defineConfig, loadEnv } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig(({ mode }) => {
  // Carrega as variáveis de ambiente do arquivo .env
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      basicSsl()
    ],
    server: {
      https: true,
      port: 3000
    },
    // Expõe as variáveis de ambiente para o cliente
    define: {
      'import.meta.env.VITE_APP_PASSWORD': JSON.stringify(env.VITE_APP_PASSWORD),
      'import.meta.env.VITE_OPENAI_API_KEY_GRUPO1': JSON.stringify(env.VITE_OPENAI_API_KEY_GRUPO1),
      'import.meta.env.VITE_OPENAI_API_KEY_GRUPO2': JSON.stringify(env.VITE_OPENAI_API_KEY_GRUPO2),
      'import.meta.env.VITE_OPENAI_API_KEY_GRUPO3': JSON.stringify(env.VITE_OPENAI_API_KEY_GRUPO3),
      'import.meta.env.VITE_OPENAI_API_KEY_GRUPO4': JSON.stringify(env.VITE_OPENAI_API_KEY_GRUPO4),
      'import.meta.env.VITE_OPENAI_API_KEY_GRUPO5': JSON.stringify(env.VITE_OPENAI_API_KEY_GRUPO5),
      'import.meta.env.VITE_OPENAI_API_KEY_GRUPO6': JSON.stringify(env.VITE_OPENAI_API_KEY_GRUPO6),
      'import.meta.env.VITE_OPENAI_API_KEY_GRUPO7': JSON.stringify(env.VITE_OPENAI_API_KEY_GRUPO7),
      'import.meta.env.VITE_OPENAI_API_KEY_GRUPO8': JSON.stringify(env.VITE_OPENAI_API_KEY_GRUPO8),
      'import.meta.env.VITE_OPENAI_API_KEY_GRUPO9': JSON.stringify(env.VITE_OPENAI_API_KEY_GRUPO9),
      'import.meta.env.VITE_OPENAI_API_KEY_GRUPO10': JSON.stringify(env.VITE_OPENAI_API_KEY_GRUPO10)
    }
  };
});
