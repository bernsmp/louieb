'use client'

interface HeroPreviewProps {
  headline?: string
  tagline?: string
  description?: string
  videoId?: string
  ctaPrimary?: { text?: string; url?: string }
  ctaSecondary?: { text?: string; url?: string }
}

export function HeroPreview({
  headline = 'Fractional Sales Leader',
  tagline = 'Less Spend. More Sales.',
  description = "I've scaled from zero to INC 500, so I know the grind.",
  videoId = 'fCVKpcpD8tA',
  ctaPrimary = { text: 'Learn How It Works', url: '#process' },
  ctaSecondary = { text: 'Schedule a Discussion', url: '#' },
}: HeroPreviewProps) {
  return (
    <div className="preview-panel">
      <div className="preview-panel__header">
        <span className="preview-panel__badge">Live Preview</span>
        <span className="preview-panel__hint">Updates as you type</span>
      </div>
      
      <div className="preview-hero">
        {/* Background gradient mimicking the actual site */}
        <div className="preview-hero__bg">
          <div className="preview-hero__content">
            {/* Main Heading */}
            <h1 className="preview-hero__headline">
              {headline || 'Headline goes here'}
            </h1>
            
            {/* Credential Badge */}
            <div className="preview-hero__badge-row">
              <span className="preview-hero__credential">LinkedIn Top Voice</span>
              <span className="preview-hero__divider">|</span>
              <span className="preview-hero__credential-sub">50+ Years Sales Experience</span>
            </div>
            
            {/* Tagline */}
            <p className="preview-hero__tagline">
              {tagline || 'Tagline goes here'}
            </p>
            
            {/* Video Preview */}
            {videoId && (
              <div className="preview-hero__video">
                <div className="preview-hero__video-inner">
                  <img 
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="Video thumbnail"
                    className="preview-hero__video-thumb"
                  />
                  <div className="preview-hero__play-btn">▶</div>
                </div>
              </div>
            )}
            
            {/* Description */}
            <p className="preview-hero__description">
              {description || 'Description text goes here...'}
            </p>
            
            {/* CTA Buttons */}
            <div className="preview-hero__buttons">
              <span className="preview-hero__btn preview-hero__btn--primary">
                {ctaPrimary?.text || 'Primary CTA'}
              </span>
              <span className="preview-hero__btn preview-hero__btn--secondary">
                {ctaSecondary?.text || 'Secondary CTA'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

