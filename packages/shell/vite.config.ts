import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const PORT = 4500;

// https://vitejs.dev/config/
export default defineConfig({
  base: "/shell",
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
      name: "shell",
      remotes: {
        plugin1: "http://localhost:4501/plugin1/assets/remoteEntry.js",
      },
      exposes: {
        "./ShellApp": "./src/ShellApp.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
  },
});
