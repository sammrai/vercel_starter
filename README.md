# Next.js Vercel Starter

A clean Next.js App Router template designed to be deployed on Vercel. It includes a minimal landing page, Tailwind CSS, and an example Node.js API route so you can start shipping fast.

## What's Inside?
- **Next.js 14** with the App Router enabled
- **Tailwind CSS** already configured under `app/globals.css`
- **Sample API route** at `app/api/hello/route.js`
- Ready-to-use npm scripts for development, linting, and production builds

## Quick Start
```bash
npm install
npm run dev
```
Visit `http://localhost:3000` to view the starter UI. The API route lives at `http://localhost:3000/api/hello`.

## Project Structure
```
app/
  api/hello/route.js   → Example Node.js serverless function
  layout.jsx           → Root layout & metadata
  page.jsx             → Landing page template
public/                → Static assets
```

## Customisation Ideas
- Swap the copy and styling in `app/page.jsx` to match your product.
- Add more routes under `app/api/*` to connect to databases or third-party services.
- Bring in environment variables through Vercel Project Settings.

## Deploying
See [DEPLOYMENT.md](./DEPLOYMENT.md) for a step-by-step guide to deploying this repository on Vercel.
