# BLACK LINE | Detailing Studio

A premium, one-page website for BLACK LINE Detailing Studio — a car detailing, protection, and customization studio. Built with Vite + React + TypeScript, animated with GSAP/ScrollTrigger and Lenis smooth scrolling.

## Getting Started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Deploying to Netlify

1. Push this repo to GitHub (or connect via Netlify dashboard).
2. Netlify will auto-detect settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. That's it. The SPA redirect rule is already included.

### Enabling Form Email Notifications

The contact form uses Netlify Forms (no backend needed). To receive email notifications:

1. Go to your site on [Netlify](https://app.netlify.com).
2. **Forms** → find the `contact` form submission.
3. **Settings** → **Forms & Notifications** → **Add notification** → **Email notification**.
4. Enter the client's email address and save.

You can also view all submissions under **Forms** in the Netlify dashboard.

## Swapping Images

All image paths are defined in `src/content.ts` and point to `/images/` in the `public/` folder. To add real photos:

1. Drop your images into `public/images/` with these filenames:
   - `hero.jpg` — full-bleed hero image
   - `about.jpg` — about section image
   - `work-01.jpg` through `work-08.jpg` — gallery images
   - `work-04-before.jpg` / `work-04-after.jpg` — before/after slider
   - `work-07-before.jpg` / `work-07-after.jpg` — before/after slider
   - `service-01.jpg` through `service-11.jpg` — service preview images
   - `og.jpg` — Open Graph social share image (1200×630px recommended)
2. Replace `public/logo.svg` with the real "B" logo.

Until real images exist, tasteful dark placeholders with hex-mesh texture are shown automatically — the layout never looks broken.

## Editing Content

All text content is centralized in **`src/content.ts`**:

- **Services** — names, descriptions, order
- **Works** — car titles, services performed, before/after flags
- **Contact info** — phone numbers, email, Instagram handle, address, hours, map embed
- **Process steps** — titles and descriptions
- **Counters** — years, cars detailed, happy clients (edit the values)
- **Hero/About headlines** and tagline

Just edit the values in that file and save — no component changes needed.

## Changing Colors

All colors are CSS variables in `src/index.css` at the top of `:root`:

```css
--bg: #0A0A0B;        /* near-black base */
--surface: #141415;   /* panels */
--surface-2: #1C1C1E; /* darker panels */
--line: #2B2B2E;      /* hairline borders */
--text: #F2F2F2;      /* white text */
--muted: #8E8E93;     /* silver-grey secondary text */
--red: #E3262E;       /* PRIMARY ACCENT: neon sign red */
--red-glow: rgba(227,38,46,.45);
```

Change `--red` and `--red-glow` to rebrand the entire site's accent color in one place.

## Tech Stack

- **Vite** + **React** + **TypeScript**
- **GSAP** + **ScrollTrigger** — scroll animations, line reveals, clip-path wipes
- **Lenis** — inertial smooth scrolling, synced with ScrollTrigger
- **Plain CSS** with CSS variables — no UI kits, no Tailwind in components
- **Netlify Forms** — contact form with honeypot spam protection
- **Google Fonts** — Chakra Petch (display) + Inter Tight (body)

## Features

- Custom cursor (dot + ring) that grows on interactive elements and shows "VIEW" on gallery items (disabled on touch)
- Magnetic buttons with diagonal red sweep on hover
- Preloader with red line draw and wordmark reveal (once per session)
- Horizontal pinned-scroll gallery with before/after sliders
- Draggable before/after comparison on selected projects
- Full-screen lightbox for project images
- Animated counters in the About section
- Red line that draws through the Process steps as you scroll
- Film grain overlay and hexagon mesh texture for depth
- Sticky mobile Call/WhatsApp bar
- `prefers-reduced-motion` support — all animations gracefully disabled
- LocalBusiness JSON-LD structured data for SEO
- Open Graph + Twitter card meta tags

## License

Built for BLACK LINE Detailing Studio. All rights reserved.
