import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts(),
    // VitePluginFonts({
    //   custom: {
    //     families: [
    //       {
    //         /**
    //          * Name of the font family.
    //          */
    //         name: "Inter",
    //         /**
    //          * Local name of the font. Used to add `src: local()` to `@font-rule`.
    //          */
    //         local: "Inter",
    //         /**
    //          * Regex(es) of font files to import. The names of the files will
    //          * predicate the `font-style` and `font-weight` values of the `@font-rule`'s.
    //          */
    //         src: "./src/assets/fonts/*.ttf",
    //       },
    //     ],
    //     display: "auto",
    //     preload: true,
    //     prefetch: false,
    //     injectTo: "head-prepend",
    //   },
    // }),
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      name: "Craven UI",
      // the proper extensions will be added
      fileName: "craven-ui",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
        },
      },
    },
  },
  assetsInclude: "**/*.cjs",
});
