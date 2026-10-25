import type { InsetHref } from './site';

// What BNHR does, drawn as the feature classes of a map legend: each service is one geometry type with its swatch
export type Geometry = 'area' | 'point' | 'line' | 'raster';

export interface Service {
	geometry: Geometry;
	title: string;
	text: string;
	// Printed after the text in the brand's highlight
	highlight?: string;
	link: { label: string; href: InsetHref };
}

export const services: readonly Service[] = [
	{
		geometry: 'area',
		title: 'Training',
		text: 'Instructor-led courses for teams, online or in person: QGIS, spatial SQL and PostGIS, GeoServer, Python, machine learning and AI.',
		link: { label: 'Training for teams', href: '/#training' },
	},
	{
		geometry: 'point',
		title: 'Consulting',
		text: 'Advice and hands-on help moving to open tools, fixing data workflows, deciding where AI fits, and reviewing projects.',
		highlight: 'The first 30 minutes are free.',
		link: { label: 'Book a consult', href: '/#contact' },
	},
	{
		geometry: 'line',
		title: 'Custom builds',
		text: 'Web maps, data platforms, QGIS plugins and data pipelines on open software.',
		link: { label: 'See the work', href: '/#work' },
	},
	{
		geometry: 'raster',
		title: 'Data and AI literacy',
		text: 'Workshops on open data, data ethics, AI literacy and building a data culture.',
		link: { label: 'Plan a workshop', href: '/#contact' },
	},
];

// "Class 01 · Area": the legend code, from the service's place in the list and its geometry
export const classCode = (service: Service) =>
	`Class ${String(services.indexOf(service) + 1).padStart(2, '0')} · ${service.geometry[0].toUpperCase()}${service.geometry.slice(1)}`;
