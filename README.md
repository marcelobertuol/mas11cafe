<img src="https://lh3.googleusercontent.com/d/17J7q1FAr4-G-HKY4s3GaF0tE1orBN9JK" width="25%"/>

# mas11

This repository contains a small Vite + React project and a prebuilt static marketing page for +11cafealpaso.

+11cafealpaso ("+11cafe") is a specialty "café al paso" located at Larrea 777, CABA (Buenos Aires). The static file docs/index.html provides the site metadata and indicates the business offers espresso, Flat White, Cold Brew, breakfast promos, and artisanal pastries; it is positioned as a quick takeaway specialty coffee (pet-friendly) for the Recoleta/Balvanera area. The site in docs/index.html is a ready-to-serve static HTML page (suitable for GitHub Pages or any static host).

Tech stack
- Vite
- React
- Tailwind CSS

## Quickstart

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

## Build & preview

- Build a production bundle into the /dist folder:
  ``` 
  npm run build
  ```
- Preview the production build locally:
  ```
  npm run preview
  ```
## Other scripts
- `npm run clean` — remove dist and server.js
- `npm run lint` — run TypeScript checks

## Notes
- A prebuilt static page is included at docs/index.html. You can serve that file directly (for example, with a static file server) or publish it via GitHub Pages from the docs/ folder.
- The package.json lists project dependencies and devDependencies. The project uses Vite + React and Tailwind for styles.

### Deploy to GitHub Pages
To host your Vite static site on GitHub Pages, using GitHub Actions is the best method. It automatically builds and deploys your site every time you push code to your main branch.
Here is the exact step-by-step setup:

### 1. Update vite.config.js
If your site URL looks like https://<username>.github.io/<repository-name>/, you must set the base path. Skip this step if you are using a custom domain.

```ts
import { defineConfig } from 'vite'
export default defineConfig({
  // Replace 'repository-name' with your exact GitHub repository name
  base: '/repository-name/', 
})
```

### 2. Enable GitHub Actions for Pages
Configure your repository to allow automated deployments:

   1. Go to your repository on GitHub.
   2. Click Settings > Pages (in the left sidebar).
   3. Under Build and deployment > Source, switch the dropdown from "Deploy from a branch" to GitHub Actions.

### 3. Create the Workflow File
In the root directory of your project, create the following folder structure and file: .github/workflows/deploy.yml.
Paste this exact configuration inside deploy.yml:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: 'main' # Change to 'master' if your default branch uses that name
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: 'pages'
  cancel-in-progress: true
jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build site
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist' # Default Vite output folder

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 4. Push to GitHub
Commit your new files and push them to your repository:

```
git add .
git commit -m "Add GitHub Actions workflow for deployment"
git push origin main
```

Your site will build automatically. You can track its progress under the Actions tab of your GitHub repository.
Are you using a frontend framework like React or Vue with client-side routing? If so, let me know, as we might need to add a quick fix to prevent 404 errors when users refresh inner pages.



