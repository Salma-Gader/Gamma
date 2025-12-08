# Gamma (Next.js 16 + React 19)

A modern, responsive portfolio website for Gamma built with the latest stable stack: Next.js 16, React 19, TypeScript, Tailwind CSS, and Framer Motion.

## Features
- Next.js 16 (App Router, Turbopack-ready)
- React 19 with latest hooks and performance improvements
- Tailwind CSS for rapid styling
- Framer Motion for smooth animations
- Responsive, mobile-first layout
- SEO-ready structure and metadata

## Stack
- Framework: Next.js 16
- Language: TypeScript
- Styling: Tailwind CSS 3.4
- Animations: Framer Motion 11
- Icons: Lucide React

## Project Structure
```
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── layout/          # Navbar, Footer
│   │   └── sections/        # Hero, About, Services, Portfolio, Contact
│   └── lib/
│       └── utils.ts         # Utility helpers
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## Getting Started
1) Install dependencies:
```bash
npm install
```
2) Run dev server:
```bash
npm run dev
```
3) Open http://localhost:3000

## Customization
- Update content in `src/components/sections/*`
- Adjust colors/brand in `tailwind.config.ts` and component classes
- Add assets to `public/`
- Tweak animations in components (Framer Motion) or see `ANIMATION_GUIDE.md`

## Animations
Framer Motion is pre-configured for scroll-triggered reveals, hover/tap micro-interactions, and subtle background motion. See `ANIMATION_GUIDE.md` for examples and alternatives (GSAP, React Spring, Motion One, Lottie).

## Recommended Node
- Node.js >= 18.18 (Next.js 16 requirement). Use the latest LTS for best results.

## Scripts
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — lint

