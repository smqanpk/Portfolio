// README & All code for a GitHub Pages React + Tailwind portfolio

# Qambar Naqvi — Portfolio (React + Tailwind + Framer Motion)

This repository contains a **single-file React starter** (split into logical code blocks below) and full deployment instructions to host the portfolio on **GitHub Pages** (free). The UI is premium & sleek, with dark mode, smooth animations (Framer Motion), and a contact form using **FormSubmit** (free). The site is designed as a *hub* that links to your project sub-apps (Flask/Django/ML/IoT) hosted externally.

---

## What this document contains

1. `package.json` (recommended dependencies + scripts for GitHub Pages)
2. `tailwind.config.cjs` and PostCSS config
3. `public/index.html`
4. `src/main.jsx` (React entry)
5. `src/App.jsx` (Main app — default export React component)
6. `src/index.css` (Tailwind directives + base styles)
7. Deployment instructions for GitHub Pages + hosting subapps
8. Guidance for linking sub-apps (Render, Railway, HuggingFace, Netlify, Vercel)

---

## 1) package.json

```json
{
  "name": "qambar-portfolio",
  "version": "1.0.0",
  "private": true,
  "homepage": "https://<YOUR_GITHUB_USERNAME>.github.io/qambar-portfolio",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview --port 4173",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "framer-motion": "^10.12.14",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "autoprefixer": "^10.4.14",
    "gh-pages": "^5.0.0",
    "postcss": "^8.4.23",
    "tailwindcss": "^3.4.7",
    "vite": "^5.0.0"
  }
}
```

> Replace `<YOUR_GITHUB_USERNAME>` with your GitHub username before deploying.

---

## 2) tailwind.config.cjs

```js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0ea5a4',
        accent: '#7c3aed'
      }
    }
  },
  plugins: []
}
```

---

## 3) postcss.config.cjs

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
```

---

## 4) public/index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Qambar Naqvi — GIS & AI Engineer</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## 5) src/main.jsx

```jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

---

## 6) src/App.jsx

```jsx
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return true
    const saved = localStorage.getItem('q-dark')
    if (saved) return saved === '1'
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('q-dark', dark ? '1' : '0')
  }, [dark])

  const projects = [
    {
      id: 'gis-automation',
      title: 'GIS Automation Tools',
      desc: 'ArcPy & GeoPandas automation — reprojections, batch processing & map exports',
      link: '/projects/gis-automation/'
    },
    {
      id: 'flood-dashboard',
      title: 'Real-Time Flood Mapping',
      desc: 'Sensor-driven dashboard with live map and alerting',
      link: '/projects/flood-dashboard/'
    },
    {
      id: 'ml-projects',
      title: 'Machine Learning Projects',
      desc: 'Predictive models, audio ML, and end-to-end pipelines',
      link: '/projects/ml/'
    },
    {
      id: 'cv-demos',
      title: 'Computer Vision Demos',
      desc: 'Face recognition, object detection and real-time demos',
      link: '/projects/cv/'
    },
    {
      id: 'iot-map',
      title: 'IoT Sensor Map',
      desc: 'ESP8266/ThingSpeak integration and real-time geovisualization',
      link: '/projects/iot-map/'
    },
    {
      id: 'postgis-demos',
      title: 'PostGIS Spatial DB Demos',
      desc: 'Spatial queries, indexes, and geographic analytics',
      link: '/projects/postgis/'
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">QN</div>
          <div>
            <h1 className="text-lg font-semibold">Qambar Naqvi</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">GIS • Machine Learning • Web GIS</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
          >
            {dark ? 'Light' : 'Dark'}
          </button>
          <a href="#contact" className="px-4 py-2 bg-primary text-white rounded-md">Get in touch</a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-semibold mb-3">GIS Developer & ML Engineer building production-ready geospatial systems.</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">I build automated GIS tools, real-time dashboards, machine learning models, and full-stack web GIS applications that help teams make smarter decisions faster.</p>
            <div className="flex gap-3">
              <a href="#projects" className="px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700">See Projects</a>
              <a href="#contact" className="px-4 py-2 bg-accent text-white rounded-md">Hire Me</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="w-full h-64 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center border border-gray-200 dark:border-gray-800">
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">[Hero Illustration / Map Preview — replace with screenshot or SVG]</p>
            </div>
          </motion.div>
        </section>

        <section id="services" className="py-8">
          <h3 className="text-2xl font-semibold mb-6">Services I Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['GIS Automation', 'Web GIS & Dashboards', 'Machine Learning & CV', 'IoT Integration', 'PostGIS & Spatial DB', 'Consulting & Prototyping'].map((s, i) => (
              <motion.div key={s} whileHover={{ y: -6 }} className="p-4 rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-850">
                <h4 className="font-semibold mb-2">{s}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Professional-grade delivery, clear documentation, and production-ready code.</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-12">
          <h3 className="text-2xl font-semibold mb-6">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, idx) => (
              <a key={p.id} href={p.link} className="group block p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-850 hover:shadow-lg transition-shadow">
                <motion.div whileHover={{ scale: 1.02 }} className="flex gap-4">
                  <div className="w-20 h-20 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center font-semibold">{p.title.split(' ')[0]}</div>
                  <div>
                    <h4 className="font-semibold">{p.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{p.desc}</p>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="py-12">
          <h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Tell me about your project — I respond quickly and I’m happy to scope work and provide a fixed-price estimate.</p>

          <div className="max-w-2xl">
            <form action="https://formsubmit.co/your-email@example.com" method="POST" className="grid grid-cols-1 gap-4">
              <input type="hidden" name="_subject" value="New portfolio contact" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="name" placeholder="Your name" required className="p-3 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700" />
              <input type="email" name="email" placeholder="Your email" required className="p-3 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700" />
              <input type="text" name="subject" placeholder="Subject" required className="p-3 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700" />
              <textarea name="message" rows="6" placeholder="Project details" required className="p-3 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"></textarea>
              <div className="flex gap-3">
                <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md">Send message</button>
                <a href="mailto:smqanpk@gmail.com" className="px-4 py-2 border rounded-md">Email me</a>
              </div>
            </form>
          </div>
        </section>

        <footer className="py-8 text-sm text-gray-500 dark:text-gray-400 flex justify-between">
          <div>© {new Date().getFullYear()} Qambar Naqvi</div>
          <div>Built with React • Tailwind • Framer Motion</div>
        </footer>
      </main>
    </div>
  )
}
```

---

## 7) src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root{
  --bg: #ffffff;
}

html.dark{
  --bg: #0b0f13;
}

/* small tweak for 'dark' card color */
.bg-gray-850{ background-color: #0f1724 }
```

---

## 8) Deployment (GitHub Pages) — Quick Steps

1. Create a new GitHub repo named `qambar-portfolio` (or whatever you prefer). Push all files.
2. In `package.json` set the `homepage` field to `https://<YOUR_GITHUB_USERNAME>.github.io/qambar-portfolio`.
3. Install deps locally:

```bash
npm install
# or
pnpm install
```

4. Install gh-pages and run deploy script (already in package.json):

```bash
npm run deploy
```

This runs `vite build` and deploys `dist` to `gh-pages` branch using `gh-pages` package. GitHub Pages will serve the site from the `gh-pages` branch.

**Alternative (recommended for single-page routing):** Use GitHub Actions to deploy the `dist` folder to `gh-pages` and set `./` as the publish directory (many templates and guides available).

---

## 9) Hosting sub-apps & linking them from portfolio

Your portfolio will be static on GitHub Pages. For each sub-app that requires Python, PostGIS, a model backend, or dynamic server, use free/cheap hosting:

- **Render (free tier)** — great for Flask/Django apps (easy deploy via GitHub). Use a managed Postgres add-on for small PostGIS demos or use Supabase.
- **Railway** — easy to deploy Python apps, free credits available.
- **Hugging Face Spaces** — ideal for ML demos (Gradio or Streamlit) and free for public demos.
- **Vercel / Netlify** — good for static frontends or serverless functions.
- **Supabase** — free tier for Postgres with PostGIS extensions; useful for demos.

**How to link:**
- Deploy the sub-app to one of the hosts.
- Use the public URL, and in the portfolio `projects` list above, point `link` to the hosted app URL.
- For consistent branding, embed a preview screenshot in the project subpage and a button: "Open Live Demo".

---

## 10) Next recommended steps (I can do these too)

1. I can generate **ready-to-deploy sub-app starter repos** for:
   - Flask + PostGIS demo (API + small frontend)  
   - Streamlit ML demo for model showcasing  
   - A LeafletJS static demo you can host on GitHub Pages directly
2. I can produce **custom hero illustration assets** (SVGs) for the hero section and project thumbnails.
3. I can create **three specialized profile pages** for your sub-domains inside `/projects/` with template README-style docs and screenshots.

---

If you want, I’ll now:

- Generate the full `src/` files as a downloadable zip, or
- Create the GitHub repo structure and provide commit-ready files, or
- Start building the first sub-app (Flask + PostGIS) and provide deployment instructions.

Which would you like me to do next?

---

## 11) GitHub Actions Workflow for Automatic Deployment to GitHub Pages

Create a file at `.github/workflows/deploy.yml` in your repository with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: write
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          publish_branch: gh-pages
```

### 🚀 How It Works
- Every push to the **main** branch triggers the workflow.
- The workflow installs dependencies, builds the Vite + React portfolio, and deploys the `dist` folder to the `gh-pages` branch.
- GitHub Pages is then served automatically from `gh-pages`.

### 🔧 One-Time Setup
1. Go to **Settings → Pages** in your GitHub repo.
2. Under **Build and deployment**, set:  
   - **Source:** Deploy from Branch  
   - **Branch:** `gh-pages` → `/ (root)`
3. Save.

Your portfolio will auto-publish every time you push changes to `main`.

If you'd like, I can also add:  
- automatic formatting (Prettier + GitHub Action),  
- image optimization workflow,  
- or a job to validate links and Lighthouse performance.

