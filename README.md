# Cherish Puniani — portfolio

An Astro site for research, engineering projects, experience, and study notes. The GitHub Pages workflow builds and deploys the static site from `main`. In the repository’s **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**. Branch publishing invokes Jekyll against the Astro source files and cannot publish the built site.

## Work locally

```sh
npm install
npm run build
```

For a development server, follow `AGENTS.md` and run `astro dev --background` (then use `astro dev status`, `astro dev logs`, and `astro dev stop`).

## Update the content

- **Research:** Edit `src/data/research.ts`. Each entry powers a homepage card and `/research/<slug>/`. Paper-grounded draft summaries, cropped method figures, and selected tables are included. Add or revise the `contribution` field with a first-person account of your specific work; this removes the work-in-progress notice on that page. Source figures live in `public/research/` and retain their paper attribution in each page caption.
- **Projects:** Edit `src/data/projects.ts`. Each object becomes a selector pill and one wide detail panel. Add a `links` array only for a public repository or page you want to show.
- **Experience and profile:** Edit `src/data/experience.ts` and `src/data/profile.ts`. The homepage hero wording lives in `src/components/Hero.astro`.
- **Résumé:** When you have a public résumé URL, set `resumeUrl` in `src/data/profile.ts`. The link is hidden until then. No résumé PDF is included in this repository.
- **Notes & Write-ups:** Add Markdown files in `src/content/notes/` using the frontmatter described in `_HOW_TO_ADD_A_NOTE.txt`. Entries marked `draft: true` stay hidden. The index at `/notes/` shows a work-in-progress message until a note is published.

Run `npm run build` after editing. The site uses Astro's static routes, so GitHub Pages needs no server or database.
