import million from "million/compiler";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "https://dev.datalawcompanion.org/",
  base: "https://datalawcompanion.org/",
  plugins: [
    million.vite({ auto: true }),
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto", //register service worker
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"], // service worker precache (resources to be downloaded for offline access)
      },
      devOptions: {
        enabled: true,
      },
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "logo.svg"],
      manifest: {
        name: "Data Law Companion",
        short_name: "DLC",
        description: "Your Data Law Companion",
        theme_color: "#d4802e",
        icons: [
          {
            src: "android-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "android-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "android-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        background_color: "#d4802e",
        display: "standalone",
      },
    }),
  ],
});
