import { createServerClient, isAuthConfigured } from '@/lib/auth'
import { NextRequest, NextResponse } from 'next/server'

// In-memory rate limiter: 10 attempts per IP per 15 minutes.
// Note: resets on serverless cold-starts; provides best-effort protection.
const loginAttempts = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const WINDOW_MS = 15 * 60 * 1000
  const MAX_ATTEMPTS = 10
  const record = loginAttempts.get(ip)
  if (!record || record.resetAt < now) {
    loginAttempts.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return true
  }
  if (record.count >= MAX_ATTEMPTS) return false
  record.count++
  return true
}

export async function POST(request: NextRequest) {
  const forwarded = request.headers.get('x-forwarded-for') ?? ''
  const ip = forwarded.split(',')[0].trim() || 'unknown'
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many login attempts. Please try again later.' },
      { status: 429 }
    )
  }

  try {
    // Check if Supabase is configured
    if (!isAuthConfigured) {
      console.error('Login error: Supabase environment variables not configured')
      return NextResponse.json(
        { error: 'CMS authentication not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.' },
        { status: 503 }
      )
    }

    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    const supabase = await createServerClient()
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      console.error('Supabase auth error:', error.message)
      return NextResponse.json(
        { error: error.message },
        { status: 401 }
      )
    }

    return NextResponse.json({
      success: true,
      user: {
        id: data.user.id,
        email: data.user.email,
      },
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

