'use client'

interface SEOPreviewCardProps {
  title: string
  description: string
  url: string
  image?: string
}

export function SEOPreviewCard({ title, description, url, image }: SEOPreviewCardProps) {
  // Character limits
  const titleLimit = 60
  const descLimit = 160

  // Truncate for preview display
  const displayTitle = title.length > titleLimit ? title.slice(0, titleLimit - 3) + '...' : title
  const displayDesc = description.length > descLimit ? description.slice(0, descLimit - 3) + '...' : description

  // Extract domain from URL for display
  const displayUrl = url.replace(/^https?:\/\//, '').replace(/\/$/, '')

  return (
    <div className="seo-preview-card">
      <div className="seo-preview-card__header">
        <span className="seo-preview-card__label">SEO Preview</span>
        <div className="seo-preview-card__counts">
          <span className={title.length > titleLimit ? 'over-limit' : ''}>
            Title: {title.length}/{titleLimit}
          </span>
          <span className={description.length > descLimit ? 'over-limit' : ''}>
            Desc: {description.length}/{descLimit}
          </span>
        </div>
      </div>

      {/* Google Search Result Preview */}
      <div className="seo-preview-google">
        <div className="seo-preview-google__header">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <span>Google Search</span>
        </div>
        <div className="seo-preview-google__result">
          <div className="seo-preview-google__breadcrumb">
            <span className="seo-preview-google__favicon">
              <svg viewBox="0 0 16 16" width="14" height="14">
                <circle cx="8" cy="8" r="7" fill="#0966c2"/>
                <text x="8" y="11" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">L</text>
              </svg>
            </span>
            <span className="seo-preview-google__url">{displayUrl}</span>
          </div>
          <h3 className="seo-preview-google__title">{displayTitle || 'Page Title'}</h3>
          <p className="seo-preview-google__desc">{displayDesc || 'Meta description will appear here...'}</p>
        </div>
      </div>

      {/* Social Share Preview (Twitter/LinkedIn/Facebook) */}
      <div className="seo-preview-social">
        <div className="seo-preview-social__header">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
            <polyline points="16 6 12 2 8 6"/>
            <line x1="12" y1="2" x2="12" y2="15"/>
          </svg>
          <span>Social Share</span>
        </div>
        <div className="seo-preview-social__card">
          {image ? (
            <div className="seo-preview-social__image">
              <img src={image} alt="Social preview" />
            </div>
          ) : (
            <div className="seo-preview-social__image seo-preview-social__image--empty">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <span>No image set</span>
            </div>
          )}
          <div className="seo-preview-social__content">
            <span className="seo-preview-social__domain">{displayUrl}</span>
            <h4 className="seo-preview-social__title">{displayTitle || 'Page Title'}</h4>
            <p className="seo-preview-social__desc">{displayDesc || 'Meta description...'}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .seo-preview-card {
          background: #171717;
          border: 1px solid #262626;
          border-radius: 0.75rem;
          padding: 1rem;
          margin-top: 1.5rem;
        }

        .seo-preview-card__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .seo-preview-card__label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #a3a3a3;
        }

        .seo-preview-card__counts {
          display: flex;
          gap: 1rem;
          font-size: 0.75rem;
          color: #737373;
        }

        .seo-preview-card__counts .over-limit {
          color: #ef4444;
        }

        /* Google Preview */
        .seo-preview-google {
          margin-bottom: 1rem;
        }

        .seo-preview-google__header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: #737373;
          margin-bottom: 0.5rem;
        }

        .seo-preview-google__result {
          background: white;
          border-radius: 0.5rem;
          padding: 1rem;
        }

        .seo-preview-google__breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.25rem;
        }

        .seo-preview-google__favicon {
          display: flex;
          align-items: center;
        }

        .seo-preview-google__url {
          font-size: 0.875rem;
          color: #202124;
        }

        .seo-preview-google__title {
          font-size: 1.25rem;
          color: #1a0dab;
          font-weight: 400;
          margin: 0.25rem 0;
          line-height: 1.3;
        }

        .seo-preview-google__desc {
          font-size: 0.875rem;
          color: #4d5156;
          line-height: 1.5;
          margin: 0;
        }

        /* Social Preview */
        .seo-preview-social__header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: #737373;
          margin-bottom: 0.5rem;
        }

        .seo-preview-social__card {
          background: #262626;
          border-radius: 0.5rem;
          overflow: hidden;
        }

        .seo-preview-social__image {
          aspect-ratio: 1.91 / 1;
          background: #171717;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .seo-preview-social__image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .seo-preview-social__image--empty {
          flex-direction: column;
          gap: 0.5rem;
          color: #525252;
          font-size: 0.75rem;
        }

        .seo-preview-social__content {
          padding: 0.75rem 1rem;
        }

        .seo-preview-social__domain {
          font-size: 0.75rem;
          color: #737373;
          text-transform: uppercase;
        }

        .seo-preview-social__title {
          font-size: 1rem;
          color: #f5f5f5;
          font-weight: 600;
          margin: 0.25rem 0;
          line-height: 1.3;
        }

        .seo-preview-social__desc {
          font-size: 0.875rem;
          color: #a3a3a3;
          line-height: 1.4;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}
