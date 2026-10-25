# bnhr.xyz

The BNHR hub: training, consulting and custom builds in open geospatial, data and AI tools. Built with [Astro](https://astro.build) and published with GitHub Pages at [bnhr.xyz](https://bnhr.xyz).

The site is drawn as a printed topographic sheet of Mayon Volcano: the legend is the navigation, sections are numbered insets, and the footer is the sheet's imprint. The previous Jekyll site is frozen at [old.bnhr.xyz](https://old.bnhr.xyz) (repo `benhur07b/bnhr.xyz-old`; its last commit here is tagged `jekyll-final`).

## Develop

```sh
nvm use
npm ci
npm run dev      # http://localhost:4321
npm run build    # into dist/
npm run check    # types and Astro diagnostics
```

## Where things are

- `src/pages/`: the home page and the 404. Each section (Learn, Services, Work, Writing, About) is an inset on the home page, and the navigation links there; a section gets its own page only once it holds more than its inset can.
- `src/data/`: what the pages print, typed: the sections, insets and links to them (`site.ts`), themes, Learn sites, services, projects and clients, and the terrain's georeference.
- `src/components/`: the sheet's parts. `HeroMap.astro` draws the home page's map and its height readout.
- `src/styles/site.css`: the hub's mapping of the brand tokens and the styles every page shares.
- `src/styles/brand/`, `src/assets/brand/`, `src/assets/terrain/`, `public/favicon*`: copied or drawn from the BNHR brand kit and the Mayon elevation model by a local tool (`scripts/sync_brand.py`, not in the repo, because the kit lives outside it). Never edit these copies by hand.

## Old URLs

Every URL the old Jekyll site published (`src/data/legacy.ts`, frozen with the archive) gets a redirect file at its exact path, written by `src/pages/[...legacy].ts`: to the home inset that took its content where there is one, otherwise to the same path on old.bnhr.xyz. To move an old page or post here, give its new page the old URL; the redirect follows with nothing else to change. GitHub Pages can't send a 301, so each redirect forwards at once and names the new address as canonical.

## Publish

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages. In the repo's settings, Pages → Source is "GitHub Actions" and the custom domain is `bnhr.xyz`.

Other repos publish their own GitHub Pages sites under this domain at `bnhr.xyz/<repo>/`, and GitHub serves those first. `reserved-paths.json` lists them, and the build fails if a page here would sit at one of those paths. Refresh the list when a repo turns Pages on.

## License

Except where stated otherwise, this site and its source by BNHR are licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) (`LICENSE.txt`). Astro and the other software, fonts and works the site uses or references are under their own licenses; the brand fonts are under the SIL Open Font License (licenses in `src/styles/brand/fonts/`). The BNHR name and logo are not covered.
