# Neural Computation Laboratory Website
 all
Modern, fully static academic lab website — Astro 5 · TypeScript · Tailwind CSS · Pagefind search.

## Quick Start

```bash
npm install --legacy-peer-deps
npm run dev          # http://localhost:4321
npm run build        # outputs dist/ + indexes search
```

## 27 Pages Generated

Home · About · Research · Publications (list + 5 detail pages) · Team (index + 5 profiles) ·
Projects (index + 2 detail pages) · News (index + 3 articles) · Teaching · Resources · Contact · Search · 404 · RSS

## Content Management — No HTML Required

| Add a... | Create a file in... | Format |
|----------|--------------------|----|
| Publication | `src/content/publications/` | YAML |
| Team member | `src/content/team/` | MDX |
| News item | `src/content/news/` | MDX |
| Project | `src/content/projects/` | MDX |

See full schema in `src/content.config.ts` and examples in each folder.

## Site Config

Edit `src/lib/config.ts` — lab name, nav, email, social links.

## Design Tokens

Edit `tailwind.config.mjs`:
- `ink` (#1A1A2E) — text
- `paper` (#F7F7F5) — background  
- `accent` (#2563EB) — links & CTAs
- `margin` (#E53E3E) — signature red rule (used sparingly)

## Deploy

Output is a plain `dist/` folder. Works on Netlify, Vercel, GitHub Pages, or any static host.

### Netlify
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### GitHub Pages (Actions)
```yaml
- run: npm install --legacy-peer-deps
- run: npm run build
- uses: peaceiris/actions-gh-pages@v4
  with:
    publish_dir: ./dist
```

## Features

- Full-text search (Pagefind, zero JS shipped to users)
- BibTeX export, citation copy, PDF preview/download per publication
- PI profile with awards, grants, invited talks, media
- Dark mode (system-aware, no flash)
- RSS feed, sitemap, Open Graph, JSON-LD structured data
- WCAG-friendly: skip links, focus rings, ARIA landmarks, reduced-motion
- Print styles for publications and profiles
