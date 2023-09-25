import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const PORT = 4502;

// https://vitejs.dev/config/
export default defineConfig({
  base: "/plugin2",
  server: {
    port: PORT,
    strictPort: true,
    hmr: {
      protocol: "ws",
      host: "localhost",
      port: PORT,
    },
  },
  plugins: [
    react(),
    federation({
      name: "plugin2",
      remotes: {
        // shell: "http://localhost:4500/shell/assets/remoteEntry.js",
        // remote: "",
      },
      exposes: {
        "./Plugin2": "./src/Plugin2.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
  },
});
