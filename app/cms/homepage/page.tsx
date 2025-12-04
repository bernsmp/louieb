import { redirect } from 'next/navigation'
import { getUser } from '@/lib/auth'
import Link from 'next/link'

export default async function HomepageAdmin() {
  const user = await getUser()
  
  if (!user) {
    redirect('/cms/login')
  }

  const sections = [
    {
      title: 'Hero Section',
      description: 'Main banner with headline, tagline, video, and CTAs.',
      href: '/cms/homepage/hero',
    },
    {
      title: 'Credentials Badge',
      description: 'LinkedIn Top Voice badge and secondary credential.',
      href: '/cms/homepage/credentials',
    },
    {
      title: 'About Section',
      description: 'About text, callout box, and statistics.',
      href: '/cms/homepage/about',
    },
    {
      title: 'Value Proposition',
      description: '"It\'s not how much you sell" section.',
      href: '/cms/homepage/value-proposition',
    },
    {
      title: 'Fractional Sales Leader',
      description: 'The marketing section targeting founders.',
      href: '/cms/homepage/fractional-sales-leader',
    },
    {
      title: 'Testimonials Header',
      description: 'Section title and subtitle for testimonials.',
      href: '/cms/homepage/testimonials-header',
    },
    {
      title: 'Awards Section',
      description: 'Awards image and description.',
      href: '/cms/homepage/awards',
    },
    {
      title: 'Contact Section',
      description: 'Contact section header and labels.',
      href: '/cms/homepage/contact',
    },
  ]

  return (
    <div className="edit-page">
      <div className="edit-page__header">
        <div>
          <Link href="/cms" className="edit-page__back">
            ← Back to Dashboard
          </Link>
          <h1 className="edit-page__title">Homepage</h1>
          <p className="edit-page__description">
            Edit the content sections on your homepage.
          </p>
        </div>
      </div>

      <div className="dashboard__grid">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="dashboard-card"
            style={{ textDecoration: 'none' }}
          >
            <h3 className="dashboard-card__title" style={{ marginBottom: '0.5rem' }}>
              {section.title}
            </h3>
            <p className="dashboard-card__description" style={{ marginBottom: 0 }}>
              {section.description}
            </p>
          </Link>
        ))}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1rem', fontWeight: 600, color: '#a3a3a3', marginBottom: '1rem' }}>
          Dynamic Content (Managed in Collections)
        </h2>
        <div className="dashboard__grid">
          <Link
            href="/cms/services"
            className="dashboard-card"
            style={{ textDecoration: 'none' }}
          >
            <h3 className="dashboard-card__title" style={{ marginBottom: '0.5rem' }}>
              Services
            </h3>
            <p className="dashboard-card__description" style={{ marginBottom: 0 }}>
              Manage the 6 service cards in the "What I Offer" section.
            </p>
          </Link>
          <Link
            href="/cms/process"
            className="dashboard-card"
            style={{ textDecoration: 'none' }}
          >
            <h3 className="dashboard-card__title" style={{ marginBottom: '0.5rem' }}>
              Process Steps
            </h3>
            <p className="dashboard-card__description" style={{ marginBottom: 0 }}>
              Manage the steps in the "How It Works" section.
            </p>
          </Link>
          <Link
            href="/cms/faq"
            className="dashboard-card"
            style={{ textDecoration: 'none' }}
          >
            <h3 className="dashboard-card__title" style={{ marginBottom: '0.5rem' }}>
              FAQ Items
            </h3>
            <p className="dashboard-card__description" style={{ marginBottom: 0 }}>
              Manage homepage FAQ questions and answers.
            </p>
          </Link>
          <Link
            href="/cms/testimonials"
            className="dashboard-card"
            style={{ textDecoration: 'none' }}
          >
            <h3 className="dashboard-card__title" style={{ marginBottom: '0.5rem' }}>
              Testimonials
            </h3>
            <p className="dashboard-card__description" style={{ marginBottom: 0 }}>
              Manage customer testimonials.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

