<div align="center">

<img src="public/achraf-logo-1.png" alt="Achraf Boutzad logo" width="90" />

# Achraf Boutzad: Portfolio

**Software Engineer · DevOps Engineer**

Personal portfolio covering my work on real-time operational software: dashboards, monitoring systems, APIs, and IoT integrations.

[**achrafboutzad.com**](https://achrafboutzad.com) · [LinkedIn](https://www.linkedin.com/in/achraf-boutzad/) · [Email](mailto:achrafboutzad@gmail.com)

</div>

---

## About

This is the source code of my personal portfolio, a static single-page site built with Next.js and deployed to GitHub Pages under a custom domain.

It covers my work at **Haldorix** for **MARWA Corporation** (Jul 2025 - Jul 2026), where I built real-time factory dashboards, monitoring workflows, and the delivery pipelines behind them using Spring Boot, FastAPI, Next.js, Kafka, MQTT, WebSockets, Docker, and Kubernetes.

## Features

- **Dark theme** built on an ink-black palette with a tangerine accent
- **Light motion** with [Motion](https://motion.dev): a hero name reveal and fade-in on scroll, both disabled when the visitor prefers reduced motion
- **Responsive** layouts from mobile to widescreen
- **SEO**: Open Graph metadata, JSON-LD structured data, and semantic markup
- **CV download** from the nav, hero, and contact section
- **Static export**, hosted on GitHub Pages

## Tech Stack

| Layer      | Technology                                  |
| ---------- | ------------------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org) (App Router, static export) |
| UI         | [React 19](https://react.dev) + [Tailwind CSS v4](https://tailwindcss.com) |
| Animations | [Motion](https://motion.dev)                |
| Language   | TypeScript                                  |
| Deployment | GitHub Actions → GitHub Pages               |

## Project Structure

```
src/
├── app/                  # App Router: layout, page, global styles, icons
├── components/
│   ├── animations/       # Motion primitives (Reveal, HeroName)
│   ├── sections/         # Page sections (Hero, About, Skills, Projects, ...)
│   ├── Navbar.tsx
│   ├── Logo.tsx
│   └── CvDownload.tsx
└── lib/
    ├── content.ts        # All portfolio content in one place
    └── seo.ts            # Metadata, Open Graph, JSON-LD
```

All text, projects, experience, and links live in `src/lib/content.ts`, so editing content never requires touching components.

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other scripts

```bash
npm run build             # Production build (static export to /out)
npm run lint              # Lint the codebase
npm run generate-favicon  # Regenerate favicon from the logo
```

## Deployment

Every push to `main` triggers a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds the static export and publishes it to GitHub Pages at [achrafboutzad.com](https://achrafboutzad.com).

## Contact

- **Email:** [achrafboutzad@gmail.com](mailto:achrafboutzad@gmail.com)
- **LinkedIn:** [linkedin.com/in/achraf-boutzad](https://www.linkedin.com/in/achraf-boutzad/)
- **Location:** Morocco, open to remote

---

<div align="center">

Designed & built by **Achraf Boutzad** · © 2026

</div>
