import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  root: "./renderer",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
