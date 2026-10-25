import type { Theme } from './themes';

// Projects that are live on their own sites. Each links out; case studies come later.
export interface Project {
	title: string;
	url: `https://${string}/`;
	themes: readonly [Theme, ...Theme[]];
	blurb: string;
	stack: readonly string[];
}

export const projects: readonly Project[] = [
	{
		title: 'NbS Map Platform',
		url: 'https://demo-pcp4nbs.bnhr.xyz/',
		themes: ['geo'],
		blurb: 'A national platform for Nature-based Solutions in the Philippines: hazard and ecosystem data, screening for pilot cities, and an NbS catalogue.',
		stack: ['MapLibre', 'Python'],
	},
	{
		title: 'EITI Database',
		url: 'https://eiti-database.eiti.org/',
		themes: ['geo', 'open'],
		blurb: 'An open data platform for extractive-industries transparency: EITI data across countries, companies and sectors to filter, preview and download, built on Datasette.',
		stack: ['Datasette', 'SQLite', 'GCP'],
	},
	{
		title: 'EITI Dashboard',
		url: 'https://eiti-dashboard.eiti.org/',
		themes: ['geo', 'open'],
		blurb: 'A public dashboard of EITI data on domestic resource mobilisation, reserves, and production and exports, built as a static site from the EITI database.',
		stack: ['Python', 'TypeScript', 'D3'],
	},
	{
		title: 'ASEAN AHEAD Guide',
		url: 'https://aseanahead.smartct.org/',
		themes: ['ai'],
		blurb: 'The guide to joining, organising or delivering the ASEAN AHEAD AI Career Readiness Course in the Philippines, for participants, champions and partners.',
		stack: ['HTML', 'CSS', 'With SmartCT'],
	},
];

export const clients = [
	'Open Knowledge Foundation',
	'Philippine Statistics Authority',
	'Asian Development Bank',
	'Hivos',
	'Thinking Machines',
	'Thibi',
	'Webcast Technologies',
	'Aero 360 International',
	'ASEAN Foundation',
	'CIVICUS',
] as const;
