import { redirect } from 'next/navigation'
import { getUser } from '@/lib/auth'
import Link from 'next/link'

export default async function ToolsAdmin() {
  const user = await getUser()
  
  if (!user) {
    redirect('/cms/login')
  }

  return (
    <div className="edit-page">
      <div className="edit-page__header">
        <div>
          <Link href="/cms" className="edit-page__back">
            ← Back to Dashboard
          </Link>
          <h1 className="edit-page__title">Tools Pages</h1>
          <p className="edit-page__description">
            Edit the content on the tools pages.
          </p>
        </div>
      </div>

      <div className="dashboard__grid">
        <Link
          href="/cms/tools/landing"
          className="dashboard-card"
          style={{ textDecoration: 'none' }}
        >
          <h3 className="dashboard-card__title" style={{ marginBottom: '0.5rem' }}>
            Tools Landing Page
          </h3>
          <p className="dashboard-card__description" style={{ marginBottom: 0 }}>
            The main /tools page header and tool listings.
          </p>
        </Link>
        <Link
          href="/cms/tools/roi-calculator"
          className="dashboard-card"
          style={{ textDecoration: 'none' }}
        >
          <h3 className="dashboard-card__title" style={{ marginBottom: '0.5rem' }}>
            ROI Calculator Page
          </h3>
          <p className="dashboard-card__description" style={{ marginBottom: 0 }}>
            The /tools/roi-calculator page header.
          </p>
        </Link>
        <Link
          href="/cms/tools/roi-calculator-text"
          className="dashboard-card"
          style={{ textDecoration: 'none' }}
        >
          <h3 className="dashboard-card__title" style={{ marginBottom: '0.5rem' }}>
            ROI Calculator Text
          </h3>
          <p className="dashboard-card__description" style={{ marginBottom: 0 }}>
            Labels and descriptions in the calculator itself.
          </p>
        </Link>
      </div>
    </div>
  )
}

