import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        // Hier definierst du die Einstiegspunkte für deine Seiten
        main: resolve(__dirname, "index.html"),
        impressum: resolve(__dirname, "impressum.html"),
      },
    },
  },
});
