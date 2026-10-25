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

- `src/pages/`: the home page and one page per section (Learn, Services, Work, Writing, About), plus 404.
- `src/data/`: what the pages print, typed: the sections and insets (`site.ts`), themes, Learn sites, services, projects and clients, and the terrain's georeference.
- `src/components/`: the sheet's parts. `HeroMap.astro` draws the home page's map and its height readout.
- `src/styles/site.css`: the hub's mapping of the brand tokens and the styles every page shares.
- `src/styles/brand/`, `src/assets/brand/`, `src/assets/terrain/`, `public/favicon*`: copied or drawn from the BNHR brand kit and the Mayon elevation model by a local tool (`scripts/sync_brand.py`, not in the repo, because the kit lives outside it). Never edit these copies by hand.

## Publish

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages. In the repo's settings, Pages → Source is "GitHub Actions" and the custom domain is `bnhr.xyz`.

Other repos publish their own GitHub Pages sites under this domain at `bnhr.xyz/<repo>/`, and GitHub serves those first. `reserved-paths.json` lists them, and the build fails if a page here would sit at one of those paths. Refresh the list when a repo turns Pages on.

## License

Except where stated otherwise, the content of this site by BNHR is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) (`LICENSE.txt`). Software and other works referenced on the site are under their own licenses. The brand fonts are under the SIL Open Font License (licenses in `src/styles/brand/fonts/`).
