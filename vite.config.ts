import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@app": resolve(__dirname, "src/app"),
      "@appServices": resolve(__dirname, "src/services"),
      "@appTypes": resolve(__dirname, "src/types"),
      "@appPages": resolve(__dirname, "src/pages"),
      "@appLayouts": resolve(__dirname, "src/layouts"),
      "@appComponents": resolve(__dirname, "src/components"),
      "@appHooks": resolve(__dirname, "src/hooks"),
    },
  },
});
