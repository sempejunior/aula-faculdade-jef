import { defineConfig, loadEnv } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig(({ mode }) => {
  // Carrega as variáveis de ambiente do arquivo .env
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      basicSsl()
    ],
    base: './',
    server: {
      https: true,
      port: 3000
    },
    // Expõe as variáveis de ambiente para o cliente
    define: {
      // Definindo valores padrão caso as variáveis não estejam definidas
      'import.meta.env.VITE_APP_PASSWORD': JSON.stringify(env.VITE_APP_PASSWORD || 'aula2025'),
      'import.meta.env.VITE_OPENAI_API_KEY_GRUPO1': JSON.stringify(env.VITE_OPENAI_API_KEY_GRUPO1 || 'chave-grupo1-placeholder'),
      'import.meta.env.VITE_OPENAI_API_KEY_GRUPO2': JSON.stringify(env.VITE_OPENAI_API_KEY_GRUPO2 || 'chave-grupo2-placeholder'),
      'import.meta.env.VITE_OPENAI_API_KEY_GRUPO3': JSON.stringify(env.VITE_OPENAI_API_KEY_GRUPO3 || 'chave-grupo3-placeholder'),
      'import.meta.env.VITE_OPENAI_API_KEY_GRUPO4': JSON.stringify(env.VITE_OPENAI_API_KEY_GRUPO4 || 'chave-grupo4-placeholder'),
      'import.meta.env.VITE_OPENAI_API_KEY_GRUPO5': JSON.stringify(env.VITE_OPENAI_API_KEY_GRUPO5 || 'chave-grupo5-placeholder'),
      'import.meta.env.VITE_OPENAI_API_KEY_GRUPO6': JSON.stringify(env.VITE_OPENAI_API_KEY_GRUPO6 || 'chave-grupo6-placeholder'),
      'import.meta.env.VITE_OPENAI_API_KEY_GRUPO7': JSON.stringify(env.VITE_OPENAI_API_KEY_GRUPO7 || 'chave-grupo7-placeholder'),
      'import.meta.env.VITE_OPENAI_API_KEY_GRUPO8': JSON.stringify(env.VITE_OPENAI_API_KEY_GRUPO8 || 'chave-grupo8-placeholder'),
      'import.meta.env.VITE_OPENAI_API_KEY_GRUPO9': JSON.stringify(env.VITE_OPENAI_API_KEY_GRUPO9 || 'chave-grupo9-placeholder'),
      'import.meta.env.VITE_OPENAI_API_KEY_GRUPO10': JSON.stringify(env.VITE_OPENAI_API_KEY_GRUPO10 || 'chave-grupo10-placeholder')
    }
  };
});
