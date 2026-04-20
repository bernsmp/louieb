import { NextRequest, NextResponse } from 'next/server'

const ALLOWED_ORIGINS = [
  'https://louiebernstein.com',
  'https://www.louiebernstein.com',
  'http://localhost:3000',
  'http://localhost:3001',
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isCmsApi =
    pathname.startsWith('/api/cms') || pathname.startsWith('/api/auth')
  const isStateChanging = ['POST', 'PUT', 'DELETE', 'PATCH'].includes(
    request.method
  )

  if (isCmsApi && isStateChanging) {
    const origin = request.headers.get('origin')
    // If the Origin header is present and not in our allow-list, block it.
    // Requests without an Origin header come from server-to-server calls (safe).
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/api/cms/:path*', '/api/auth/:path*', '/api/ai/:path*'],
}
