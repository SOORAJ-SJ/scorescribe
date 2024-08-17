import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: 'index.html' // may differ from host to host
		}),
		paths: {
			base: '/scorescribe'
		}
	}
};

export default config;
