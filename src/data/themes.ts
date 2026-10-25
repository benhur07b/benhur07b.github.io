// What the work is about. Every project, map and post carries one or more themes, drawn as the glyphs in the
// legend's Themes key (#t-<theme>). The array's order is the order the glyphs always print in.
export const THEMES = ['geo', 'ai', 'open'] as const;
export type Theme = (typeof THEMES)[number];

export const themeInfo: Record<Theme, { label: string; short: string; spoken: string }> = {
	geo: { label: 'Geospatial & data', short: 'Geo & data', spoken: 'Geospatial and data' },
	ai: { label: 'AI', short: 'AI', spoken: 'AI' },
	open: { label: 'Open tech', short: 'Open tech', spoken: 'Open tech' },
};

// A list of themes in the canonical order, whatever order it was written in
export const ordered = (themes: readonly Theme[]) => THEMES.filter((t) => themes.includes(t));
