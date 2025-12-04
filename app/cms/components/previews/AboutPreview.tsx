'use client'

interface AboutPreviewProps {
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

export function AboutPreview({
  headline = 'Fractional Sales Leadership',
  headlineAccent = 'for $1M–$10M ARR Companies',
  paragraph1 = 'With over 9 years of experience as a Fractional Sales Leader...',
  paragraph2 = 'My focus is on delivering systematic frameworks...',
  paragraph3 = 'I bring extensive expertise in sales leadership...',
  calloutText = 'With a proven approach, I collaborate with businesses...',
  stat1Value = '9+',
  stat1Label = 'Years Experience',
  stat2Value = '$1M–$10M',
  stat2Label = 'ARR Companies',
  stat3Value = 'INC 500',
  stat3Label = 'Scaled from Zero',
}: AboutPreviewProps) {
  return (
    <div className="preview-panel">
      <div className="preview-panel__header">
        <span className="preview-panel__badge">Live Preview</span>
        <span className="preview-panel__hint">Updates as you type</span>
      </div>
      
      <div className="preview-about">
        <div className="preview-about__bg">
          <h2 className="preview-about__headline">
            {headline || 'Headline'}{' '}
            <span className="preview-about__accent">{headlineAccent || 'Accent'}</span>
          </h2>
          
          <p className="preview-about__text">
            {paragraph1 || 'First paragraph...'}
          </p>
          
          <p className="preview-about__text">
            {paragraph2 || 'Second paragraph...'}
          </p>
          
          <p className="preview-about__text">
            {paragraph3 || 'Third paragraph...'}
          </p>
          
          {calloutText && (
            <div className="preview-about__callout">
              {calloutText}
            </div>
          )}
          
          <div className="preview-about__stats">
            <div className="preview-about__stat">
              <div className="preview-about__stat-value">{stat1Value || '—'}</div>
              <div className="preview-about__stat-label">{stat1Label || 'Stat 1'}</div>
            </div>
            <div className="preview-about__stat">
              <div className="preview-about__stat-value">{stat2Value || '—'}</div>
              <div className="preview-about__stat-label">{stat2Label || 'Stat 2'}</div>
            </div>
            <div className="preview-about__stat">
              <div className="preview-about__stat-value">{stat3Value || '—'}</div>
              <div className="preview-about__stat-label">{stat3Label || 'Stat 3'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

