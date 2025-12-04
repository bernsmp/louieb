import { redirect } from 'next/navigation'
import { getUser } from '@/lib/auth'
import Link from 'next/link'

export default async function SettingsAdmin() {
  const user = await getUser()
  
  if (!user) {
    redirect('/cms/login')
  }

  const sections = [
    {
      title: 'Social Links',
      description: 'LinkedIn, YouTube, and Calendly URLs.',
      href: '/cms/settings/social',
    },
    {
      title: 'Contact Info',
      description: 'Email address and phone number.',
      href: '/cms/settings/contact',
    },
    {
      title: 'Newsletter Settings',
      description: 'Newsletter name, playlist, and subscribe URL.',
      href: '/cms/settings/newsletter',
    },
    {
      title: 'Course Settings',
      description: 'Course playlist ID.',
      href: '/cms/settings/course',
    },
    {
      title: 'Footer',
      description: 'Footer tagline, slogan, and labels.',
      href: '/cms/settings/footer',
    },
  ]

  return (
    <div className="edit-page">
      <div className="edit-page__header">
        <div>
          <Link href="/cms" className="edit-page__back">
            ← Back to Dashboard
          </Link>
          <h1 className="edit-page__title">Site Settings</h1>
          <p className="edit-page__description">
            Global settings that appear across the site.
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
    </div>
  )
}

