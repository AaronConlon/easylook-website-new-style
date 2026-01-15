// @ts-check
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';

import { codeInspectorPlugin } from 'code-inspector-plugin';

// Docs: https://rsbuild.rs/config/
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const packageJson = require('./package.json');

export default defineConfig({
  source: {
    define: {
      'import.meta.env.APP_VERSION': JSON.stringify(packageJson.version),
    },
  },
  plugins: [pluginReact(), pluginSvgr()],
  tools: {
    rspack: {
      plugins: [codeInspectorPlugin({ bundler: 'rspack' })],
    },
  },
  html: {
    favicon: './public/favicon.svg',
  },
});
