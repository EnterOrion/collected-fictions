import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex'; // 👈 import mdsvex
import mdsvexConfig from './mdsvex.config.js'; // 👈import our mdsvex config

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: mdsvex(mdsvexConfig),
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/sveltekit-github-pages' : ''
		}
	}
};

export default config;
