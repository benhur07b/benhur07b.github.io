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

export type SectionId = 'learn' | 'services' | 'work' | 'writing' | 'about';
export interface Section {
	id: SectionId;
	label: string;
	href: `/${string}/`;
	// The home inset the section's legend entry is keyed to
	inset: InsetId;
	// The view of the survey behind the page's title: always centred on the summit's latitude, `width` cells wide and
	// half as tall, with the summit `at` this fraction across (right of the title block on wide screens)
	view: { width: number; at: number };
}

// The main navigation, in the legend's order. Each section has its own page and its own map symbol (#s-<id>)
export const sections: readonly Section[] = [
	{ id: 'learn', label: 'Learn', href: '/learn/', inset: 'learn', view: { width: 600, at: 0.72 } },
	{ id: 'services', label: 'Services', href: '/services/', inset: 'services', view: { width: 520, at: 0.76 } },
	{ id: 'work', label: 'Work', href: '/work/', inset: 'work', view: { width: 560, at: 0.8 } },
	{ id: 'writing', label: 'Writing', href: '/writing/', inset: 'writing', view: { width: 640, at: 0.7 } },
	{ id: 'about', label: 'About', href: '/about/', inset: 'about', view: { width: 480, at: 0.74 } },
];

// Pages count as sheets: the home page is sheet 1 and each section page follows in the legend's order
export const sheets: readonly string[] = ['/', ...sections.map((s) => s.href)];

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
