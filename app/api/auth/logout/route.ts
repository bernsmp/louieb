import { createServerClient } from '@/lib/auth'
import { NextResponse } from 'next/server'

export async function POST() {
  try {
    const supabase = await createServerClient()
    await supabase.auth.signOut()

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

