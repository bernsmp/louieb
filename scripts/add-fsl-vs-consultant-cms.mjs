#!/usr/bin/env node

/**
 * Script to add FSL vs Consultant page content to Supabase CMS
 * 
 * Usage: node scripts/add-fsl-vs-consultant-cms.mjs
 * 
 * Requires SUPABASE_SERVICE_ROLE_KEY in .env.local
 */

import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load environment variables
dotenv.config({ path: join(__dirname, '..', '.env.local') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing required environment variables:')
  console.error('   NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? '✓' : '✗')
  console.error('   SUPABASE_SERVICE_ROLE_KEY:', supabaseServiceKey ? '✓' : '✗')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

const cmsContent = {
  hero: {
    badgeText: 'Making the Right Choice',
    badgeSubtext: 'Sales Leadership Guide',
    headline: 'Fractional Sales Leader',
    headlineAccent: 'vs Consultant',
    description: 'Understanding the key differences can make or break your sales growth strategy',
    ctaPrimary: 'See the Differences',
    ctaSecondary: 'Schedule a Discussion',
    imageAlt: 'Professional sales leadership team collaboration',
  },
  introduction: {
    text: 'These distinctions are based on common practices in business development, sales strategy, and organizational consulting. Note that these roles can sometimes overlap or vary by industry, but the core differences highlight their scope, involvement, and impact.',
  },
  comparison: {
    headline: 'The Critical Differences',
    subheadline: 'A side-by-side comparison of what you actually get',
    points: [
      { category: 'Discovery', fsl: 'Starts with a Sales Audit to understand the details', consultant: 'Speaks mostly with the CEO' },
      { category: 'Process Building', fsl: 'Builds Sales Processes and Systems', consultant: 'Offers advice' },
      { category: 'Team Management', fsl: 'Manages the Sales Team', consultant: 'Rarely manages teams' },
      { category: 'Engagement', fsl: 'Embedded in the business', consultant: 'Project based' },
      { category: 'Pipeline Assessment', fsl: 'Creates a sales pipeline based on reality', consultant: 'Takes the pipeline at face value' },
      { category: 'Leadership Role', fsl: 'Acts as part of leadership', consultant: 'Advice from the outside' },
      { category: 'Accountability', fsl: 'Accountable for results', consultant: 'Only accountable for the quality of their advice' },
      { category: 'Hiring Support', fsl: 'Helps in interviewing and hiring the sales team', consultant: 'Very rarely interviews any salespeople' },
      { category: 'Approach', fsl: 'Balances strategy with operational tactics', consultant: 'More strategy providing one-off expertise' },
      { category: 'Involvement', fsl: 'Front line activities with the salespeople', consultant: 'Hands off' },
      { category: 'Metrics', fsl: 'Develops relevant KPIs and metrics', consultant: 'Gives advice on what other companies do' },
      { category: 'Daily Operations', fsl: 'Implements a daily sales cadence', consultant: 'Does not get that granular. More high level' },
      { category: 'Tools & Technology', fsl: 'Familiar with most CRMs, sales tools including AI', consultant: 'Book knowledge' },
      { category: 'Growth Systems', fsl: 'Builds the Sales Playbook for consistent growth', consultant: 'Uses existing company knowledge they uncover' },
    ],
  },
  summary: {
    headline: 'The Bottom Line',
    fslCard: {
      badge: 'Recommended',
      headline: 'Hire a Fractional Sales Leader',
      description: 'If you need someone to run sales while you scale or search for a full-time executive.',
      benefits: ['Embedded leadership', 'Accountable for results', 'Builds systems that scale'],
      ctaText: 'Talk to a Fractional Sales Leader',
    },
    consultantCard: {
      badge: 'Alternative',
      headline: 'Hire a Consultant',
      description: 'If you need specialized insight, market validation, or a roadmap that your existing team can execute.',
      benefits: ['External perspective', 'Project-based engagement', 'Strategic advice'],
    },
  },
  finalCta: {
    headline: 'Ready to Accelerate Your Sales?',
    description: "Let's discuss whether a Fractional Sales Leader is the right fit for your business.",
    ctaPrimary: 'Schedule a Free Consultation',
    ctaSecondary: 'Learn About FSL',
  },
}

async function addCMSContent() {
  console.log('📝 Adding FSL vs Consultant page content to Supabase CMS...\n')

  try {
    // Check if content already exists
    const { data: existing } = await supabase
      .from('site_content')
      .select('id')
      .eq('section', 'fslVsConsultantPage')
      .single()

    if (existing) {
      // Update existing content
      const { data, error } = await supabase
        .from('site_content')
        .update({
          content: cmsContent,
          updated_at: new Date().toISOString(),
        })
        .eq('section', 'fslVsConsultantPage')
        .select()

      if (error) {
        console.error('❌ Error updating content:', error.message)
        process.exit(1)
      }

      console.log('✅ Updated existing CMS content for fslVsConsultantPage')
      console.log('   ID:', data[0].id)
    } else {
      // Insert new content
      const { data, error } = await supabase
        .from('site_content')
        .insert({
          section: 'fslVsConsultantPage',
          content: cmsContent,
        })
        .select()

      if (error) {
        console.error('❌ Error inserting content:', error.message)
        process.exit(1)
      }

      console.log('✅ Added new CMS content for fslVsConsultantPage')
      console.log('   ID:', data[0].id)
    }

    console.log('\n✨ Success! The page is now editable in Supabase CMS.')
    console.log('   Section: fslVsConsultantPage')
    console.log('   All content can be edited via Supabase Dashboard > site_content table')
  } catch (error) {
    console.error('❌ Unexpected error:', error)
    process.exit(1)
  }
}

addCMSContent()
