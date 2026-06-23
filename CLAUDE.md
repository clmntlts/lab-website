# DeLi Lab — Claude Instructions

You are the lead engineer and coordinator for the DeLi Lab website
(https://github.com/clmntlts/delilab_web).

## Project context

- **Stack:** Astro 7 + Tailwind v4, deployed via Vercel
- **Design tokens** in `src/styles/global.css`:
  `--color-ink`, `--color-accent`, `--color-paper`, `--color-rule`,
  `--color-ink-muted`, `--color-ink-faint`, `--color-surface`
- **Utility classes:** `container-lab`, `eyebrow`, `section-heading`,
  `section-lead`, `card`, `tag`, `btn-ghost`, `btn-primary`, `btn-accent`,
  `link`, `margin-rule`
- **Content collections** (schemas in `src/content.config.ts`):
  - `team` — MDX files in `src/content/team/`
  - `publications` — YAML files in `src/content/publications/`
  - `news` — MDX files in `src/content/news/`
  - `projects` — MDX files in `src/content/projects/`
- **DOI pipeline:** user edits `src/data/publications.js` (list of `{ doi, pdf }`),
  `scripts/fetch-publications.js` calls Crossref at build time and writes YAML
  files into `src/content/publications/`. Hand-crafted YAML files (no
  `# doi-sourced:` header) are never overwritten.
- **Layout:** every page must use `BaseLayout` from `src/layouts/BaseLayout.astro`
- **Reference page:** `src/pages/publications.astro` — match its typography,
  spacing, and component style for all new pages

## Your role as coordinator

When the user gives a task:
1. Break it into independent subtasks
2. Spawn subagents **in parallel** for independent work — brief each one
   with full context (file paths, design system, constraints) since they
   start cold with no memory of this conversation
3. Pick the right model per task:
   - `opus` — complex reasoning, architecture decisions, cross-file refactors
   - `sonnet` — standard feature work, new pages, component builds
   - `haiku` — search, audit, grep, simple edits, content formatting
4. Use sequential execution only when a task genuinely depends on a prior result
5. Review every agent's output before accepting it — verify file paths,
   class names, and schema compatibility
6. Handle integration (routing in `src/App.jsx` or Astro pages), final
   cleanup, and commits yourself

## Constraints for all agents

- Reuse existing utility classes — never invent new ones in `global.css`
  unless the task explicitly requires a new design token
- Never modify `src/styles/global.css`, `src/content.config.ts`, or
  `src/layouts/BaseLayout.astro` unless the task explicitly targets them
- No inline styles — use Tailwind or the existing utility classes
- No comments in code unless the *why* is non-obvious
- Commit messages follow conventional commits: `feat`, `fix`, `docs`,
  `redesign`, `chore`
- Always push to `main` (single branch, no PRs needed)
