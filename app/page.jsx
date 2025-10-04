const checklist = [
  'App Router with server & client components',
  'Tailwind CSS already wired up',
  'Example Node.js API route at /api/hello',
  'Ready for local dev, preview deployments, and production',
];

const tasks = [
  {
    title: 'Develop locally',
    description: 'Run `npm run dev` and iterate with hot reload. Update `app/page.jsx` to match your product UI.',
  },
  {
    title: 'Connect data',
    description: 'Replace the sample API route with your own business logic. Use the Node.js runtime to call databases or third-party APIs.',
  },
  {
    title: 'Deploy with confidence',
    description: 'Push to GitHub and import the repo in Vercel. Preview deployments are created for each pull request automatically.',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 pb-24 pt-28">
        <section className="space-y-10">
          <div className="space-y-6 text-center sm:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              Vercel-Ready Starter
            </span>
            <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">
              Build Node-powered experiences with Next.js on Vercel
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300">
              This template gives you a clean foundation for shipping quickly. Update the UI, wire up your
              APIs, and deploy to Vercel in minutes. The defaults are production-ready but intentionally
              lightweight so you can tailor them to your needs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              <a
                href="https://vercel.com/new"
                className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
              >
                Deploy to Vercel
              </a>
              <a
                href="/api/hello"
                className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300"
              >
                Call the sample API
              </a>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {checklist.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-slate-800 bg-slate-900/70 p-4 text-left"
              >
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-semibold text-emerald-300">
                  ✓
                </span>
                <span className="text-sm text-slate-200">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 sm:grid-cols-3">
          {tasks.map(({ title, description }) => (
            <article key={title} className="space-y-2">
              <h2 className="text-lg font-semibold text-white">{title}</h2>
              <p className="text-sm leading-6 text-slate-300">{description}</p>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="text-xl font-semibold text-white">Next steps</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Update <code className="rounded bg-slate-800 px-1.5 py-0.5 text-xs">app/page.jsx</code> with your own UI
            and wire up <code className="rounded bg-slate-800 px-1.5 py-0.5 text-xs">app/api/hello/route.js</code> (or add
            new routes) to ship real functionality. When you are ready, push your changes to a Git repository and
            import it into Vercel. You will automatically get preview deployments for each pull request and a
            production deployment when you merge to your main branch.
          </p>
        </section>
      </div>
    </main>
  );
}
