// The Learn sites, one registry for every place the hub lists them. Each prints as an adjoining sheet in its own
// colourway; a site added here appears on the home page and the Learn page with nothing else to change.
export type Colourway = 'core' | 'coast' | 'field';

// A crop of the hub's relief (in DEM cells) drawn faintly behind the sheet, so each sheet shows a different part
// of the same survey
export type Crop = readonly [x: number, y: number, width: number, height: number];

export interface LearnSite {
	code: string;
	name: string;
	url: `https://${string}/`;
	blurb: string;
	visit: string;
	colourway: Colourway;
	crop: Crop;
	// Counts as published on the site; they are copied by hand, so check them when the site changes
	stats?: readonly { value: number; label: string }[];
}

export const learnSites: readonly LearnSite[] = [
	{
		code: 'LQ',
		name: 'Learn QGIS',
		url: 'https://learn-qgis.bnhr.xyz/',
		blurb: 'Free, hands-on QGIS workbooks, from your first map to atlases, reports and forestry tenure maps.',
		visit: 'Visit Learn QGIS',
		colourway: 'core',
		crop: [300, 140, 760, 420],
		stats: [
			{ value: 6, label: 'Free courses' },
			{ value: 30, label: 'Modules' },
			{ value: 71, label: 'Exercises' },
		],
	},
	{
		code: 'GDM',
		name: 'Learn Geospatial Data Management & Engineering',
		url: 'https://learn-geodata-management.bnhr.xyz/',
		blurb: 'Spatial databases, GeoServer, spatial data infrastructure and GeoNode, web maps and cloud-native geospatial: presentations, workbooks and tools.',
		visit: 'Visit Learn Geodata',
		colourway: 'coast',
		crop: [820, 20, 760, 420],
	},
	{
		code: 'PY',
		name: 'Learn Python',
		url: 'https://learn-python.bnhr.xyz/',
		blurb: 'Build a foundation in Python: essentials, arrays and dataframes, an introduction to AI and ML, and geospatial Python.',
		visit: 'Visit Learn Python',
		colourway: 'field',
		crop: [0, 0, 760, 420],
	},
];

export const hostOf = (site: LearnSite) => new URL(site.url).host;
