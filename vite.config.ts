import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  
  build: {
    // Enable minification for smaller bundle sizes
    minify: 'esbuild',
    
    // Set chunk size warning limit
    chunkSizeWarningLimit: 1000,
    
    // Rollup options for optimization
    rollupOptions: {
      output: {
        // Optimize chunk splitting for better caching
        manualChunks(id) {
          // Only apply to client builds (not SSR)
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            if (id.includes('pdfjs-dist')) {
              return 'pdf-vendor';
            }
            if (id.includes('clsx') || id.includes('tailwind-merge') || id.includes('zustand')) {
              return 'utils';
            }
          }
        },
      },
    },
  },
  
  server: {
    // Enable HMR for faster development
    hmr: true,
    // Set default port
    port: 5173,
  },
});
