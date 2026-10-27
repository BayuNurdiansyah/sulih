// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://sulih.vercel.app',
	trailingSlash: 'always',
	build: {
		inlineStylesheets: 'always',
	},
	integrations: [
		mdx(),
		sitemap({
			changefreq: 'monthly',
			lastmod: new Date(),
		}),
	],

	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Plus Jakarta Sans',
			cssVariable: '--font-jakarta',
			fallbacks: ['system-ui', 'sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/plus-jakarta-sans-latin.woff2'],
						weight: '200 800',
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],

	vite: {
		plugins: [tailwindcss()],
	},
});
