# Deploying to Vercel

This repository is a minimal Next.js starter that is preconfigured for Vercel. It ships with an App Router frontend and an example Node.js API route you can use as a baseline for your own logic.

## Prerequisites
- Node.js 18 or newer
- A Vercel account linked to GitHub, GitLab, or Bitbucket

## Local Development
```bash
npm install
npm run dev
```
Visit `http://localhost:3000` to see the starter UI. The sample API route is available at `http://localhost:3000/api/hello`.

## One-Click Deploy with Vercel
1. Push this project to your preferred Git provider.
2. In the Vercel dashboard choose **Add New Project** and import the repository.
3. Leave the defaults (`npm install`, `npm run build`, output directory `.next`).
4. Click **Deploy** – Vercel will build the app and provision a production deployment.

### Preview Deployments
Every pull request automatically receives its own preview URL. Use this to review changes with teammates before merging.

## Environment Variables
No environment variables are required by default. Add any secrets or runtime configuration in **Project Settings → Environment Variables** and redeploy to apply the changes.

## Recommended Customisations
- Update `app/page.jsx` with your product UI and remove any sections you do not need.
- Replace `app/api/hello/route.js` with your own API implementation or add additional routes under `app/api/*`.
- Configure Analytics, Cron Jobs, storage, and other Vercel features as your project evolves.

## Resources
- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Vercel Deployment Documentation](https://vercel.com/docs/deployments/overview)
- [Serverless Functions on Vercel](https://vercel.com/docs/functions/serverless-functions)
