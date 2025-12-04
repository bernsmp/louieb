/**
 * Live Preview Route for Videos Page
 * Fetches real data from the API and renders a preview
 */

import { NextResponse } from 'next/server'
import { getVideosPageData } from '@/lib/cms'

interface VideosContent {
  headline?: string
  subheadline?: string
  playlistId?: string
  featuredShortsHeadline?: string
  playlistHeadline?: string
  watchOnYoutubeText?: string
  watchMoreButtonText?: string
}

function escapeHTML(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

async function renderVideosHTML(overrides: VideosContent = {}): Promise<string> {
  // Fetch real data from CMS
  const pageData = await getVideosPageData()
  
  const data = {
    headline: overrides.headline ?? pageData.headline,
    subheadline: overrides.subheadline ?? pageData.subheadline,
    playlistId: overrides.playlistId ?? pageData.playlistId,
    featuredShortsHeadline: overrides.featuredShortsHeadline ?? pageData.featuredShortsHeadline,
    playlistHeadline: overrides.playlistHeadline ?? pageData.playlistHeadline,
    watchOnYoutubeText: overrides.watchOnYoutubeText ?? pageData.watchOnYoutubeText,
    watchMoreButtonText: overrides.watchMoreButtonText ?? pageData.watchMoreButtonText,
    featuredVideos: pageData.featuredVideos,
  }

  const videosHtml = data.featuredVideos.map(video => `
    <div class="video-card">
      <div class="video-thumb">
        <img src="https://img.youtube.com/vi/${escapeHTML(video.videoId)}/mqdefault.jpg" alt="${escapeHTML(video.title)}" />
      </div>
      <p class="video-title">${escapeHTML(video.title)}</p>
      <p class="video-desc">${escapeHTML(video.description || '')}</p>
      <a class="watch-link" href="#">${escapeHTML(data.watchOnYoutubeText)}</a>
    </div>
  `).join('')

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Videos Preview</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: 'Outfit', sans-serif;
      background: #fafaf9;
      color: #1f2937;
    }
    
    .page {
      padding: 2rem 1rem;
      max-width: 100%;
    }
    
    .header {
      text-align: center;
      margin-bottom: 2rem;
    }
    
    .headline {
      font-family: 'Playfair Display', serif;
      font-size: 2rem;
      font-weight: 700;
      color: #1e3a8a;
      margin-bottom: 0.5rem;
    }
    
    .subheadline {
      font-size: 0.9rem;
      color: #6b7280;
      max-width: 400px;
      margin: 0 auto;
    }
    
    .section-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 1rem;
    }
    
    .video-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.75rem;
      margin-bottom: 1.5rem;
    }
    
    .video-card {
      border: 2px solid #0966c2;
      border-radius: 0.75rem;
      padding: 0.5rem;
      background: white;
    }
    
    .video-thumb {
      aspect-ratio: 16/9;
      background: #e5e7eb;
      border-radius: 0.5rem;
      overflow: hidden;
    }
    
    .video-thumb img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .video-title {
      font-weight: 600;
      margin-top: 0.5rem;
      font-size: 0.75rem;
      line-height: 1.3;
    }
    
    .video-desc {
      font-size: 0.65rem;
      color: #6b7280;
      margin-top: 0.25rem;
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    .watch-link {
      color: #0966c2;
      font-size: 0.65rem;
      text-decoration: none;
      margin-top: 0.25rem;
      display: inline-block;
    }
    
    .playlist-section {
      border: 2px solid #0966c2;
      border-radius: 0.75rem;
      padding: 1rem;
      background: white;
      margin-bottom: 1.5rem;
    }
    
    .playlist-embed {
      aspect-ratio: 16/9;
      background: #1f2937;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 0.75rem;
    }
    
    .cta-section {
      text-align: center;
    }
    
    .cta-button {
      display: inline-block;
      background: #0966c2;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      font-weight: 600;
      text-decoration: none;
      font-size: 0.875rem;
    }
  </style>
  <script>
    window.addEventListener('message', function(event) {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'preview-update') {
          updateContent(data.content);
        }
      } catch (e) {}
    });
    
    function updateContent(content) {
      const headline = document.getElementById('headline');
      if (headline && content.headline !== undefined) {
        headline.textContent = content.headline || 'Sales Videos';
      }
      
      const subheadline = document.getElementById('subheadline');
      if (subheadline && content.subheadline !== undefined) {
        subheadline.textContent = content.subheadline || '';
      }
      
      const shortsHeadline = document.getElementById('shorts-headline');
      if (shortsHeadline && content.featuredShortsHeadline !== undefined) {
        shortsHeadline.textContent = content.featuredShortsHeadline || 'Featured Shorts';
      }
      
      const playlistHeadline = document.getElementById('playlist-headline');
      if (playlistHeadline && content.playlistHeadline !== undefined) {
        playlistHeadline.textContent = content.playlistHeadline || 'Playlist';
      }
      
      const watchLinks = document.querySelectorAll('.watch-link');
      if (content.watchOnYoutubeText !== undefined) {
        watchLinks.forEach(link => {
          link.textContent = content.watchOnYoutubeText || 'Watch on YouTube →';
        });
      }
      
      const ctaButton = document.getElementById('cta-button');
      if (ctaButton && content.watchMoreButtonText !== undefined) {
        ctaButton.textContent = content.watchMoreButtonText || 'Watch More';
      }
    }
  </script>
</head>
<body>
  <div class="page">
    <div class="header">
      <h1 id="headline" class="headline">${escapeHTML(data.headline)}</h1>
      <p id="subheadline" class="subheadline">${escapeHTML(data.subheadline)}</p>
    </div>
    
    <h2 id="shorts-headline" class="section-title">${escapeHTML(data.featuredShortsHeadline)}</h2>
    <div class="video-grid">
      ${videosHtml}
    </div>
    
    <div class="playlist-section">
      <h2 id="playlist-headline" class="section-title">${escapeHTML(data.playlistHeadline)}</h2>
      <div class="playlist-embed">
        Playlist: ${escapeHTML(data.playlistId)}
      </div>
    </div>
    
    <div class="cta-section">
      <a id="cta-button" href="#" class="cta-button">${escapeHTML(data.watchMoreButtonText)}</a>
    </div>
  </div>
</body>
</html>`
}

export async function GET() {
  const html = await renderVideosHTML()
  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html', 'Cache-Control': 'no-store' },
  })
}
