# Our Half-Year ♡

A small mobile-first digital scrapbook for a six-month anniversary.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Current photo setup

The gallery uses the selected photos from `public/photos`. The first memory is `memory-05.webp`, and the following memory cards use the personalized “самые пиздатые вдвоём” caption. Additional uploaded files can remain in the archive without being shown until they are referenced from `src/App.tsx`.

Run `npm run check:photos` to verify that every gallery reference exists and is a valid WebP.

## Personalization

- Dates and relationship text live in `src/App.tsx`.
- Gallery photos and captions are defined in the `moments` array.
- The visual system and responsive layout live in `src/styles.css`.

Built with React, TypeScript, Vite, Framer Motion and Lucide icons.
