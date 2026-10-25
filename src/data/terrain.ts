import meta from '../assets/terrain/mayon.json';

// The hub's survey: Mayon Volcano and Albay Gulf, drawn by scripts/sync_brand.py from the SRTM 1″ DEM. Map units
// are DEM cells, north up, so a cell's column and row are its longitude and latitude from the top-left corner.
export const terrain = meta;
export const lonOf = (x: number) => terrain.west + x * terrain.cell;
export const latOf = (y: number) => terrain.north - y * terrain.cell;
