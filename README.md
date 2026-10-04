# Cherish Puniani — portfolio

An Astro site for research, engineering projects, experience, and study notes. The GitHub Pages workflow builds and deploys the static site from `main`. In the repository’s **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**. Branch publishing invokes Jekyll against the Astro source files and cannot publish the built site.

## Work locally

```sh
npm install
npm run build
```

For a development server, follow `AGENTS.md` and run `astro dev --background` (then use `astro dev status`, `astro dev logs`, and `astro dev stop`).

## Update the content

- **Research:** Edit `src/data/research.ts`. Each entry powers a homepage card and `/research/<slug>/`. Paper-grounded summaries, cropped method figures, selected results tables, and B-DENSE training algorithms are included. Add or revise the optional `contribution` field to show a first-person account of your specific work. Source figures and algorithm images live in `public/research/` and retain their paper attribution in each page caption. Keep numerical claims, metric labels, and table/page references consistent with the linked papers.
- **Projects:** Edit `src/data/projects.ts`. Each object becomes a selector pill and one wide detail panel. Add a `links` array only for a public repository or page you want to show.
- **Experience and profile:** Edit `src/data/experience.ts` and `src/data/profile.ts`. The homepage hero wording lives in `src/components/Hero.astro`.
- **CV:** The [CV on Google Drive](https://drive.google.com/file/d/1mEHCDltCcss-s7I8k6t5OA4fxN89PbvB/view?usp=sharing) is configured through `cvUrl` in `src/data/profile.ts`. Both `src/components/Hero.astro` and `src/components/HomeSections.astro` display it immediately after Email, with the label **CV**, opening in a new tab. Update `cvUrl` when the shared file changes, and keep its Drive sharing permissions accessible to visitors. No CV PDF is stored in this repository.
- **Notes & Write-ups:** Add Markdown files in `src/content/notes/` using the frontmatter described in `_HOW_TO_ADD_A_NOTE.txt`. Entries marked `draft: true` stay hidden. The index at `/notes/` shows a work-in-progress message until a note is published.

Run `npm run build` after editing. The site uses Astro's static routes, so GitHub Pages needs no server or database.
