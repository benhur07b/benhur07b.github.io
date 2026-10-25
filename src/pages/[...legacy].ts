import type { APIRoute, GetStaticPaths } from 'astro';
import { legacyRedirects } from '../data/legacy';

// A redirect at the exact path of every URL the old site published (data/legacy.ts). A page URL is written as the file
// itself (`2019/09/15/<slug>.html`) and a folder URL as its index.html (`services/index.html`), so GitHub Pages serves
// each one where the old site did; Astro's own `redirects` would put `<slug>.html/index.html` there instead. GitHub
// Pages can't send a 301, so each page forwards at once (the script keeps an old link's #anchor on the archive) and
// names the new address as canonical, for search engines to move their index over.
export const getStaticPaths = (() =>
	legacyRedirects.map(({ url, to }) => ({
		params: { legacy: (url.endsWith('/') ? `${url}index.html` : url).slice(1) },
		props: { to },
	}))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props, site }) => {
	const to: string = props.to;
	const canonical = new URL(to, site).href;
	const keepAnchor = !to.includes('#');
	const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Moved · BNHR</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="${canonical}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta http-equiv="refresh" content="0; url=${to}">
<script>location.replace(${JSON.stringify(to)}${keepAnchor ? ' + location.hash' : ''});</script>
</head>
<body>
<p>This page has moved to <a href="${to}">${canonical}</a>.</p>
</body>
</html>
`;
	return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
};
