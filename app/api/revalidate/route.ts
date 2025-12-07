import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

/**
 * On-demand revalidation endpoint for CMS updates.
 * Called by Supabase CMS webhooks to instantly invalidate cached pages.
 */
export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidate-secret')

  // Verify the secret to prevent unauthorized cache purges
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { error: 'Invalid secret' },
      { status: 401 }
    )
  }

  try {
    // Revalidate all pages by invalidating the root layout
    revalidatePath('/', 'layout')

    return NextResponse.json({
      revalidated: true,
      timestamp: Date.now(),
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to revalidate', details: String(error) },
      { status: 500 }
    )
  }
}
