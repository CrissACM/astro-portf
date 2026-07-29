import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? "https://crissacm.dev",
  vite: {
    plugins: [tailwindcss()],
  },
});
