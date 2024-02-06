import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://www.npmjs.com/package/vite-plugin-node-polyfills

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [nodePolyfills(), react()],
});
