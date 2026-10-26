# Trịnh Minh Đạt — Game & Web Developer

A bilingual English/Vietnamese portfolio built with React, Vite and CSS. Includes seven game, web and UI/UX projects, team contributions, internship experience and a downloadable CV. English is the default; the visitor's language choice is saved locally.

## Requirements
- Node.js 22.12+ (Vite 8)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL shown by Vite.

## Build for production
```bash
npm run build
npm run preview
```
The production site is generated in `dist/`.

## Deploy
This is a static Vite site. You can deploy it to Vercel, Netlify, GitHub Pages, or any static hosting provider.

### Vercel / Netlify
- Build command: `npm run build`
- Output directory: `dist`

## Updating content
- Edit `src/content.js` for project data, profile links and both translations.
- Projects: Dream Witch, Manga2099, PetCare, Presify, Adventure Cube, LUDO 3D Online and ZERO (concept).
- PetCare and Presify describe team contributions, not individual ownership of all tasks. PetCare has a live link; Presify has no verified demo/source URL yet, so no empty link is shown.
- Real project screenshots are stored in `src/assets/projects/` and mapped through each project's `images` array in `src/content.js`. Adventure Cube, Dream Witch, LUDO 3D Online, PetCare and Presify each have a screenshot; ZERO has three, with a thumbnail gallery and previous/next navigation in its dialog. Images retain their full frame. Manga2099 is a Figma UI/UX project by a five-person team, with four portrait mockups and links to its demo video and password-protected Figma file.
- The original cyberpunk city background is `src/assets/nightcity-skyline.png`. Its overlays and dark surfaces are styled in `src/nightcity.css`.
- Replace the root `CV_TrinhMinhDat (2).pdf` to update the downloadable CV. Vite bundles it into the production assets.
- Animations respect `prefers-reduced-motion`; pointer parallax and card tilt only run on devices with a fine pointer.
- No backend or new runtime dependencies are required. Google Fonts falls back to local sans-serif/monospace when unavailable.

On Windows PowerShell with script execution disabled, use `npm.cmd` in place of `npm`.

## Stack
- React
- Vite
- CSS
