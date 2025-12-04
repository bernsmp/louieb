/**
 * Live Preview Route for About Section
 * Fetches real data from CMS and renders preview
 */

import { NextResponse } from 'next/server'
import { getAboutData } from '@/lib/cms'

interface AboutContent {
  headline?: string
  headlineAccent?: string
  paragraph1?: string
  paragraph2?: string
  paragraph3?: string
  calloutText?: string
  stat1Value?: string
  stat1Label?: string
  stat2Value?: string
  stat2Label?: string
  stat3Value?: string
  stat3Label?: string
}

function escapeHTML(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;')
}

async function renderAboutHTML(overrides: AboutContent = {}): Promise<string> {
  const aboutData = await getAboutData()
  
  const data = {
    headline: overrides.headline ?? aboutData.headline,
    headlineAccent: overrides.headlineAccent ?? aboutData.headlineAccent,
    paragraph1: overrides.paragraph1 ?? aboutData.paragraph1,
    paragraph2: overrides.paragraph2 ?? aboutData.paragraph2,
    paragraph3: overrides.paragraph3 ?? aboutData.paragraph3,
    calloutText: overrides.calloutText ?? aboutData.calloutText,
    stat1Value: overrides.stat1Value ?? aboutData.stat1Value,
    stat1Label: overrides.stat1Label ?? aboutData.stat1Label,
    stat2Value: overrides.stat2Value ?? aboutData.stat2Value,
    stat2Label: overrides.stat2Label ?? aboutData.stat2Label,
    stat3Value: overrides.stat3Value ?? aboutData.stat3Value,
    stat3Label: overrides.stat3Label ?? aboutData.stat3Label,
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Preview</title>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Outfit', sans-serif; background: #fafaf9; color: #1f2937; }
    
    .about { padding: 2rem 1rem; max-width: 100%; }
    
    .headline-wrapper { margin-bottom: 1.5rem; }
    .headline { font-family: 'Playfair Display', serif; font-size: 1.75rem; font-weight: 700; color: #1f2937; line-height: 1.3; }
    .headline-accent { color: #0966c2; }
    
    .content { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
    
    .paragraphs p { margin-bottom: 1rem; line-height: 1.7; color: #4b5563; font-size: 0.875rem; }
    
    .callout {
      background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
      border-left: 3px solid #0966c2;
      padding: 1rem;
      border-radius: 0 0.5rem 0.5rem 0;
      margin-top: 1rem;
      font-style: italic;
      color: #1e3a8a;
      font-size: 0.875rem;
    }
    
    .stats { display: flex; flex-direction: column; gap: 1rem; }
    
    .stat {
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 0.75rem;
      padding: 1rem;
      text-align: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
    
    .stat-value { font-size: 1.5rem; font-weight: 700; color: #0966c2; margin-bottom: 0.25rem; }
    .stat-label { font-size: 0.75rem; color: #6b7280; }
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
      if (c.headlineAccent !== undefined) el('headline-accent').textContent = c.headlineAccent || '';
      if (c.paragraph1 !== undefined) el('p1').textContent = c.paragraph1 || '';
      if (c.paragraph2 !== undefined) el('p2').textContent = c.paragraph2 || '';
      if (c.paragraph3 !== undefined) el('p3').textContent = c.paragraph3 || '';
      if (c.calloutText !== undefined) el('callout').textContent = c.calloutText || '';
      if (c.stat1Value !== undefined) el('stat1-value').textContent = c.stat1Value || '';
      if (c.stat1Label !== undefined) el('stat1-label').textContent = c.stat1Label || '';
      if (c.stat2Value !== undefined) el('stat2-value').textContent = c.stat2Value || '';
      if (c.stat2Label !== undefined) el('stat2-label').textContent = c.stat2Label || '';
      if (c.stat3Value !== undefined) el('stat3-value').textContent = c.stat3Value || '';
      if (c.stat3Label !== undefined) el('stat3-label').textContent = c.stat3Label || '';
    }
  </script>
</head>
<body>
  <section class="about">
    <div class="headline-wrapper">
      <h2 class="headline">
        <span id="headline">${escapeHTML(data.headline)}</span>
        <span id="headline-accent" class="headline-accent"> ${escapeHTML(data.headlineAccent)}</span>
      </h2>
    </div>
    
    <div class="content">
      <div class="paragraphs">
        <p id="p1">${escapeHTML(data.paragraph1)}</p>
        <p id="p2">${escapeHTML(data.paragraph2)}</p>
        <p id="p3">${escapeHTML(data.paragraph3)}</p>
        <div id="callout" class="callout">${escapeHTML(data.calloutText)}</div>
      </div>
      
      <div class="stats">
        <div class="stat">
          <div id="stat1-value" class="stat-value">${escapeHTML(data.stat1Value)}</div>
          <div id="stat1-label" class="stat-label">${escapeHTML(data.stat1Label)}</div>
        </div>
        <div class="stat">
          <div id="stat2-value" class="stat-value">${escapeHTML(data.stat2Value)}</div>
          <div id="stat2-label" class="stat-label">${escapeHTML(data.stat2Label)}</div>
        </div>
        <div class="stat">
          <div id="stat3-value" class="stat-value">${escapeHTML(data.stat3Value)}</div>
          <div id="stat3-label" class="stat-label">${escapeHTML(data.stat3Label)}</div>
        </div>
      </div>
    </div>
  </section>
</body>
</html>`
}

export async function GET() {
  const html = await renderAboutHTML()
  return new NextResponse(html, { headers: { 'Content-Type': 'text/html', 'Cache-Control': 'no-store' } })
}
