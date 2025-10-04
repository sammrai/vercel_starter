# Next.js Vercel Starter

A lightweight Next.js (App Router) + Tailwind CSS starter, ready to deploy on Vercel. The template stays intentionally minimal so you can drop in your own UI and API logic without wading through extra boilerplate.

## What's Inside?
- **Next.js 14** with the App Router
- **Tailwind CSS** preconfigured in `app/globals.css`
- **Sample API route** at `app/api/hello/route.js`
- npm scripts for development, linting, and production builds

## Development
When you open the project in VS Code with the included Dev Container, dependencies are installed automatically. Afterwards, start the local server with:

```bash
npm run dev
```

Visit `http://localhost:3000` to view the starter UI. The sample API responds at `http://localhost:3000/api/hello`.

## Project Structure
```
app/
  api/hello/route.js   → Example Node.js serverless function
  layout.jsx           → Root layout & metadata
  page.jsx             → Landing page template
public/                → Static assets live here
```

## Customisation Ideas
- Replace the copy and styling in `app/page.jsx` with your product messaging.
- Add additional API routes under `app/api/*` to integrate databases or third-party services.
- Define environment variables in Vercel Project Settings and read them at runtime.

## Deploying to Vercel
1. Push this repository to your Git provider (GitHub, GitLab, or Bitbucket).
2. Open [vercel.com/new](https://vercel.com/new) and import the repository.
3. Accept the suggested defaults (`npm run build`, output directory `.next`) and click **Deploy**.

No extra CLI commands are required—Vercel handles the build and provisioning directly from the dashboard.
