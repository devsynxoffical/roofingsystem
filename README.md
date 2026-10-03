# Roofing Systems Co. — Private Mastermind Landing Page

Next.js recreation of the [Roofing Systems private mastermind funnel](https://roofingsystems.co/privatemastermind-504306) with the Million Dollar Media black / red / white theme.

## Run locally

```bash
cd roofing-system
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

- **Logo:** `public/logo.png`
- **Booking / Calendly URL:** update links in `src/components/Hero.tsx`, `Masterclass.tsx`, `Proof.tsx`, `FinalCta.tsx`
- **Video embed:** replace the placeholder player in `src/components/Masterclass.tsx`
- **Proof & testimonials:** edit arrays in `Proof.tsx` and `Testimonials.tsx`

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Fonts: Bebas Neue + Manrope
