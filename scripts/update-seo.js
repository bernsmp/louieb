const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function updateSEO() {
  const updates = [
    // Site-wide SEO (homepage title + description)
    {
      section: 'seo',
      field: 'siteTitle',
      value: 'Louie Bernstein – Fractional Sales Leader | INC 500 Founder',
    },
    {
      section: 'seo',
      field: 'siteDescription',
      value: "INC 500 Founder helping $1M–$10M ARR founders since 2017 build repeatable sales systems. Stop being the bottleneck — let's talk.",
    },
    // FSL page SEO
    {
      section: 'fslPage',
      field: 'seoTitle',
      value: 'What Is a Fractional Sales Leader? | Louie Bernstein',
    },
    {
      section: 'fslPage',
      field: 'seoDescription',
      value: "Get experienced sales leadership at a fraction of the cost. Learn what a Fractional Sales Leader does and whether it's right for your $1M–$10M company.",
    },
    // Course page SEO
    {
      section: 'coursePage',
      field: 'seoTitle',
      value: 'Sales System for Founders & CEOs | Louie Bernstein',
    },
    {
      section: 'coursePage',
      field: 'seoDescription',
      value: 'A complete 20-step system to build, optimize, and scale your sales team. Covers hiring, playbook, LinkedIn outreach, and pipeline management.',
    },
  ];

  // Group updates by section
  const bySection = {};
  for (const u of updates) {
    if (!bySection[u.section]) bySection[u.section] = {};
    bySection[u.section][u.field] = u.value;
  }

  for (const [section, fields] of Object.entries(bySection)) {
    console.log(`\nUpdating section: ${section}`);

    // Fetch existing content first
    const { data: existing, error: fetchError } = await supabase
      .from('site_content')
      .select('content')
      .eq('section', section)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') {
      console.error(`  Error fetching ${section}:`, fetchError.message);
      continue;
    }

    const existingContent = existing?.content || {};
    const newContent = { ...existingContent, ...fields };

    const { error: upsertError } = await supabase
      .from('site_content')
      .upsert({ section, content: newContent }, { onConflict: 'section' });

    if (upsertError) {
      console.error(`  Error upserting ${section}:`, upsertError.message);
    } else {
      for (const [k, v] of Object.entries(fields)) {
        console.log(`  ✓ ${k}: ${v}`);
      }
    }
  }

  console.log('\nDone.');
}

updateSEO().catch(console.error);
