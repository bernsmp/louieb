import { redirect } from 'next/navigation'
import { getUser } from '@/lib/auth'
import Link from 'next/link'

export default async function AdminDashboard() {
  const user = await getUser()
  
  if (!user) {
    redirect('/cms/login')
  }

  const sections = [
    {
      title: 'Homepage',
      description: 'Edit hero, about, services, process, testimonials header, and contact sections.',
      href: '/cms/homepage',
      icon: LayoutIcon,
    },
    {
      title: 'Fractional Sales Leader Page',
      description: 'SEO landing page content with videos and FAQs.',
      href: '/cms/fsl-page',
      icon: FileTextIcon,
    },
    {
      title: 'Videos Page',
      description: 'Featured videos and page settings.',
      href: '/cms/videos',
      icon: VideoIcon,
    },
    {
      title: 'Newsletter Page',
      description: 'Newsletter signup page content and benefits.',
      href: '/cms/newsletter',
      icon: MailIcon,
    },
    {
      title: 'Course Page',
      description: 'Course modules, preview videos, and results.',
      href: '/cms/course',
      icon: BookIcon,
    },
    {
      title: 'Tools Pages',
      description: 'Tools landing page and ROI calculator.',
      href: '/cms/tools',
      icon: WrenchIcon,
    },
  ]

  const collections = [
    {
      title: 'Testimonials',
      description: 'Manage customer testimonials shown across the site.',
      href: '/cms/testimonials',
      icon: QuoteIcon,
    },
    {
      title: 'FAQ Items',
      description: 'Edit frequently asked questions for different pages.',
      href: '/cms/faq',
      icon: HelpCircleIcon,
    },
    {
      title: 'Services',
      description: 'Edit the services shown on the homepage.',
      href: '/cms/services',
      icon: GridIcon,
    },
    {
      title: 'Process Steps',
      description: 'Edit the "How It Works" process steps.',
      href: '/cms/process',
      icon: ListIcon,
    },
    {
      title: 'Blog Posts',
      description: 'Manage LinkedIn posts displayed on the blog page.',
      href: '/cms/blog',
      icon: PenLineIcon,
    },
  ]

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1 className="dashboard__title">Dashboard</h1>
        <p className="dashboard__subtitle">
          Welcome back! Choose a section to edit.
        </p>
      </div>

      <h2 style={{ fontSize: '1rem', fontWeight: 600, color: '#a3a3a3', marginBottom: '1rem', marginTop: '2rem' }}>
        Page Content
      </h2>
      <div className="dashboard__grid">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <div key={section.href} className="dashboard-card">
              <div className="dashboard-card__header">
                <div className="dashboard-card__icon">
                  <Icon />
                </div>
                <h3 className="dashboard-card__title">{section.title}</h3>
              </div>
              <p className="dashboard-card__description">{section.description}</p>
              <Link href={section.href} className="dashboard-card__link">
                Edit content →
              </Link>
            </div>
          )
        })}
      </div>

      <h2 style={{ fontSize: '1rem', fontWeight: 600, color: '#a3a3a3', marginBottom: '1rem', marginTop: '2rem' }}>
        Collections
      </h2>
      <div className="dashboard__grid">
        {collections.map((collection) => {
          const Icon = collection.icon
          return (
            <div key={collection.href} className="dashboard-card">
              <div className="dashboard-card__header">
                <div className="dashboard-card__icon">
                  <Icon />
                </div>
                <h3 className="dashboard-card__title">{collection.title}</h3>
              </div>
              <p className="dashboard-card__description">{collection.description}</p>
              <Link href={collection.href} className="dashboard-card__link">
                Manage items →
              </Link>
            </div>
          )
        })}
      </div>

      <h2 style={{ fontSize: '1rem', fontWeight: 600, color: '#a3a3a3', marginBottom: '1rem', marginTop: '2rem' }}>
        Settings
      </h2>
      <div className="dashboard__grid">
        <div className="dashboard-card">
          <div className="dashboard-card__header">
            <div className="dashboard-card__icon">
              <SettingsIcon />
            </div>
            <h3 className="dashboard-card__title">Site Settings</h3>
          </div>
          <p className="dashboard-card__description">Social links, contact info, footer, and newsletter settings.</p>
          <Link href="/cms/settings" className="dashboard-card__link">
            Edit settings →
          </Link>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card__header">
            <div className="dashboard-card__icon">
              <SearchIcon />
            </div>
            <h3 className="dashboard-card__title">SEO</h3>
          </div>
          <p className="dashboard-card__description">Site title, description, and keywords for search engines.</p>
          <Link href="/cms/seo" className="dashboard-card__link">
            Edit SEO →
          </Link>
        </div>
      </div>
    </div>
  )
}

// Icons
function LayoutIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
      <line x1="3" x2="21" y1="9" y2="9"/>
      <line x1="9" x2="9" y1="21" y2="9"/>
    </svg>
  )
}

function FileTextIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" x2="8" y1="13" y2="13"/>
      <line x1="16" x2="8" y1="17" y2="17"/>
      <line x1="10" x2="8" y1="9" y2="9"/>
    </svg>
  )
}

function VideoIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 8-6 4 6 4V8Z"/>
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
}

function BookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
    </svg>
  )
}

function WrenchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  )
}

function QuoteIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z"/>
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
    </svg>
  )
}

function HelpCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
      <path d="M12 17h.01"/>
    </svg>
  )
}

function GridIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="7" x="3" y="3" rx="1"/>
      <rect width="7" height="7" x="14" y="3" rx="1"/>
      <rect width="7" height="7" x="14" y="14" rx="1"/>
      <rect width="7" height="7" x="3" y="14" rx="1"/>
    </svg>
  )
}

function ListIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" x2="21" y1="6" y2="6"/>
      <line x1="8" x2="21" y1="12" y2="12"/>
      <line x1="8" x2="21" y1="18" y2="18"/>
      <line x1="3" x2="3.01" y1="6" y2="6"/>
      <line x1="3" x2="3.01" y1="12" y2="12"/>
      <line x1="3" x2="3.01" y1="18" y2="18"/>
    </svg>
  )
}

function SettingsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.3-4.3"/>
    </svg>
  )
}

function PenLineIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9"/>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
    </svg>
  )
}

