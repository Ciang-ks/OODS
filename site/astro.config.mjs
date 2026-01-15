import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://ood-seminar.github.io', // Placeholder, user can update
  base: '/OODS',
  integrations: [tailwind(), react()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
