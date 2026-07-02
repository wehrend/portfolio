import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  // Base-Path für die Bereitstellung unter https://wehrend.github.io/portfolio/
  base: "/portfolio/",
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        // Hier definierst du die Einstiegspunkte für deine Seiten
        main: resolve(__dirname, "index.html"),
        impressum: resolve(__dirname, "impressum.html"),
        odoo: resolve(__dirname, "odoo.html"),
        samobi: resolve(__dirname, "samobi.html"),
      },
    },
  },
});
