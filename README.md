# Banjara Kids — Landing Page

Premium landing page for **Banjara Kids Preschool**, Hormavu, Bengaluru.  
India's first preschool with an on-campus skate park.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** (build & dev server)
- **Tailwind CSS 4**
- **Framer Motion** (animations)
- **Radix UI** (accessible primitives)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build (http://localhost:4173)
npm run preview
```

## Project Structure

```
├── public/            # Static assets (favicon, OG image)
├── src/
│   ├── assets/        # Images (hero, campus, logo)
│   ├── components/
│   │   ├── layout/    # Navbar, Footer
│   │   ├── sections/  # Hero, Philosophy, Programs, etc.
│   │   └── ui/        # Reusable UI primitives
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utilities
│   ├── pages/         # Page components
│   ├── App.tsx        # Root component
│   ├── index.css      # Global styles & Tailwind
│   └── main.tsx       # Entry point
├── index.html         # HTML template (SEO, structured data)
├── vite.config.ts     # Vite configuration
├── tsconfig.json      # TypeScript configuration
└── package.json
```

## Deployment

This project builds to a static `dist/` folder, deployable anywhere:

- **Vercel**: `npx vercel`
- **Netlify**: Connect repo → auto-detects Vite
- **GitHub Pages**: Use `vite-plugin-gh-pages`

## Contact

- **Email**: director@banjarakids.com
- **Phone**: +91 76196 33138
- **Address**: 4th Cross, Trinity Enclave, Banjara Layout, Hormavu, Bengaluru 560043
