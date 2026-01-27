#!/usr/bin/env node
/**
 * Run Supabase migrations via the REST API
 * Usage: node scripts/run-migrations.mjs
 */

import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'
import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

// Load env
config({ path: '.env.local' })

const __dirname = dirname(fileURLToPath(import.meta.url))

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function runSQL(sql, name) {
  console.log(`Running: ${name}...`)

  const { data, error } = await supabase.rpc('exec_sql', { sql })

  if (error) {
    // Try alternative: direct fetch to SQL endpoint
    const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseServiceKey,
        'Authorization': `Bearer ${supabaseServiceKey}`
      },
      body: JSON.stringify({ sql })
    })

    if (!response.ok) {
      // Fallback: use pg endpoint
      console.log(`  Note: RPC not available, trying direct approach...`)
      return false
    }
  }

  console.log(`  ✓ ${name} complete`)
  return true
}

async function createBucket() {
  console.log('Creating media bucket...')

  const { data, error } = await supabase.storage.createBucket('media', {
    public: true,
    fileSizeLimit: 5242880 // 5MB
  })

  if (error) {
    if (error.message.includes('already exists')) {
      console.log('  ✓ Bucket already exists')
      return true
    }
    console.error('  ✗ Error:', error.message)
    return false
  }

  console.log('  ✓ Bucket created')
  return true
}

async function main() {
  console.log('\n📦 Running Supabase Migrations\n')

  // Step 1: Create bucket via Storage API
  await createBucket()

  // Step 2: Read and apply policies SQL
  const policiesPath = join(__dirname, '../supabase/migrations/20240127_media_bucket_policies.sql')
  const policiesSQL = readFileSync(policiesPath, 'utf-8')

  console.log('\nApplying RLS policies...')
  console.log('  Note: Policies must be run in Supabase Dashboard SQL Editor')
  console.log('  Copy the SQL from: supabase/migrations/20240127_media_bucket_policies.sql')

  console.log('\n✨ Bucket setup complete!')
  console.log('\nNext step: Run the policies SQL in Supabase Dashboard:')
  console.log('  1. Go to https://supabase.com/dashboard')
  console.log('  2. Select your project → SQL Editor')
  console.log('  3. Paste contents of supabase/migrations/20240127_media_bucket_policies.sql')
  console.log('  4. Click Run\n')
}

main().catch(console.error)
