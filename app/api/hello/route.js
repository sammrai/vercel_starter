import { NextResponse } from 'next/server';

/**
 * Example API route backed by the Node.js runtime. Replace this with your own logic
 * or call out to external services. The response is cached for 0 seconds so every
 * request is handled fresh by the serverless function when deployed to Vercel.
 */
export const runtime = 'nodejs';
export const revalidate = 0;

export async function GET() {
  return NextResponse.json({
    message: 'Hello from your Vercel-ready API route!',
    timestamp: new Date().toISOString(),
  });
}
