# Sarah Desktop Portfolio

An interactive, desktop-inspired portfolio built with React and Vite. It recreates the interaction model of the supplied reference: draggable notes, folder-style collections, Finder-like project windows, a local guest book, a resume preview, a tiny pixel cat, and a compact player.

## Edit your content

Most visible portfolio content lives near the top of `src/App.jsx`:

- `folders.work.items` — work case studies
- `folders.lab.items` — experiments and learning projects
- `folders.beyond.items` — beyond-work stories
- `socials` — social and contact links
- `ResumeWindow` — resume summary and selected outcomes

Replace the files in `public/assets/` with your own portfolio visuals before publishing. The current thumbnails and sky background are local visual-reference assets from the website supplied in the request; they are not licensed here for redistribution.

## Local development

```bash
pnpm install
pnpm dev
```

The app supports desktop dragging and click-to-open folders. On small screens, the same content becomes a touch-friendly two-column layout.
