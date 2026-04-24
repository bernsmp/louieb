require('dotenv').config({ path: 'D:/louieb/.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

(async () => {
  const { data, error } = await supabase
    .from('site_content')
    .select('content')
    .eq('section', 'footer')
    .single();

  if (error) {
    console.error('Fetch error:', error);
    process.exit(1);
  }

  const content = data.content || {};
  const links = Array.isArray(content.quickLinks) ? [...content.quickLinks] : [];

  if (links.some((l) => l.label === 'Library')) {
    console.log('Library link already exists. Current links:', links);
    return;
  }

  const libraryLink = { label: 'Library', href: '/site-map' };
  const newsletterIdx = links.findIndex((l) => l.label === 'Newsletter');
  if (newsletterIdx === -1) {
    links.push(libraryLink);
  } else {
    links.splice(newsletterIdx, 0, libraryLink);
  }

  const { error: upsertError } = await supabase
    .from('site_content')
    .upsert(
      { section: 'footer', content: { ...content, quickLinks: links } },
      { onConflict: 'section' }
    );

  if (upsertError) {
    console.error('Upsert error:', upsertError);
    process.exit(1);
  }

  console.log('Updated footer quickLinks:', links);
})();
