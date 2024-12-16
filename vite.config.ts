import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
  plugins: [react()],
  base: '/portfolio/', // Replace with your repo name
  
});
