# Minimalist Portfolio Website

A clean, modern portfolio built with Next.js and Tailwind CSS. It includes dark/light theme support, responsive layouts, and a small, composable component library under `components/`.

## ✨ Features

- Minimalist design with clean typography and focused whitespace
- Responsive layout — mobile-first and accessible
- Theme toggle (dark / light) supported via `components/theme-provider.tsx` and `components/theme-toggle.tsx`
- Smooth, subtle animations and hover effects
- Built with TypeScript and Tailwind CSS

## 🚀 Built With

- [Next.js](https://nextjs.org/) (app router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📦 Getting Started

This project includes a lockfile for pnpm — recommended for consistent installs.

```bash
# Clone the repository
git clone https://github.com/abhoy21/portfolio.git

# Install dependencies (uses pnpm)
pnpm install

# Run the development server
pnpm dev
```

Open http://localhost:3000 to view the portfolio.

## 📁 Project structure (high level)

- `app/` — Next.js app routes and pages (top-level pages are in `app/page.tsx`, `app/blog`, `app/projects`)
- `components/` — shared UI and feature components (see `components/ui/` for primitive UI pieces)
- `components/theme-provider.tsx`, `components/theme-toggle.tsx` — theme handling and toggle UI
- `lib/` — small helpers and content data (`lib/data.ts`, `lib/parse.ts`, `lib/seo.ts`, `lib/utils.ts`)
- `styles/` — global styles (`styles/globals.css` and `app/globals.css`)

## 🎨 Customization

The project is intentionally small and easy to tweak:

- Update your personal info / homepage content in `app/page.tsx`
- Add blog posts under `app/blog/[slug]/page.tsx` and data in `lib/data.ts` (or wire to your CMS)
- Add or edit project pages in `app/projects/[slug]/page.tsx`
- Change global styles in `app/globals.css` or `styles/globals.css`
- Modify or extend UI primitives in `components/ui/` (buttons, cards, layouts)

## 🧩 Developer notes

- Uses the Next.js app router — pages live in `app/`.
- Theme state is provided by `components/theme-provider.tsx`; toggle component is `components/theme-toggle.tsx`.
- Small helper hooks are available in `hooks/` (for example `hooks/use-toast.ts` and `hooks/use-mobile.ts`).

## 📄 License

Open source and available under the [MIT License](LICENSE).

---
