import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // server: {
  //   allowedHosts: ["laf66s4pu33swcw7cbdtgbquf4.srv.us"], // ✅ เพิ่ม host ที่อนุญาต
  //   host: true,
  //   port: 5173,
  // },
});
