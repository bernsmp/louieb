/**
 * Live Preview Route for Course Page
 * Fetches real data from CMS and renders preview
 */

import { NextResponse } from 'next/server'
import { getCoursePageData } from '@/lib/cms'

interface CourseContent {
  headline?: string
  tagline?: string
  description?: string
  resultsBadge?: string
  modulesHeadline?: string
  modulesSubheadline?: string
  previewHeadline?: string
  resultsHeadline?: string
  caseStudyQuote?: string
  caseStudyAttribution?: string
  finalCtaHeadline?: string
  finalCtaDescription?: string
}

function escapeHTML(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;')
}

async function renderCourseHTML(overrides: CourseContent = {}): Promise<string> {
  const pageData = await getCoursePageData()
  
  const data = {
    headline: overrides.headline ?? pageData.headline,
    tagline: overrides.tagline ?? pageData.tagline,
    description: overrides.description ?? pageData.description,
    resultsBadge: overrides.resultsBadge ?? pageData.resultsBadge,
    modulesHeadline: overrides.modulesHeadline ?? pageData.modulesHeadline,
    modulesSubheadline: overrides.modulesSubheadline ?? pageData.modulesSubheadline,
    modules: pageData.modules,
    previewHeadline: overrides.previewHeadline ?? pageData.previewHeadline,
    resultsHeadline: overrides.resultsHeadline ?? pageData.resultsHeadline,
    caseStudyQuote: overrides.caseStudyQuote ?? pageData.caseStudyQuote,
    caseStudyAttribution: overrides.caseStudyAttribution ?? pageData.caseStudyAttribution,
    finalCtaHeadline: overrides.finalCtaHeadline ?? pageData.finalCtaHeadline,
    finalCtaDescription: overrides.finalCtaDescription ?? pageData.finalCtaDescription,
  }

  const modulesHtml = data.modules.slice(0, 4).map(module => `
    <div class="module-card">
      <h3 class="module-title">${escapeHTML(module.title)}</h3>
      <p class="module-desc">${escapeHTML(module.description)}</p>
    </div>
  `).join('')

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Course Preview</title>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Outfit', sans-serif; background: #fafaf9; color: #1f2937; }
    
    .hero {
      background: linear-gradient(135deg, #1e3a8a 0%, #0966c2 100%);
      color: white;
      padding: 2rem 1rem;
      text-align: center;
    }
    .headline { font-family: 'Playfair Display', serif; font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; }
    .tagline { font-size: 0.9rem; opacity: 0.9; margin-bottom: 0.75rem; }
    .description { max-width: 500px; margin: 0 auto 1rem; line-height: 1.5; opacity: 0.9; font-size: 0.75rem; }
    .badge { display: inline-block; background: rgba(255,255,255,0.2); padding: 0.375rem 0.75rem; border-radius: 9999px; font-size: 0.65rem; }
    
    .modules { padding: 2rem 1rem; max-width: 100%; }
    .section-title { font-size: 1.25rem; font-weight: 700; text-align: center; margin-bottom: 0.25rem; }
    .section-sub { text-align: center; color: #6b7280; margin-bottom: 1.5rem; font-size: 0.75rem; }
    
    .modules-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
    .module-card { background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; padding: 1rem; }
    .module-title { font-weight: 600; margin-bottom: 0.25rem; font-size: 0.8rem; }
    .module-desc { font-size: 0.7rem; color: #6b7280; }
    
    .preview { background: #f3f4f6; padding: 2rem 1rem; text-align: center; }
    .preview-grid { display: flex; gap: 0.5rem; justify-content: center; margin-top: 1rem; }
    .preview-card { background: #1f2937; border-radius: 0.375rem; width: 80px; aspect-ratio: 16/9; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.6rem; }
    
    .results { padding: 2rem 1rem; max-width: 100%; }
    
    .case-study {
      background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
      border-radius: 0.75rem;
      padding: 1.5rem;
      text-align: center;
    }
    .quote { font-style: italic; font-size: 0.9rem; margin-bottom: 0.75rem; color: #1e3a8a; }
    .attribution { font-size: 0.75rem; color: #6b7280; }
    
    .final-cta {
      background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
      color: white;
      padding: 2rem 1rem;
      text-align: center;
    }
    .final-headline { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; }
    .final-desc { opacity: 0.9; margin-bottom: 1rem; font-size: 0.8rem; }
    .cta-btn { display: inline-block; background: #0966c2; color: white; padding: 0.625rem 1.5rem; border-radius: 0.375rem; font-weight: 600; text-decoration: none; font-size: 0.8rem; }
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
      if (c.resultsBadge !== undefined) el('badge').textContent = c.resultsBadge || '';
      if (c.modulesHeadline !== undefined) el('modules-headline').textContent = c.modulesHeadline || '';
      if (c.modulesSubheadline !== undefined) el('modules-sub').textContent = c.modulesSubheadline || '';
      if (c.previewHeadline !== undefined) el('preview-headline').textContent = c.previewHeadline || '';
      if (c.resultsHeadline !== undefined) el('results-headline').textContent = c.resultsHeadline || '';
      if (c.caseStudyQuote !== undefined) el('quote').textContent = '"' + (c.caseStudyQuote || '') + '"';
      if (c.caseStudyAttribution !== undefined) el('attribution').textContent = '— ' + (c.caseStudyAttribution || '');
      if (c.finalCtaHeadline !== undefined) el('final-headline').textContent = c.finalCtaHeadline || '';
      if (c.finalCtaDescription !== undefined) el('final-desc').textContent = c.finalCtaDescription || '';
    }
  </script>
</head>
<body>
  <section class="hero">
    <h1 id="headline" class="headline">${escapeHTML(data.headline)}</h1>
    <p id="tagline" class="tagline">${escapeHTML(data.tagline)}</p>
    <p id="description" class="description">${escapeHTML(data.description)}</p>
    <span id="badge" class="badge">${escapeHTML(data.resultsBadge)}</span>
  </section>
  
  <section class="modules">
    <h2 id="modules-headline" class="section-title">${escapeHTML(data.modulesHeadline)}</h2>
    <p id="modules-sub" class="section-sub">${escapeHTML(data.modulesSubheadline)}</p>
    <div class="modules-grid">${modulesHtml}</div>
  </section>
  
  <section class="preview">
    <h2 id="preview-headline" class="section-title">${escapeHTML(data.previewHeadline)}</h2>
    <div class="preview-grid">
      <div class="preview-card">Video 1</div>
      <div class="preview-card">Video 2</div>
      <div class="preview-card">Video 3</div>
      <div class="preview-card">Video 4</div>
    </div>
  </section>
  
  <section class="results">
    <h2 id="results-headline" class="section-title">${escapeHTML(data.resultsHeadline)}</h2>
    <div class="case-study">
      <p id="quote" class="quote">"${escapeHTML(data.caseStudyQuote)}"</p>
      <p id="attribution" class="attribution">— ${escapeHTML(data.caseStudyAttribution)}</p>
    </div>
  </section>
  
  <section class="final-cta">
    <h2 id="final-headline" class="final-headline">${escapeHTML(data.finalCtaHeadline)}</h2>
    <p id="final-desc" class="final-desc">${escapeHTML(data.finalCtaDescription)}</p>
    <a href="#" class="cta-btn">Get Access Now</a>
  </section>
</body>
</html>`
}

export async function GET() {
  const html = await renderCourseHTML()
  return new NextResponse(html, { headers: { 'Content-Type': 'text/html', 'Cache-Control': 'no-store' } })
}
