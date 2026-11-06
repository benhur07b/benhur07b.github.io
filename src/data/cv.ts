import { z } from 'astro/zod';
import raw from './cv/cv.json';
import stamp from './cv/sync.json';

// The CV, as the CV tool (bnhr-tools/cv) draws it for the sites: its sections in the version's order, engagements
// already picked, grouped and rolled up, every date written out. scripts/sync_cv.py builds it and copies cv.json here
// with the PDF; nothing here re-decides what the tool decided. The schema is what the About page reads, parsed at
// build time, so a change in the export's shape fails the build instead of printing wrong. Keys the page doesn't
// read (the PDF's map and page breaks) are dropped.

// Text the tool writes in its inline markup: **bold**, ==highlight== and [text](url)
const Text = z.string();
// One paragraph, or several
const Paras = z.union([Text, z.array(Text)]);

export type Bullet = string | { text: string; bullets?: Bullet[] };
const Bullet: z.ZodType<Bullet> = z.lazy(() => z.union([Text, z.object({ text: Text, bullets: z.array(Bullet).optional() })]));

const Body = {
	note: Text.optional(),
	text: Paras.optional(),
	bullets: z.array(Bullet).optional(),
};
// An engagement of a roll-up, named only: title and dates
const Brief = z.object({ id: z.string(), title: Text, when: Text });
const Part = z.object({ id: z.string(), title: Text, when: Text, ...Body });
const Entry = z.object({
	// Engagements from the track record carry their file's id; the profile's own entries (education, portfolio) don't
	id: z.string().optional(),
	title: Text,
	org: Text.optional(),
	when: Text.optional(),
	...Body,
	tags: z.array(z.string()).optional(),
	// A body of work: its engagements, newest first
	parts: z.array(Part).optional(),
	// A body of work shown by its newest engagement: the others with the same organization, overlapping it ("also") or
	// ended before it began ("previously"), and how many more each list leaves out
	others: z
		.object({
			with: Text,
			also: z.array(Brief),
			previously: z.array(Brief),
			also_more: z.number().int().positive().optional(),
			previously_more: z.number().int().positive().optional(),
		})
		.optional(),
});
const Row = z.object({ label: Text, text: Text });
const Content = {
	intro: Paras.optional(),
	entries: z.array(Entry).optional(),
	rows: z.array(Row).optional(),
	// Short entries side by side
	columns: z.number().int().positive().optional(),
};
const Subsection = z.object({ title: Text.optional(), when: Text.optional(), ...Content });
const Section = z.object({
	code: z.string(),
	title: Text,
	...Content,
	// A row of figures: a value and its label, the label one line or several
	stats: z.array(z.object({ value: Text, label: Paras })).optional(),
	tools: z.object({ label: z.string().optional(), items: z.array(z.string()) }).optional(),
	subsections: z.array(Subsection).optional(),
});
const Cv = z.object({
	name: z.string(),
	line: Text.optional(),
	contact: z.array(z.object({ text: z.string(), href: z.string() })),
	sections: z.array(Section).min(1),
});

export type CvEntry = z.infer<typeof Entry>;
export type CvPart = z.infer<typeof Part>;
export type CvRow = z.infer<typeof Row>;
export type CvSubsection = z.infer<typeof Subsection>;
export type CvSection = z.infer<typeof Section>;

export const cv = Cv.parse(raw);
// The day the CV was last copied in, printed as its date
export const cvDate = new Date(`${stamp.synced}T00:00:00Z`);
// The PDF the sync copies beside the page
export const cvPdf = '/about/bnhr-cv.pdf';

// The tool's inline markup as HTML, the same three marks its PDF prints, everything else escaped. **bold** is a
// description's lead phrase; ==highlight== takes the brand highlight
const escape = (s: string) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
export const inline = (text: string) =>
	escape(text.split(/\s+/).filter(Boolean).join(' '))
		.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label: string, href: string) => `<a href="${href.replaceAll('"', '&quot;')}">${label}</a>`)
		.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
		.replace(/==(.+?)==/g, '<span class="hl">$1</span>');
export const paras = (value: string | string[]) => (Array.isArray(value) ? value : [value]);

// A current engagement: the PDF gives it the orange dot, and so does the page
export const isCurrent = (when?: string) => !!when && when.includes('present');
