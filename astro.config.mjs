import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // Disable the dev tools overlay ("Astro Toolbar") in dev.
  devToolbar: { enabled: false },
});
