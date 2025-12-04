'use client'

interface SectionPreviewProps {
  headline?: string
  subheadline?: string
  description?: string
  children?: React.ReactNode
}

export function SectionPreview({
  headline,
  subheadline,
  description,
  children,
}: SectionPreviewProps) {
  return (
    <div className="preview-panel">
      <div className="preview-panel__header">
        <span className="preview-panel__badge">Live Preview</span>
        <span className="preview-panel__hint">Updates as you type</span>
      </div>
      
      <div className="preview-section">
        <div className="preview-section__bg">
          {headline && (
            <h2 className="preview-section__headline">
              {headline}
            </h2>
          )}
          {subheadline && (
            <p className="preview-section__subheadline">
              {subheadline}
            </p>
          )}
          {description && (
            <p className="preview-about__text" style={{ textAlign: 'center', marginTop: '1rem' }}>
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  )
}

