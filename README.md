This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Webinar page

The Akrapex webinar landing page lives at `/webinar`. It is a self-contained static page (plain HTML, CSS and JavaScript with GSAP and Lenis for animation) in `public/webinar/`, served through one rewrite in `next.config.ts`. It does not use any code in `src/`, and the home page and the other routes are unchanged.

Its Register buttons go to `/sustainable-living`. Photos are from Pexels (free to use); the skyline is https://www.pexels.com/photo/40161580/ , the home https://www.pexels.com/photo/4933643/ , the courtyard https://www.pexels.com/photo/31656168/ and the solar roof https://www.pexels.com/photo/8457868/ .

**After the event**, either delete `public/webinar/` and the `rewrites` block in `next.config.ts`, or replace the rewrite with a redirect from `/webinar` to `/` so old shared links land on the normal waitlist. Vercel's Instant Rollback can also restore a previous deployment at any time.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
