# Agent notes — Vanessa's portfolio

- Static export site (`output: "export"`, `trailingSlash: true`, `images: { unoptimized: true }`) deployed to Cloudflare Pages. No server runtime — don't use Next.js features that require one.
- All copy lives in `src/lib/content.ts`, with parallel `en` and `zh` objects for every export. When adding or editing content, update both languages.
- Multi-phase projects (e.g. `p2`, `p6`, `p7`) follow a `phases: [{ number, period, title, outcomes[] }]` array, rendered as accordion cards directly in each project's `page.tsx` (not in the shared layout).
- Bilingual tables use the `BilingualTable` component (EN row in white, ZH row in `blue-50`, stacked per field).
- New project pages: add the content export to `content.ts`, a `projectCards` entry (both languages), a `Nav.tsx` entry, and a `page.tsx` under `src/app/projects/<slug>/` using `ProjectPageLayout`.
- "Vanessa Chua" stays in English on ZH pages — do not translate the name to Chinese characters.
- The "Projects" subtitle date range on the homepage is computed dynamically via `todayLabel()` in `ProjectCard.tsx` — don't hardcode an end date.
- After content/component changes: `npm run build` then `npx wrangler pages deploy out/ --project-name=vanessa-portfolio --commit-dirty=true`.
