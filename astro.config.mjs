// @ts-check
import { defineConfig } from 'astro/config';
import reservedPaths from './reserved-paths.json' with { type: 'json' };

// Other repos publish GitHub Pages under this domain at /<repo>/, and GitHub serves those ahead of this site, so a
// page here at one of those paths would never be seen. The build fails if a page lands on one (reserved-paths.json;
// refresh it when a repo turns Pages on).
const reserved = new Set(reservedPaths.paths.map((p) => p.toLowerCase()));
const keepClearOfRepoPages = {
	name: 'keep-clear-of-repo-pages',
	hooks: {
		/** @param {{ pages: { pathname: string }[] }} options */
		'astro:build:done': ({ pages }) => {
			const clashes = pages.map((p) => p.pathname.split('/')[0]).filter((top) => reserved.has(top.toLowerCase()));
			if (clashes.length) throw new Error(`These pages sit where another repo's GitHub Pages site is served: ${[...new Set(clashes)].join(', ')}`);
		},
	},
};

export default defineConfig({
	site: 'https://bnhr.xyz',
	trailingSlash: 'always',
	build: { format: 'directory' },
	integrations: [keepClearOfRepoPages],
});
