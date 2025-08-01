#!/usr/bin/env node

require("esbuild")
  .build({
    bundle: true,
    entryPoints: ["src/index.ts", "src/cli/index.ts"],
    outdir: "dist",
    external: [
      "@proload/core",
      "@proload/plugin-tsm",
      "i18next-browser-languagedetector",
      "i18next-fs-backend",
      "i18next-http-backend",
      "i18next",
      "iso-639-1",
      "locale-emoji",
    ],
    minify: true,
    format: "esm",
    platform: "node",
    target: "node18",
    banner: {
      js: `
      import { createRequire } from 'module';
      import { fileURLToPath } from 'url';
      import { dirname } from 'path';
      const require = createRequire(import.meta.url);
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = dirname(__filename);
      `,
    },
    sourcemap: false,
    sourcesContent: false,
    allowOverwrite: true,
  })
  .catch(() => process.exit(1));
