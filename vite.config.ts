import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// import type { ViteUserConfig } from "vitest/config";

/**
 * Custom plugin to ignore `.scss` imports during SSR
 */
// function ignoreScssPlugin() {
//   return {
//     name: 'ignore-scss-during-ssr',
//     load(id) {
//       if (id.endsWith('.scss')) {
//         return ''; // Return empty module
//       }
//     },
//   };
// }

// function ignoreCssPlugin() {
//   return {
//     name: 'ignore-css-during-ssr',
//     load(id) {
//       if (id.endsWith('.css')) {
//         return ''; // Return empty module
//       }
//     },
//   };
// }

// const test = {
//   globals: true,
//   environment: "jsdom",
//   setupFiles: ["src/__tests__/setupTests.ts"],
//   threads: false,
//   watch: false,
// } as ViteUserConfig["test"];

// https://vitejs.dev/config/
const isProd = process.env.NODE_ENV === "production";
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: { port: 3000 },
  ssr: {
    noExternal: ['react-helmet-async'] // Important for proper SSR ESM handling
  },
  build: {
    minify: true,
  },
  define: {
    process: {}
  }
});
