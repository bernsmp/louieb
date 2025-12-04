/**
 * Live Preview Route for Newsletter Page
 * Fetches real data from CMS and renders preview
 */

import { NextResponse } from 'next/server'
import { getNewsletterPageData } from '@/lib/cms'

interface NewsletterContent {
  headline?: string
  tagline?: string
  description?: string
  ctaText?: string
  benefitsHeadline?: string
  finalCtaHeadline?: string
  finalCtaDescription?: string
  featuredContentHeadline?: string
  featuredContentDescription?: string
  finalCtaButtonText?: string
}

function escapeHTML(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;')
}

async function renderNewsletterHTML(overrides: NewsletterContent = {}): Promise<string> {
  const pageData = await getNewsletterPageData()
  
  const data = {
    headline: overrides.headline ?? pageData.headline,
    tagline: overrides.tagline ?? pageData.tagline,
    description: overrides.description ?? pageData.description,
    ctaText: overrides.ctaText ?? pageData.ctaText,
    benefitsHeadline: overrides.benefitsHeadline ?? pageData.benefitsHeadline,
    finalCtaHeadline: overrides.finalCtaHeadline ?? pageData.finalCtaHeadline,
    finalCtaDescription: overrides.finalCtaDescription ?? pageData.finalCtaDescription,
    featuredContentHeadline: overrides.featuredContentHeadline ?? pageData.featuredContentHeadline,
    featuredContentDescription: overrides.featuredContentDescription ?? pageData.featuredContentDescription,
    finalCtaButtonText: overrides.finalCtaButtonText ?? pageData.finalCtaButtonText,
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Newsletter Preview</title>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Outfit', sans-serif; background: #fafaf9; color: #1f2937; }
    
    .hero {
      background: linear-gradient(135deg, #1e3a8a 0%, #0966c2 100%);
      color: white;
      padding: 3rem 1rem;
      text-align: center;
    }
    .headline { font-family: 'Playfair Display', serif; font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem; }
    .tagline { font-size: 1rem; opacity: 0.9; margin-bottom: 1rem; }
    .description { max-width: 500px; margin: 0 auto 1.5rem; line-height: 1.6; opacity: 0.9; font-size: 0.875rem; }
    .cta-btn { display: inline-block; background: white; color: #1e3a8a; padding: 0.75rem 1.5rem; border-radius: 0.5rem; font-weight: 600; text-decoration: none; font-size: 0.875rem; }
    
    .benefits { padding: 2rem 1rem; max-width: 800px; margin: 0 auto; }
    .section-title { font-size: 1.25rem; font-weight: 700; text-align: center; margin-bottom: 1.5rem; }
    .benefits-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
    .benefit-card { background: white; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem; text-align: center; }
    .benefit-icon { width: 2.5rem; height: 2.5rem; background: #dbeafe; border-radius: 0.5rem; margin: 0 auto 0.75rem; }
    .benefit-title { font-weight: 600; margin-bottom: 0.25rem; font-size: 0.875rem; }
    .benefit-desc { font-size: 0.75rem; color: #6b7280; }
    
    .featured { background: #f3f4f6; padding: 2rem 1rem; text-align: center; }
    .featured-desc { color: #6b7280; margin-bottom: 1.5rem; font-size: 0.875rem; }
    .video-placeholder { max-width: 400px; margin: 0 auto; aspect-ratio: 16/9; background: #1f2937; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.75rem; }
    
    .final-cta { background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%); color: white; padding: 3rem 1rem; text-align: center; }
    .final-headline { font-size: 1.5rem; font-weight: 700; margin-bottom: 0.75rem; }
    .final-desc { opacity: 0.9; margin-bottom: 1.5rem; max-width: 400px; margin-left: auto; margin-right: auto; font-size: 0.875rem; }
    .final-btn { display: inline-block; background: #0966c2; color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; font-weight: 600; text-decoration: none; font-size: 0.875rem; }
  </style>
  <script>
    window.addEventListener('message', function(event) {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'preview-update') { updateContent(data.content); }
      } catch (e) {}
    });
    
    function updateContent(c) {
      const el = (id) => document.getElementById(id);
      if (c.headline !== undefined) el('headline').textContent = c.headline || '';
      if (c.tagline !== undefined) el('tagline').textContent = c.tagline || '';
      if (c.description !== undefined) el('description').textContent = c.description || '';
      if (c.ctaText !== undefined) el('cta-btn').textContent = c.ctaText || '';
      if (c.benefitsHeadline !== undefined) el('benefits-headline').textContent = c.benefitsHeadline || '';
      if (c.featuredContentHeadline !== undefined) el('featured-headline').textContent = c.featuredContentHeadline || '';
      if (c.featuredContentDescription !== undefined) el('featured-desc').textContent = c.featuredContentDescription || '';
      if (c.finalCtaHeadline !== undefined) el('final-headline').textContent = c.finalCtaHeadline || '';
      if (c.finalCtaDescription !== undefined) el('final-desc').textContent = c.finalCtaDescription || '';
      if (c.finalCtaButtonText !== undefined) el('final-btn').textContent = c.finalCtaButtonText || '';
    }
  </script>
</head>
<body>
  <section class="hero">
    <h1 id="headline" class="headline">${escapeHTML(data.headline)}</h1>
    <p id="tagline" class="tagline">${escapeHTML(data.tagline)}</p>
    <p id="description" class="description">${escapeHTML(data.description)}</p>
    <a id="cta-btn" href="#" class="cta-btn">${escapeHTML(data.ctaText)}</a>
  </section>
  
  <section class="benefits">
    <h2 id="benefits-headline" class="section-title">${escapeHTML(data.benefitsHeadline)}</h2>
    <div class="benefits-grid">
      <div class="benefit-card"><div class="benefit-icon"></div><h3 class="benefit-title">Weekly Insights</h3><p class="benefit-desc">Actionable strategies</p></div>
      <div class="benefit-card"><div class="benefit-icon"></div><h3 class="benefit-title">Real Examples</h3><p class="benefit-desc">Case studies</p></div>
      <div class="benefit-card"><div class="benefit-icon"></div><h3 class="benefit-title">Growth Tips</h3><p class="benefit-desc">Scale your sales</p></div>
    </div>
  </section>
  
  <section class="featured">
    <h2 id="featured-headline" class="section-title">${escapeHTML(data.featuredContentHeadline)}</h2>
    <p id="featured-desc" class="featured-desc">${escapeHTML(data.featuredContentDescription)}</p>
    <div class="video-placeholder">Featured Video</div>
  </section>
  
  <section class="final-cta">
    <h2 id="final-headline" class="final-headline">${escapeHTML(data.finalCtaHeadline)}</h2>
    <p id="final-desc" class="final-desc">${escapeHTML(data.finalCtaDescription)}</p>
    <a id="final-btn" href="#" class="final-btn">${escapeHTML(data.finalCtaButtonText)}</a>
  </section>
</body>
</html>`
}

export async function GET() {
  const html = await renderNewsletterHTML()
  return new NextResponse(html, { headers: { 'Content-Type': 'text/html', 'Cache-Control': 'no-store' } })
}
