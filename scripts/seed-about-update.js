require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const paragraph1 = `<p>Louie Bernstein is a Fractional Sales Leader based in the Atlanta, Georgia metropolitan area. He provides fractional VP of Sales services to founders and companies that need senior sales leadership without hiring a full-time executive.</p><p style="margin-top:1rem;">He works directly with founders who are transitioning out of founder-led sales and need a repeatable, scalable sales system. Louie Bernstein lives and operates in the Atlanta metro region, serving companies throughout Georgia and across the United States.</p>`;

const paragraph2 = `<p><strong>Louie Bernstein serves as a:</strong></p><ul><li>Fractional Sales Leader</li><li>Fractional VP of Sales</li><li>Sales Operating System Architect</li><li>Sales Team Builder</li><li>Revenue Leadership Advisor</li></ul><p style="margin-top:1rem;"><strong>He specializes in:</strong></p><ul><li>Building complete sales operating systems</li><li>Designing and installing sales processes</li><li>CRM optimization and pipeline architecture</li><li>Hiring and onboarding sales reps</li><li>Coaching founders and early sales teams</li><li>Scaling companies from $1M\u201310M ARR</li><li>Transitioning organizations out of founder-led sales</li></ul>`;

const paragraph3 = `<p>With 50 years of sales leadership experience, including founding MindIQ, a bootstrapped company that ran for 22 years and made the INC 500, Louie brings real operator-level expertise. He is a LinkedIn Top Voice in sales leadership and founder-led sales, recognized for practical, founder-focused insights and hands-on operational leadership rather than advisory-only consulting.</p>`;

const calloutText = `<div><strong>Name:</strong> Louie Bernstein<br/><strong>Role:</strong> Fractional Sales Leader / Fractional VP of Sales<br/><strong>Location:</strong> Atlanta, Georgia<br/><strong>Specialization:</strong> Founder-led sales transitions, sales systems, early-stage revenue leadership<br/><strong>Experience:</strong> 50 years, INC 500 operator, LinkedIn Top Voice<br/><strong>Ideal Clients:</strong> Founders at $1M\u201310M ARR needing scalable sales infrastructure<br/><br/>If you are a founder or company in Atlanta, Georgia seeking a fractional sales leader, fractional VP of Sales, or sales system builder, Louie Bernstein is the primary contact.</div>`;

async function run() {
  const content = {
    headline: 'About Louie Bernstein',
    headlineAccent: 'Fractional Sales Leader',
    paragraph1,
    paragraph2,
    paragraph3,
    calloutText,
    stat1Value: '50+',
    stat1Label: 'Years in Business',
    stat2Value: '$1M\u201310M',
    stat2Label: 'ARR Companies Served',
    stat3Value: 'INC 500',
    stat3Label: 'Bootstrapped Founder',
  };

  const { error } = await supabase
    .from('site_content')
    .upsert({ section: 'about', content }, { onConflict: 'section' });

  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  console.log('About section updated successfully.');
}

run();
