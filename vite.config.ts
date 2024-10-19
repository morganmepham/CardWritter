import path from "path";
import react from "@vitejs/plugin-react";
import electron from "vite-plugin-electron";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    electron({
      entry: "electron/main.cts",
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/lib": path.resolve(__dirname, "./src/lib"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
