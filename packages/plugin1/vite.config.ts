import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const PORT = 4501;

// https://vitejs.dev/config/
export default defineConfig({
  base: "/plugin1",
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
      name: "plugin1",
      remotes: {
        plugin2: "http://localhost:4502/plugin2/assets/remoteEntry.js",
        shell: "http://localhost:4500/shell/assets/remoteEntry.js",
      },
      exposes: {
        "./Plugin1App": "./src/Plugin1App.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
  },
});
