// The sheet's structure: the home page's insets, the sections that make up the main navigation, and the ways to reach
// BNHR. Components read these instead of repeating them, so a reference or a link cannot disagree between the
// legend, the sheet index, the mobile menu and the footer.

// The home page's insets in reading order, each with its map reference (column letter, row number) and title
export const insets = {
	services: { ref: 'A1', title: 'What I do' },
	learn: { ref: 'A2', title: 'Learn with BNHR' },
	training: { ref: 'A3', title: 'Next public training' },
	work: { ref: 'B1', title: 'Selected work' },
	maps: { ref: 'B2', title: 'Maps' },
	writing: { ref: 'B3', title: 'Writing' },
	clients: { ref: 'C1', title: 'Clients and partners' },
	about: { ref: 'C2', title: 'About' },
	contact: { ref: 'C3', title: 'Contact' },
} as const;
export type InsetId = keyof typeof insets;

// A link to one of the home page's insets, from any page. Built from the inset's id, so a link to an inset that
// doesn't exist fails the build.
export type InsetHref = `/#${InsetId}`;
export const insetHref = (id: InsetId): InsetHref => `/#${id}`;

export type SectionId = 'learn' | 'services' | 'work' | 'writing' | 'about';
interface SectionEntry {
	id: SectionId;
	label: string;
	// The home inset the section is: the legend's entry links to it and prints its reference
	inset: InsetId;
}
export interface Section extends SectionEntry {
	href: InsetHref;
}

// The main navigation, in the legend's order, each with its own map symbol (#s-<id>). Every section is an inset on the
// home page and links there; a section gets a page of its own only once it holds more than its inset can.
const entries: readonly SectionEntry[] = [
	{ id: 'learn', label: 'Learn', inset: 'learn' },
	{ id: 'services', label: 'Services', inset: 'services' },
	{ id: 'work', label: 'Work', inset: 'work' },
	{ id: 'writing', label: 'Writing', inset: 'writing' },
	{ id: 'about', label: 'About', inset: 'about' },
];
export const sections: readonly Section[] = entries.map((s) => ({ ...s, href: insetHref(s.inset) }));

export const email = 'hi@bnhr.xyz';
// The free first 30 minutes are booked on Google Calendar's appointment page
export const consultHref = 'https://calendar.app.google/BrDFnH5RdT75fFFHA';

export const socials = [
	{ name: 'Facebook', handle: 'bnhr.xyz', href: 'https://facebook.com/bnhr.xyz' },
	{ name: 'YouTube', handle: 'bnhrdotxyz', href: 'https://youtube.com/c/bnhrdotxyz' },
	{ name: 'GitHub', handle: 'benhur07b', href: 'https://github.com/benhur07b' },
	{ name: 'LinkedIn', handle: 'benhur07b', href: 'https://linkedin.com/in/benhur07b' },
	{ name: 'Mastodon', handle: '@bnhrdotxyz', href: 'https://fosstodon.org/@bnhrdotxyz' },
] as const;

// The old Jekyll site, frozen; old URLs that have no page here will redirect to it
export const archive = { href: 'https://old.bnhr.xyz/', host: 'old.bnhr.xyz' } as const;

export const tagline = { less: 'lock-in', more: ['openness', 'community', 'control', 'freedom', 'know-how'] } as const;
