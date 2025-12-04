/**
 * Live Preview Route for Hero Section
 * 
 * This route renders the Hero section with provided content data
 * for the CMS live preview feature.
 */

import { NextRequest, NextResponse } from 'next/server'

interface HeroContent {
  headline?: string
  tagline?: string
  description?: string
  videoId?: string
  credentialPrimary?: string
  credentialSecondary?: string
  ctaPrimary?: { text?: string; url?: string }
  ctaSecondary?: { text?: string; url?: string }
}

// Defaults (same as lib/cms.ts)
const defaults: HeroContent = {
  headline: 'Fractional Sales Leader',
  tagline: 'Less Spend. More Sales.',
  description: "I've scaled from zero to INC 500, so I know the grind. Still running sales at $1M–$10M? You're bottlenecking your growth. Ready to break through? Let's talk.",
  videoId: 'fCVKpcpD8tA',
  credentialPrimary: 'LinkedIn Top Voice',
  credentialSecondary: '50+ Years Sales Experience',
  ctaPrimary: { text: 'Learn How It Works', url: '#process' },
  ctaSecondary: { text: 'Schedule a Discussion', url: 'https://calendly.com/louiebernstein/30minutes' },
}

function renderHeroHTML(content: HeroContent): string {
  const data = {
    headline: content.headline || defaults.headline,
    tagline: content.tagline || defaults.tagline,
    description: content.description || defaults.description,
    videoId: content.videoId || defaults.videoId,
    credentialPrimary: content.credentialPrimary || defaults.credentialPrimary,
    credentialSecondary: content.credentialSecondary || defaults.credentialSecondary,
    ctaPrimaryText: content.ctaPrimary?.text || defaults.ctaPrimary?.text,
    ctaPrimaryUrl: content.ctaPrimary?.url || defaults.ctaPrimary?.url,
    ctaSecondaryText: content.ctaSecondary?.text || defaults.ctaSecondary?.text,
    ctaSecondaryUrl: content.ctaSecondary?.url || defaults.ctaSecondary?.url,
  }

  // Get YouTube thumbnail
  const thumbUrl = data.videoId 
    ? `https://img.youtube.com/vi/${data.videoId}/maxresdefault.jpg`
    : ''

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hero Preview</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #020617;
      color: white;
      min-height: 100vh;
      overflow-x: hidden;
    }
    
    .hero {
      position: relative;
      width: 100%;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #0f172a 0%, #020617 50%, #0f172a 100%);
      overflow: hidden;
    }
    
    /* Animated background grid */
    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 50px 50px;
      animation: gridMove 20s linear infinite;
    }
    
    @keyframes gridMove {
      0% { transform: translate(0, 0); }
      100% { transform: translate(50px, 50px); }
    }
    
    /* Glow effects */
    .hero::after {
      content: '';
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
      width: 600px;
      height: 400px;
      background: radial-gradient(ellipse, rgba(59, 130, 246, 0.15), transparent 70%);
      pointer-events: none;
    }
    
    .hero-content {
      position: relative;
      z-index: 10;
      text-align: center;
      padding: 2rem;
      max-width: 1000px;
      width: 100%;
    }
    
    .headline {
      font-family: 'Outfit', sans-serif;
      font-size: clamp(2rem, 8vw, 5rem);
      font-weight: 500;
      color: #f5f5f5;
      line-height: 1.1;
      margin-bottom: 1rem;
      text-shadow: 0 4px 30px rgba(0,0,0,0.3);
    }
    
    .credential-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 9999px;
      margin-bottom: 1rem;
      backdrop-filter: blur(10px);
    }
    
    .credential-primary {
      font-size: 0.875rem;
      font-weight: 600;
      color: #f5f5f5;
    }
    
    .credential-divider {
      color: rgba(255,255,255,0.3);
    }
    
    .credential-secondary {
      font-size: 0.875rem;
      color: #a3a3a3;
    }
    
    .tagline {
      font-size: clamp(1.25rem, 3vw, 2rem);
      color: #d4d4d4;
      margin-bottom: 1.5rem;
      font-weight: 300;
    }
    
    .video-container {
      max-width: 700px;
      margin: 0 auto 1.5rem;
      border-radius: 0.75rem;
      overflow: hidden;
      box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
    }
    
    .video-wrapper {
      position: relative;
      aspect-ratio: 16 / 9;
      background: #1a1a1a;
    }
    
    .video-thumb {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .play-button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60px;
      height: 60px;
      background: rgba(255,255,255,0.95);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 10px 40px rgba(0,0,0,0.3);
      transition: transform 0.2s, box-shadow 0.2s;
      cursor: pointer;
    }
    
    .play-button:hover {
      transform: translate(-50%, -50%) scale(1.1);
      box-shadow: 0 15px 50px rgba(0,0,0,0.4);
    }
    
    .play-icon {
      width: 0;
      height: 0;
      border-left: 20px solid #0f172a;
      border-top: 12px solid transparent;
      border-bottom: 12px solid transparent;
      margin-left: 4px;
    }
    
    .description {
      font-size: clamp(1rem, 2vw, 1.25rem);
      color: #e5e5e5;
      line-height: 1.7;
      margin-bottom: 2rem;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .cta-buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }
    
    .btn {
      padding: 0.875rem 2rem;
      border-radius: 0.5rem;
      font-size: 1rem;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.2s;
      display: inline-block;
    }
    
    .btn-primary {
      background: #f5f5f5;
      color: #0f172a;
    }
    
    .btn-primary:hover {
      background: #e5e5e5;
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(255,255,255,0.1);
    }
    
    .btn-secondary {
      background: #0966c2;
      color: #f5f5f5;
      border: 2px solid #0966c2;
    }
    
    .btn-secondary:hover {
      background: #0855a3;
      border-color: #0855a3;
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(9, 102, 194, 0.3);
    }
    
    /* Responsive */
    @media (max-width: 640px) {
      .hero-content {
        padding: 1.5rem;
      }
      
      .cta-buttons {
        flex-direction: column;
        align-items: stretch;
      }
      
      .btn {
        width: 100%;
        text-align: center;
      }
    }
  </style>
  <script>
    // Listen for postMessage updates from parent
    window.addEventListener('message', function(event) {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'preview-update') {
          updateContent(data.content);
        }
      } catch (e) {
        // Ignore non-JSON messages
      }
    });
    
    function updateContent(content) {
      // Update headline
      const headline = document.getElementById('headline');
      if (headline && content.headline !== undefined) {
        headline.textContent = content.headline || 'Fractional Sales Leader';
      }
      
      // Update tagline
      const tagline = document.getElementById('tagline');
      if (tagline && content.tagline !== undefined) {
        tagline.textContent = content.tagline || 'Less Spend. More Sales.';
      }
      
      // Update description
      const description = document.getElementById('description');
      if (description && content.description !== undefined) {
        description.textContent = content.description || "I've scaled from zero to INC 500...";
      }
      
      // Update credentials
      const credPrimary = document.getElementById('credential-primary');
      if (credPrimary && content.credentialPrimary !== undefined) {
        credPrimary.textContent = content.credentialPrimary || 'LinkedIn Top Voice';
      }
      
      const credSecondary = document.getElementById('credential-secondary');
      if (credSecondary && content.credentialSecondary !== undefined) {
        credSecondary.textContent = content.credentialSecondary || '50+ Years Sales Experience';
      }
      
      // Update video thumbnail
      const videoThumb = document.getElementById('video-thumb');
      if (videoThumb && content.videoId !== undefined) {
        const videoId = content.videoId || 'fCVKpcpD8tA';
        videoThumb.src = 'https://img.youtube.com/vi/' + videoId + '/maxresdefault.jpg';
      }
      
      // Update CTA buttons
      const primaryBtn = document.getElementById('cta-primary');
      if (primaryBtn) {
        if (content.ctaPrimary?.text !== undefined) {
          primaryBtn.textContent = content.ctaPrimary.text || 'Learn How It Works';
        }
        if (content.ctaPrimary?.url !== undefined) {
          primaryBtn.href = content.ctaPrimary.url || '#process';
        }
      }
      
      const secondaryBtn = document.getElementById('cta-secondary');
      if (secondaryBtn) {
        if (content.ctaSecondary?.text !== undefined) {
          secondaryBtn.textContent = content.ctaSecondary.text || 'Schedule a Discussion';
        }
        if (content.ctaSecondary?.url !== undefined) {
          secondaryBtn.href = content.ctaSecondary.url || '#';
        }
      }
    }
  </script>
</head>
<body>
  <section class="hero">
    <div class="hero-content">
      <h1 id="headline" class="headline">${escapeHTML(data.headline || '')}</h1>
      
      <div class="credential-badge">
        <span id="credential-primary" class="credential-primary">${escapeHTML(data.credentialPrimary || '')}</span>
        <span class="credential-divider">|</span>
        <span id="credential-secondary" class="credential-secondary">${escapeHTML(data.credentialSecondary || '')}</span>
      </div>
      
      <p id="tagline" class="tagline">${escapeHTML(data.tagline || '')}</p>
      
      <div class="video-container">
        <div class="video-wrapper">
          <img id="video-thumb" class="video-thumb" src="${thumbUrl}" alt="Video thumbnail" />
          <div class="play-button">
            <div class="play-icon"></div>
          </div>
        </div>
      </div>
      
      <p id="description" class="description">${escapeHTML(data.description || '')}</p>
      
      <div class="cta-buttons">
        <a id="cta-primary" href="${escapeHTML(data.ctaPrimaryUrl || '#')}" class="btn btn-primary">
          ${escapeHTML(data.ctaPrimaryText || '')}
        </a>
        <a id="cta-secondary" href="${escapeHTML(data.ctaSecondaryUrl || '#')}" class="btn btn-secondary">
          ${escapeHTML(data.ctaSecondaryText || '')}
        </a>
      </div>
    </div>
  </section>
</body>
</html>`
}

function escapeHTML(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

// GET: Render preview with query params or defaults
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  
  // Parse content from query params
  const content: HeroContent = {}
  
  if (searchParams.has('headline')) content.headline = searchParams.get('headline') || ''
  if (searchParams.has('tagline')) content.tagline = searchParams.get('tagline') || ''
  if (searchParams.has('description')) content.description = searchParams.get('description') || ''
  if (searchParams.has('videoId')) content.videoId = searchParams.get('videoId') || ''
  if (searchParams.has('credentialPrimary')) content.credentialPrimary = searchParams.get('credentialPrimary') || ''
  if (searchParams.has('credentialSecondary')) content.credentialSecondary = searchParams.get('credentialSecondary') || ''
  if (searchParams.has('ctaPrimaryText') || searchParams.has('ctaPrimaryUrl')) {
    content.ctaPrimary = {
      text: searchParams.get('ctaPrimaryText') || '',
      url: searchParams.get('ctaPrimaryUrl') || '',
    }
  }
  if (searchParams.has('ctaSecondaryText') || searchParams.has('ctaSecondaryUrl')) {
    content.ctaSecondary = {
      text: searchParams.get('ctaSecondaryText') || '',
      url: searchParams.get('ctaSecondaryUrl') || '',
    }
  }
  
  const html = renderHeroHTML(content)
  
  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'no-store',
    },
  })
}

// POST: Render preview with JSON body
export async function POST(request: NextRequest) {
  try {
    const content = await request.json() as HeroContent
    const html = renderHeroHTML(content)
    
    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'no-store',
      },
    })
  } catch {
    return new NextResponse('Invalid request', { status: 400 })
  }
}

