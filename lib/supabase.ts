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

/**
 * Upload an image to Supabase Storage
 * @param file - The file to upload
 * @param folder - The folder within the 'media' bucket (e.g., 'testimonials', 'services')
 * @returns Object with public URL and storage path, or null on error
 */
export async function uploadImage(
  file: File,
  folder: string
): Promise<{ url: string; path: string } | null> {
  if (!supabase) {
    console.error('Supabase is not configured')
    return null
  }

  try {
    // Generate unique filename with timestamp
    const timestamp = Date.now()
    const fileExt = file.name.split('.').pop()
    const fileName = `${timestamp}_${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`
    const filePath = `${folder}/${fileName}`

    // Upload to 'media' bucket
    const { data, error } = await supabase.storage
      .from('media')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (error) {
      console.error('Error uploading image:', error)
      return null
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('media')
      .getPublicUrl(data.path)

    return {
      url: publicUrl,
      path: data.path
    }
  } catch (error) {
    console.error('Exception uploading image:', error)
    return null
  }
}

/**
 * Delete an image from Supabase Storage
 * @param path - The storage path of the file to delete
 * @returns True if successful, false otherwise
 */
export async function deleteImage(path: string): Promise<boolean> {
  if (!supabase) {
    console.error('Supabase is not configured')
    return false
  }

  try {
    const { error } = await supabase.storage
      .from('media')
      .remove([path])

    if (error) {
      console.error('Error deleting image:', error)
      return false
    }

    return true
  } catch (error) {
    console.error('Exception deleting image:', error)
    return false
  }
}

/**
 * List images in Supabase Storage
 * @param folder - Optional folder to filter by (e.g., 'testimonials')
 * @returns Array of objects with name, public URL, and path
 */
export async function listImages(
  folder?: string
): Promise<{ name: string; url: string; path: string }[]> {
  if (!supabase) {
    console.error('Supabase is not configured')
    return []
  }

  try {
    // List files in the specified folder or root
    const { data, error } = await supabase.storage
      .from('media')
      .list(folder || '', {
        limit: 100,
        offset: 0,
        sortBy: { column: 'created_at', order: 'desc' }
      })

    if (error) {
      console.error('Error listing images:', error)
      return []
    }

    // Map to include public URLs
    return data.map(file => {
      const filePath = folder ? `${folder}/${file.name}` : file.name
      const { data: { publicUrl } } = supabase.storage
        .from('media')
        .getPublicUrl(filePath)

      return {
        name: file.name,
        url: publicUrl,
        path: filePath
      }
    })
  } catch (error) {
    console.error('Exception listing images:', error)
    return []
  }
}

