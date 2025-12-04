/**
 * Supabase Client Configuration
 * 
 * Provides both browser-safe and server-side Supabase clients.
 */

import { createClient } from '@supabase/supabase-js'

// Environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Check if Supabase is configured
export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey)

/**
 * Browser-safe Supabase client (uses anon key)
 * Use this for client-side operations and auth
 */
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

/**
 * Server-side Supabase client with service role (bypasses RLS)
 * Use this ONLY in server components and API routes
 * NEVER expose this to the client
 */
export const supabaseAdmin = isSupabaseConfigured && supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })
  : null

/**
 * Create a Supabase client with a user's session token
 * Use this for authenticated API operations
 */
export function createServerClient(accessToken?: string) {
  if (!isSupabaseConfigured) return null
  
  return createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: accessToken
        ? { Authorization: `Bearer ${accessToken}` }
        : {}
    }
  })
}

// Type definitions for our database tables
export interface SiteContentRow {
  id: string
  section: string
  content: Record<string, unknown>
  updated_at: string
  updated_by: string | null
}

export interface TestimonialRow {
  id: string
  quote: string
  author: string
  role: string | null
  company: string | null
  image_url: string | null
  featured: boolean
  display_order: number
  created_at: string
  updated_at: string
}

export interface FAQItemRow {
  id: string
  question: string
  answer: string
  display_order: number
  page: string
  created_at: string
  updated_at: string
}

export interface VideoRow {
  id: string
  youtube_id: string
  title: string
  description: string | null
  page: string
  display_order: number
  created_at: string
  updated_at: string
}

export interface ServiceRow {
  id: string
  title: string
  description: string
  icon: string | null
  highlight: boolean
  display_order: number
  created_at: string
  updated_at: string
}

export interface ProcessStepRow {
  id: string
  step_number: string
  title: string
  description: string
  display_order: number
  created_at: string
  updated_at: string
}

