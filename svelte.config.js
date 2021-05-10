/** @type {import('@sveltejs/kit').Config} */
// const node = require('@sveltejs/adapter-node');
import node from '@sveltejs/adapter-node'

const config = {
	kit: {
		adapter: node(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
