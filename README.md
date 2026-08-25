<img src="https://lh3.googleusercontent.com/d/17J7q1FAr4-G-HKY4s3GaF0tE1orBN9JK" width="25%"/>

# mas11

This repository contains a small Vite + React project and a prebuilt static marketing page for +11cafealpaso.

+11cafealpaso ("+11cafe") is a specialty "café al paso" located at Larrea 777, CABA (Buenos Aires). The static file docs/index.html provides the site metadata and indicates the business offers espresso, Flat White, Cold Brew, breakfast promos, and artisanal pastries; it is positioned as a quick takeaway specialty coffee (pet-friendly) for the Recoleta/Balvanera area. The site in docs/index.html is a ready-to-serve static HTML page (suitable for GitHub Pages or any static host).

Tech stack
- Vite
- React
- Tailwind CSS

Quickstart

Prerequisites: Node.js (LTS recommended) and npm

1. Install dependencies
   ```
   npm install
   ```
3. Run the development server (hot-reload)
   ```
   npm run dev
   ```
4. Open the app at `http://localhost:3000` (Vite default; port is configured in package.json script)

Build & preview

- Build a production bundle into the /dist folder:
  ``` 
  npm run build
  ```
- Preview the production build locally:
  ```
  npm run preview
  ```
Other scripts
- `npm run clean` — remove dist and server.js
- `npm run lint` — run TypeScript checks

Notes
- A prebuilt static page is included at docs/index.html. You can serve that file directly (for example, with a static file server) or publish it via GitHub Pages from the docs/ folder.
- The package.json lists project dependencies and devDependencies. The project uses Vite + React and Tailwind for styles.

