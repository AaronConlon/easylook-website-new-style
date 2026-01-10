// @ts-check
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';

import { codeInspectorPlugin } from 'code-inspector-plugin';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact(), pluginSvgr()],
  tools: {
    rspack: {
      plugins: [codeInspectorPlugin({ bundler: 'rspack' })],
    },
  },
});
