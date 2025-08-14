import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    base: mode === 'production' ? '/' : '/',
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./client/src"),
        "@shared": path.resolve(__dirname, "./shared"),
        "@assets": path.resolve(__dirname, "./attached_assets"),
      },
    },
    root: "./client",
    build: {
      outDir: "../dist/public",
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "./client/index.html"),
        },
      },
      sourcemap: true,
    },
    server: {
      port: 5173,
      host: '0.0.0.0',
      hmr: {
        host: 'localhost',
      },
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
        },
      },
    },
  };
});
