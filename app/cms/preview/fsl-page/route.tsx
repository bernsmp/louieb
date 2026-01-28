/**
 * Live Preview Route for FSL (Fractional Sales Leader) Page
 *
 * This route renders all 5 sections of the FSL page with provided content data
 * for the CMS live preview feature.
 */

import { NextRequest, NextResponse } from 'next/server'

interface VideoItem {
  videoId: string
  title: string
  description?: string
}

interface FAQItem {
  question: string
  answer: string
}

interface FSLPageContent {
  headline?: string
  tagline?: string
  introHook?: string
  introParagraph1?: string
  introParagraph2?: string
  introParagraph3?: string
  introParagraph4?: string
  playlistId?: string
  videos?: VideoItem[]
  faqs?: FAQItem[]
  finalCtaHeadline?: string
  finalCtaButtonText?: string
  finalCtaDescription?: string
  videosSectionHeadline?: string
  videosSectionSubheadline?: string
  videosPlaylistButtonText?: string
  faqSectionHeadline?: string
  faqSectionSubheadline?: string
  introCtaNote?: string
  finalCtaSecondaryText?: string
}

// Defaults (same as lib/cms.ts)
const defaults: FSLPageContent = {
  headline: 'Fractional Sales Leader',
  tagline: 'Experienced sales leadership. Fraction of the cost.',
  introHook: "You built this company from nothing. Now you're stuck running sales calls when you should be running the business.",
  introParagraph1: "I get it. The jump from $1M to $10M in revenue is brutal...",
  introParagraph2: "A Fractional Sales Leader is the middle path...",
  introParagraph3: "What I do: build your sales playbook, hire your first reps...",
  introParagraph4: "Below, I answer the five questions every founder asks...",
  playlistId: 'PL7HfhnqHyzRn0MoquOVlTgYAJPHN4_6wu',
  videos: [
    { videoId: '86r0G5LfZ2s', title: 'What is Fractional Sales Leadership?', description: 'The basics.' },
    { videoId: 'apXilJj2924', title: "Here's What a Fractional Sales Leader Does", description: 'The day-to-day.' },
    { videoId: 'wnXLkMoYMDY', title: 'Questions to Ask a Fractional Sales Leader', description: 'The interview.' },
    { videoId: 'TObs-tUQG7E', title: 'Fractional Sales Leader vs Sales VP', description: 'The comparison.' },
    { videoId: 'COBBnVv8ZYE', title: 'Is a Fractional Sales Leader Right for Your Business?', description: 'The decision.' },
  ],
  faqs: [
    { question: 'What is a Fractional Sales Leader?', answer: 'A Fractional Sales Leader is an experienced sales executive who works with your company part-time...' },
    { question: 'How much does a Fractional Sales Leader cost?', answer: 'Fractional Sales Leaders typically cost 30-50% of what you\'d pay a full-time VP of Sales...' },
    { question: 'When should I hire a Fractional Sales Leader?', answer: 'The sweet spot is $1M-$10M ARR...' },
  ],
  finalCtaHeadline: 'Ready to Stop Being the Bottleneck?',
  finalCtaButtonText: 'Schedule a 30-Minute Call',
  finalCtaDescription: "Let's talk about your sales challenges. No pitch, no pressure...",
  videosSectionHeadline: 'Everything You Need to Know',
  videosSectionSubheadline: 'Five videos that answer the questions every founder asks before hiring a Fractional Sales Leader.',
  videosPlaylistButtonText: 'Watch Full Playlist on YouTube',
  faqSectionHeadline: 'Frequently Asked Questions',
  faqSectionSubheadline: 'Straight answers to the questions I hear most often.',
  introCtaNote: 'No pitch. Just a conversation about your sales challenges.',
  finalCtaSecondaryText: 'Learn More About Me',
}

function renderFSLPageHTML(content: FSLPageContent): string {
  const data = {
    headline: content.headline || defaults.headline,
    tagline: content.tagline || defaults.tagline,
    introHook: content.introHook || defaults.introHook,
    introParagraph1: content.introParagraph1 || defaults.introParagraph1,
    introParagraph2: content.introParagraph2 || defaults.introParagraph2,
    introParagraph3: content.introParagraph3 || defaults.introParagraph3,
    introParagraph4: content.introParagraph4 || defaults.introParagraph4,
    playlistId: content.playlistId || defaults.playlistId,
    videos: content.videos?.length ? content.videos : defaults.videos,
    faqs: content.faqs?.length ? content.faqs : defaults.faqs,
    finalCtaHeadline: content.finalCtaHeadline || defaults.finalCtaHeadline,
    finalCtaButtonText: content.finalCtaButtonText || defaults.finalCtaButtonText,
    finalCtaDescription: content.finalCtaDescription || defaults.finalCtaDescription,
    videosSectionHeadline: content.videosSectionHeadline || defaults.videosSectionHeadline,
    videosSectionSubheadline: content.videosSectionSubheadline || defaults.videosSectionSubheadline,
    videosPlaylistButtonText: content.videosPlaylistButtonText || defaults.videosPlaylistButtonText,
    faqSectionHeadline: content.faqSectionHeadline || defaults.faqSectionHeadline,
    faqSectionSubheadline: content.faqSectionSubheadline || defaults.faqSectionSubheadline,
    introCtaNote: content.introCtaNote || defaults.introCtaNote,
    finalCtaSecondaryText: content.finalCtaSecondaryText || defaults.finalCtaSecondaryText,
  }

  // Render video thumbnails (no actual embeds for performance)
  const videosHTML = (data.videos || []).map((video, index) => `
    <div class="video-card">
      <div class="video-thumb-wrapper">
        <img
          src="https://img.youtube.com/vi/${escapeHTML(video.videoId)}/mqdefault.jpg"
          alt="${escapeHTML(video.title)}"
          class="video-thumb"
        />
        <div class="play-overlay">
          <div class="play-icon"></div>
        </div>
      </div>
      <div class="video-info">
        <span class="video-number">${index + 1} of ${(data.videos || []).length}</span>
        <h3 class="video-title">${escapeHTML(video.title)}</h3>
        ${video.description ? `<p class="video-desc">${escapeHTML(video.description)}</p>` : ''}
      </div>
    </div>
  `).join('')

  // Render FAQs
  const faqsHTML = (data.faqs || []).map((faq) => `
    <div class="faq-item">
      <h3 class="faq-question">${escapeHTML(faq.question)}</h3>
      <p class="faq-answer">${escapeHTML(faq.answer)}</p>
    </div>
  `).join('')

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FSL Page Preview</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: white;
      color: #171717;
      line-height: 1.6;
    }

    /* Hero Section */
    .hero {
      background: linear-gradient(to bottom right, #171717, #262626, #171717);
      color: white;
      padding: 4rem 1.5rem;
      text-align: center;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background: rgba(255,255,255,0.05);
      border: 1px solid #525252;
      border-radius: 9999px;
      font-size: 0.875rem;
      margin-bottom: 1.5rem;
    }

    .hero-badge-divider {
      color: #737373;
    }

    .hero-badge-secondary {
      color: #a3a3a3;
    }

    .hero h1 {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 0.75rem;
    }

    .hero-tagline {
      font-size: 1.25rem;
      color: #d4d4d4;
    }

    /* Videos Section */
    .videos-section {
      background: #fafafa;
      padding: 3rem 1.5rem;
    }

    .section-header {
      text-align: center;
      margin-bottom: 2.5rem;
    }

    .section-title {
      font-size: 1.875rem;
      font-weight: 700;
      margin-bottom: 0.75rem;
    }

    .section-subtitle {
      font-size: 1rem;
      color: #525252;
      max-width: 600px;
      margin: 0 auto;
    }

    .videos-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 1rem;
      max-width: 1000px;
      margin: 0 auto;
    }

    .video-card {
      background: white;
      border-radius: 1rem;
      border: 2px solid #e5e5e5;
      overflow: hidden;
    }

    .video-thumb-wrapper {
      position: relative;
      aspect-ratio: 16/9;
      background: #171717;
    }

    .video-thumb {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .play-overlay {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.3);
    }

    .play-icon {
      width: 40px;
      height: 40px;
      background: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .play-icon::after {
      content: '';
      width: 0;
      height: 0;
      border-left: 12px solid #171717;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      margin-left: 3px;
    }

    .video-info {
      padding: 0.75rem;
    }

    .video-number {
      font-size: 0.75rem;
      font-weight: 600;
      color: #0966c2;
    }

    .video-title {
      font-size: 0.875rem;
      font-weight: 700;
      margin-top: 0.25rem;
    }

    .video-desc {
      font-size: 0.75rem;
      color: #525252;
      margin-top: 0.5rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .playlist-btn {
      display: block;
      max-width: 300px;
      margin: 2rem auto 0;
      padding: 1rem 2rem;
      border: 2px solid #0966c2;
      border-radius: 0.5rem;
      background: white;
      color: #0966c2;
      font-size: 1rem;
      font-weight: 600;
      text-align: center;
      text-decoration: none;
    }

    /* Intro Section */
    .intro-section {
      padding: 3rem 1.5rem;
      max-width: 800px;
      margin: 0 auto;
    }

    .intro-hook {
      font-size: 1.25rem;
      color: #404040;
      margin-bottom: 1.5rem;
    }

    .intro-para {
      font-size: 1rem;
      color: #525252;
      margin-bottom: 1rem;
    }

    .intro-cta {
      text-align: center;
      margin-top: 2rem;
    }

    .btn-primary {
      display: inline-block;
      padding: 1rem 2rem;
      background: #0966c2;
      color: white;
      font-size: 1rem;
      font-weight: 600;
      border-radius: 0.5rem;
      text-decoration: none;
    }

    .intro-cta-note {
      font-size: 0.875rem;
      color: #737373;
      margin-top: 0.75rem;
    }

    /* FAQ Section */
    .faq-section {
      padding: 3rem 1.5rem;
      max-width: 800px;
      margin: 0 auto;
    }

    .faq-list {
      margin-top: 2rem;
    }

    .faq-item {
      background: white;
      border: 1px solid #e5e5e5;
      border-radius: 0.75rem;
      padding: 1.25rem;
      margin-bottom: 1rem;
    }

    .faq-question {
      font-size: 1.125rem;
      font-weight: 700;
      margin-bottom: 0.75rem;
    }

    .faq-answer {
      font-size: 1rem;
      color: #525252;
    }

    /* Final CTA Section */
    .final-cta {
      background: linear-gradient(to bottom right, #171717, #262626, #171717);
      color: white;
      padding: 3rem 1.5rem;
      text-align: center;
    }

    .final-cta h2 {
      font-size: 1.875rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .final-cta-desc {
      font-size: 1.125rem;
      color: #d4d4d4;
      max-width: 600px;
      margin: 0 auto 2rem;
    }

    .final-cta-buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }

    .btn-white {
      display: inline-block;
      padding: 1rem 2rem;
      background: white;
      color: #171717;
      font-size: 1rem;
      font-weight: 600;
      border-radius: 0.5rem;
      text-decoration: none;
    }

    .btn-outline {
      display: inline-block;
      padding: 1rem 2rem;
      background: transparent;
      color: white;
      font-size: 1rem;
      font-weight: 600;
      border: 2px solid white;
      border-radius: 0.5rem;
      text-decoration: none;
    }

    /* Responsive */
    @media (max-width: 640px) {
      .hero h1 {
        font-size: 2rem;
      }

      .videos-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .final-cta-buttons {
        flex-direction: column;
        align-items: center;
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
      // Hero section
      if (content.headline !== undefined) {
        const el = document.getElementById('headline');
        if (el) el.textContent = content.headline || 'Fractional Sales Leader';
      }
      if (content.tagline !== undefined) {
        const el = document.getElementById('tagline');
        if (el) el.textContent = content.tagline || 'Experienced sales leadership. Fraction of the cost.';
      }

      // Intro section
      if (content.introHook !== undefined) {
        const el = document.getElementById('introHook');
        if (el) el.textContent = content.introHook || '';
      }
      if (content.introParagraph1 !== undefined) {
        const el = document.getElementById('introParagraph1');
        if (el) el.textContent = content.introParagraph1 || '';
      }
      if (content.introParagraph2 !== undefined) {
        const el = document.getElementById('introParagraph2');
        if (el) el.textContent = content.introParagraph2 || '';
      }
      if (content.introParagraph3 !== undefined) {
        const el = document.getElementById('introParagraph3');
        if (el) el.textContent = content.introParagraph3 || '';
      }
      if (content.introParagraph4 !== undefined) {
        const el = document.getElementById('introParagraph4');
        if (el) el.textContent = content.introParagraph4 || '';
      }
      if (content.introCtaNote !== undefined) {
        const el = document.getElementById('introCtaNote');
        if (el) el.textContent = content.introCtaNote || '';
      }

      // Final CTA section
      if (content.finalCtaHeadline !== undefined) {
        const el = document.getElementById('finalCtaHeadline');
        if (el) el.textContent = content.finalCtaHeadline || 'Ready to Stop Being the Bottleneck?';
      }
      if (content.finalCtaDescription !== undefined) {
        const el = document.getElementById('finalCtaDescription');
        if (el) el.textContent = content.finalCtaDescription || '';
      }
      if (content.finalCtaButtonText !== undefined) {
        const el = document.getElementById('finalCtaButtonText');
        if (el) el.textContent = content.finalCtaButtonText || 'Schedule a 30-Minute Call';
        const el2 = document.getElementById('introCtaButton');
        if (el2) el2.textContent = content.finalCtaButtonText || 'Schedule a 30-Minute Call';
      }
      if (content.finalCtaSecondaryText !== undefined) {
        const el = document.getElementById('finalCtaSecondaryText');
        if (el) el.textContent = content.finalCtaSecondaryText || 'Learn More About Me';
      }

      // Videos section titles
      if (content.videosSectionHeadline !== undefined) {
        const el = document.getElementById('videosSectionHeadline');
        if (el) el.textContent = content.videosSectionHeadline || 'Everything You Need to Know';
      }
      if (content.videosSectionSubheadline !== undefined) {
        const el = document.getElementById('videosSectionSubheadline');
        if (el) el.textContent = content.videosSectionSubheadline || '';
      }
      if (content.videosPlaylistButtonText !== undefined) {
        const el = document.getElementById('videosPlaylistButtonText');
        if (el) el.textContent = content.videosPlaylistButtonText || 'Watch Full Playlist on YouTube';
      }

      // FAQ section titles
      if (content.faqSectionHeadline !== undefined) {
        const el = document.getElementById('faqSectionHeadline');
        if (el) el.textContent = content.faqSectionHeadline || 'Frequently Asked Questions';
      }
      if (content.faqSectionSubheadline !== undefined) {
        const el = document.getElementById('faqSectionSubheadline');
        if (el) el.textContent = content.faqSectionSubheadline || '';
      }
    }
  </script>
</head>
<body>
  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-badge">
      <span>LinkedIn Top Voice</span>
      <span class="hero-badge-divider">|</span>
      <span class="hero-badge-secondary">9+ Years as Fractional Sales Leader</span>
    </div>
    <h1 id="headline">${escapeHTML(data.headline || '')}</h1>
    <p id="tagline" class="hero-tagline">${escapeHTML(data.tagline || '')}</p>
  </section>

  <!-- Videos Section -->
  <section class="videos-section">
    <div class="section-header">
      <h2 id="videosSectionHeadline" class="section-title">${escapeHTML(data.videosSectionHeadline || '')}</h2>
      <p id="videosSectionSubheadline" class="section-subtitle">${escapeHTML(data.videosSectionSubheadline || '')}</p>
    </div>
    <div class="videos-grid">
      ${videosHTML}
    </div>
    <a href="#" class="playlist-btn">
      <span id="videosPlaylistButtonText">${escapeHTML(data.videosPlaylistButtonText || '')}</span>
    </a>
  </section>

  <!-- Intro Section -->
  <section class="intro-section">
    <p id="introHook" class="intro-hook">${escapeHTML(data.introHook || '')}</p>
    <p id="introParagraph1" class="intro-para">${escapeHTML(data.introParagraph1 || '')}</p>
    <p id="introParagraph2" class="intro-para">${escapeHTML(data.introParagraph2 || '')}</p>
    <p id="introParagraph3" class="intro-para">${escapeHTML(data.introParagraph3 || '')}</p>
    <p id="introParagraph4" class="intro-para">${escapeHTML(data.introParagraph4 || '')}</p>
    <div class="intro-cta">
      <a href="#" class="btn-primary" id="introCtaButton">${escapeHTML(data.finalCtaButtonText || '')}</a>
      <p id="introCtaNote" class="intro-cta-note">${escapeHTML(data.introCtaNote || '')}</p>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="faq-section">
    <div class="section-header">
      <h2 id="faqSectionHeadline" class="section-title">${escapeHTML(data.faqSectionHeadline || '')}</h2>
      <p id="faqSectionSubheadline" class="section-subtitle">${escapeHTML(data.faqSectionSubheadline || '')}</p>
    </div>
    <div class="faq-list">
      ${faqsHTML}
    </div>
  </section>

  <!-- Final CTA Section -->
  <section class="final-cta">
    <h2 id="finalCtaHeadline">${escapeHTML(data.finalCtaHeadline || '')}</h2>
    <p id="finalCtaDescription" class="final-cta-desc">${escapeHTML(data.finalCtaDescription || '')}</p>
    <div class="final-cta-buttons">
      <a href="#" class="btn-white">
        <span id="finalCtaButtonText">${escapeHTML(data.finalCtaButtonText || '')}</span>
      </a>
      <a href="#" class="btn-outline">
        <span id="finalCtaSecondaryText">${escapeHTML(data.finalCtaSecondaryText || '')}</span>
      </a>
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

// GET: Render preview with defaults
export async function GET() {
  const html = renderFSLPageHTML({})

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
    const content = await request.json() as FSLPageContent
    const html = renderFSLPageHTML(content)

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
