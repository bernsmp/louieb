'use client'

interface ValuePropPreviewProps {
  headline?: string
  subheadline?: string
  description?: string
  ctaText?: string
}

export function ValuePropPreview({
  headline = "It's not how much you sell.",
  subheadline = "It's how much you take home.",
  description = "Every dollar you spend on inefficient sales processes is a dollar you don't take home. Let's fix that.",
  ctaText = "Let's Get Going!",
}: ValuePropPreviewProps) {
  return (
    <div className="preview-panel">
      <div className="preview-panel__header">
        <span className="preview-panel__badge">Live Preview</span>
        <span className="preview-panel__hint">Updates as you type</span>
      </div>
      
      <div className="preview-value-prop">
        <div className="preview-value-prop__bg">
          <h2 className="preview-value-prop__headline">
            {headline || 'Headline goes here'}
          </h2>
          <p className="preview-value-prop__subheadline">
            {subheadline || 'Subheadline goes here'}
          </p>
          <p className="preview-value-prop__description">
            {description || 'Description text goes here...'}
          </p>
          <span className="preview-value-prop__cta">
            {ctaText || 'Call to Action'}
          </span>
        </div>
      </div>
    </div>
  )
}

