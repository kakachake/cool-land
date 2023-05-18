import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },

    server: {
      proxy: {
        "/apis": {
          target: "http://localhost:" + env.PORT,
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/apis/, ""),
        },
      },
    },
  };
});
