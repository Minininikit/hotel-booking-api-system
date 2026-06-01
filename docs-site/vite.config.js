import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Базовый путь сборщика должен совпадать с basePath из zudoku.config.js
  base: "/hotel-booking-api-system/",
  plugins: [react()],
});