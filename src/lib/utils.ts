// ─── Publication utilities ────────────────────────────────────────────────────

export function formatAuthors(authors: string[], highlight?: string): string {
  if (!highlight) return authors.join(', ');
  return authors.map(a => a === highlight ? `<strong>${a}</strong>` : a).join(', ');
}

export function getBibTeX(pub: {
  title: string;
  authors: string[];
  year: number;
  venue: string;
  doi?: string;
  type: string;
}, key: string): string {
  const type = pub.type === 'journal' ? 'article' : pub.type === 'conference' ? 'inproceedings' : 'misc';
  const authorStr = pub.authors.map(a => {
    const parts = a.split(' ');
    const last = parts[parts.length - 1];
    const first = parts.slice(0, -1).join(' ');
    return `${last}, ${first}`;
  }).join(' and ');

  const lines = [
    `@${type}{${key},`,
    `  title     = {${pub.title}},`,
    `  author    = {${authorStr}},`,
    `  year      = {${pub.year}},`,
    pub.type === 'journal' ? `  journal   = {${pub.venue}},` : `  booktitle = {${pub.venue}},`,
    pub.doi ? `  doi       = {${pub.doi}},` : '',
  ].filter(Boolean);
  lines.push('}');
  return lines.join('\n');
}

export function getCitation(pub: {
  authors: string[];
  year: number;
  title: string;
  venue: string;
  doi?: string;
}): string {
  const authors = pub.authors.length > 3
    ? `${pub.authors[0]} et al.`
    : pub.authors.join(', ');
  const doi = pub.doi ? ` https://doi.org/${pub.doi}` : '';
  return `${authors} (${pub.year}). ${pub.title}. ${pub.venue}.${doi}`;
}

// ─── Date utilities ────────────────────────────────────────────────────────────

export function formatDate(date: Date, format: 'short' | 'long' | 'year' = 'long'): string {
  if (format === 'year') return date.getFullYear().toString();
  if (format === 'short') return date.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

// ─── Sorting ───────────────────────────────────────────────────────────────────

export function sortByYear<T extends { data: { year: number } }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.data.year - a.data.year);
}

export function groupByYear<T extends { data: { year: number } }>(
  items: T[]
): Record<number, T[]> {
  return items.reduce((acc, item) => {
    const year = item.data.year;
    acc[year] = [...(acc[year] ?? []), item];
    return acc;
  }, {} as Record<number, T[]>);
}
