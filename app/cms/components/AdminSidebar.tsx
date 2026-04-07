'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import type { User } from '@supabase/supabase-js'

interface AdminSidebarProps {
  user: User
}

const pages = [
  { name: 'Homepage', href: '/cms/homepage', icon: LayoutIcon },
  { name: 'FSL Page', href: '/cms/fsl-page', icon: FileTextIcon },
  { name: 'FSL vs Consultant', href: '/cms/fsl-vs-consultant-page', icon: FileTextIcon },
  { name: 'Salesperson Blueprint', href: '/cms/salesperson', icon: BookIcon },
  { name: 'Videos Page', href: '/cms/videos', icon: VideoIcon },
  { name: 'Newsletter', href: '/cms/newsletter', icon: MailIcon },
  { name: 'Blog Page', href: '/cms/blog-page', icon: PenIcon },
  { name: 'Articles Page', href: '/cms/articles-page', icon: FileTextIcon },
  { name: 'Course', href: '/cms/course', icon: BookIcon },
  { name: 'Tools', href: '/cms/tools', icon: WrenchIcon },
  { name: 'Site Map', href: '/cms/site-map', icon: MapIcon },
  { name: 'Before You Leave The Dock', href: '/cms/entrepreneurs', icon: BookIcon },
  { name: 'Founders Page', href: '/cms/founders', icon: BookIcon },
  { name: 'Fractional CRO ($1M–$10M)', href: '/cms/seo-fractional-cro', icon: FileTextIcon },
  { name: 'Fractional VP of Sales', href: '/cms/seo-fractional-vp', icon: FileTextIcon },
  { name: 'When to Hire a Fractional CRO', href: '/cms/seo-when-to-hire', icon: FileTextIcon },
  { name: 'Fractional CRO Pricing', href: '/cms/seo-cro-pricing', icon: FileTextIcon },
  { name: 'Replace Founder-Led Sales', href: '/cms/seo-replace-founder-sales', icon: FileTextIcon },
  { name: 'Sales Team Quota', href: '/cms/seo-sales-team-quota', icon: FileTextIcon },
  { name: 'Build Sales Process', href: '/cms/seo-build-sales-process', icon: FileTextIcon },
  { name: 'SaaS Sales Process', href: '/cms/seo-saas-sales-process', icon: FileTextIcon },
  { name: 'Founder Sales Not Scaling', href: '/cms/seo-founder-sales-not-scaling', icon: FileTextIcon },
  { name: 'No Pipeline — What to Do', href: '/cms/seo-no-pipeline', icon: FileTextIcon },
  { name: 'Sales Team Not Hitting Quota', href: '/cms/seo-sales-team-not-hitting-quota', icon: FileTextIcon },
  { name: 'Why Sales Reps Fail', href: '/cms/seo-sales-reps-fail', icon: FileTextIcon },
  { name: 'How to Hire First Sales Rep', href: '/cms/seo-hire-first-sales-rep', icon: FileTextIcon },
  { name: 'Sales Leadership $1M–$10M', href: '/cms/seo-sales-leadership-1m-10m', icon: FileTextIcon },
  { name: 'Build Sales Team After $1M ARR', href: '/cms/seo-build-sales-team-1m-arr', icon: FileTextIcon },
  { name: 'Why Startups Fail at Sales Hiring', href: '/cms/seo-startups-fail-sales-hiring', icon: FileTextIcon },
  { name: 'Fractional CRO vs Full-Time CRO', href: '/cms/seo-cro-vs-full-time', icon: FileTextIcon },
  { name: 'VP of Sales vs CRO', href: '/cms/seo-vp-vs-cro', icon: FileTextIcon },
  { name: 'How Much Does a Fractional CRO Cost', href: '/cms/seo-cro-cost', icon: FileTextIcon },
  { name: 'When to Hire a CRO', href: '/cms/seo-when-to-hire-cro', icon: FileTextIcon },
  { name: 'FSL vs Consultant (SEO)', href: '/cms/seo-fsl-vs-consultant', icon: FileTextIcon },
  { name: 'Fractional VP vs Full-Time VP', href: '/cms/seo-vp-sales-vs-full-time', icon: FileTextIcon },
  { name: 'When to Hire a Fractional Sales Leader', href: '/cms/seo-when-to-hire-fsl', icon: FileTextIcon },
  { name: 'Cost of Fractional VP Sales', href: '/cms/seo-cost-fractional-vp', icon: FileTextIcon },
  { name: 'Is Fractional Sales Leadership Worth It', href: '/cms/seo-fsl-worth-it', icon: FileTextIcon },
  { name: 'What Is Founder-Led Sales', href: '/cms/seo-what-is-founder-led-sales', icon: FileTextIcon },
  { name: 'How to Get Out of Founder-Led Sales', href: '/cms/seo-get-out-founder-led-sales', icon: FileTextIcon },
  { name: 'Why Sales Team Not Growing Revenue', href: '/cms/seo-sales-team-not-growing', icon: FileTextIcon },
  { name: 'Sales Forecasting for Small Business', href: '/cms/seo-sales-forecasting', icon: FileTextIcon },
  { name: 'What Is a Sales Audit', href: '/cms/seo-sales-audit', icon: FileTextIcon },
  { name: 'How to Build Outbound Sales System', href: '/cms/seo-outbound-sales-system', icon: FileTextIcon },
  { name: 'What Is a Sales Playbook', href: '/cms/seo-sales-playbook', icon: FileTextIcon },
  { name: 'How to Set Up HubSpot', href: '/cms/seo-hubspot-setup', icon: FileTextIcon },
  { name: 'How to Run Weekly Sales Meeting', href: '/cms/seo-weekly-sales-meeting', icon: FileTextIcon },
  { name: 'How to Onboard a New Sales Rep', href: '/cms/seo-onboard-sales-rep', icon: FileTextIcon },
  { name: 'Sales Compensation Plan', href: '/cms/seo-sales-comp-plan', icon: FileTextIcon },
  { name: 'The $250K VP of Sales Mistake', href: '/cms/seo-250k-vp-sales-mistake', icon: FileTextIcon },
  { name: 'When Ready to Hire First Sales Rep', href: '/cms/seo-when-ready-hire-sales-rep', icon: FileTextIcon },
  { name: 'Hire One or Two Salespeople?', href: '/cms/seo-hire-one-or-two-salespeople', icon: FileTextIcon },
  { name: 'FSL vs. Sales Coach', href: '/cms/seo-fsl-vs-sales-coach', icon: FileTextIcon },
  { name: 'FSL vs. Sales Consultant', href: '/cms/seo-fsl-vs-sales-consultant', icon: FileTextIcon },
  { name: 'Case Study: 61% Sales Growth', href: '/cms/seo-case-study-61-growth', icon: FileTextIcon },
  { name: '5 Warning Signs Sales Process Breaking', href: '/cms/seo-warning-signs-sales-process', icon: FileTextIcon },
  { name: 'What Does a FSL Do Week to Week?', href: '/cms/seo-what-fsl-does', icon: FileTextIcon },
  { name: 'Transition Out of Founder-Led Sales', href: '/cms/seo-transition-founder-led-sales', icon: FileTextIcon },
  { name: 'How to Build a Sales Pipeline', href: '/cms/seo-build-sales-pipeline', icon: FileTextIcon },
  { name: 'Sales Forecasting for Investors', href: '/cms/seo-sales-forecasting-investors', icon: FileTextIcon },
  { name: 'How to Run a Pipeline Review', href: '/cms/seo-run-sales-pipeline-review', icon: FileTextIcon },
  { name: 'Sales Tech Stack for Small Business', href: '/cms/seo-sales-tech-stack', icon: FileTextIcon },
  { name: 'Diagnose Sales Team Problems', href: '/cms/seo-diagnose-sales-team', icon: FileTextIcon },
  { name: 'How to Set Sales Quota', href: '/cms/seo-set-sales-quota', icon: FileTextIcon },
  { name: 'How to Create an ICP', href: '/cms/seo-how-to-create-icp', icon: FileTextIcon },
  { name: 'Sales KPIs for Small Business', href: '/cms/seo-sales-kpis-small-business', icon: FileTextIcon },
  { name: 'What Is a Sales Cadence', href: '/cms/seo-what-is-a-sales-cadence', icon: FileTextIcon },
  { name: 'How to Write a Cold Email', href: '/cms/seo-how-to-write-cold-email', icon: FileTextIcon },
  { name: 'How to Run a Discovery Call', href: '/cms/seo-how-to-run-discovery-call', icon: FileTextIcon },
  { name: 'Close Deals Without Discounting', href: '/cms/seo-close-deals-no-discount', icon: FileTextIcon },
  { name: 'Sales Accountability Document', href: '/cms/seo-sales-accountability-document', icon: FileTextIcon },
  { name: 'What Is Sales Enablement', href: '/cms/seo-what-is-sales-enablement', icon: FileTextIcon },
  { name: 'Scale Revenue $1M to $10M', href: '/cms/seo-scale-revenue-1m-to-10m', icon: FileTextIcon },
  { name: 'What Is Revenue Operations (RevOps)', href: '/cms/seo-what-is-revops', icon: FileTextIcon },
  { name: 'Fractional Sales Leadership ROI', href: '/cms/seo-fsl-roi', icon: FileTextIcon },
  { name: 'How to Build a GTM Strategy', href: '/cms/seo-go-to-market-strategy', icon: FileTextIcon },
  { name: 'B2B Sales Objection Handling', href: '/cms/seo-b2b-objection-handling', icon: FileTextIcon },
  { name: 'Sales Velocity (B2B)', href: '/cms/seo-sales-velocity', icon: FileTextIcon },
  { name: 'Win-Loss Analysis', href: '/cms/seo-win-loss-analysis', icon: FileTextIcon },
  { name: 'How to Shorten the Sales Cycle', href: '/cms/seo-shorten-sales-cycle', icon: FileTextIcon },
  { name: 'Sales Qualified Lead (SQL)', href: '/cms/seo-sales-qualified-lead', icon: FileTextIcon },
  { name: 'B2B Referral Program', href: '/cms/seo-b2b-referral-program', icon: FileTextIcon },
  { name: 'Sales Pipeline Stages', href: '/cms/seo-sales-pipeline-stages', icon: FileTextIcon },
  { name: 'How to Interview a Fractional Sales Leader', href: '/cms/seo-interview-fractional-sales-leader', icon: FileTextIcon },
]

const collections = [
  { name: 'Blog Posts', href: '/cms/blog', icon: PenIcon },
  { name: 'Articles', href: '/cms/articles', icon: FileTextIcon },
  { name: 'Testimonials', href: '/cms/testimonials', icon: QuoteIcon },
  { name: 'FAQ Items', href: '/cms/faq', icon: HelpCircleIcon },
  { name: 'Videos', href: '/cms/videos-list', icon: PlayIcon },
  { name: 'Categories', href: '/cms/categories', icon: TagIcon },
  { name: 'Services', href: '/cms/services', icon: GridIcon },
  { name: 'Process Steps', href: '/cms/process', icon: ListIcon },
]

const settings = [
  { name: 'Site Settings', href: '/cms/settings', icon: SettingsIcon },
  { name: 'SEO', href: '/cms/seo', icon: SearchIcon },
]

export function AdminSidebar({ user }: AdminSidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [pagesOpen, setPagesOpen] = useState(() =>
    pages.some((p) => pathname === p.href || (p.href !== '/cms' && pathname.startsWith(p.href)))
  )
  const [searchValue, setSearchValue] = useState('')

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const q = searchValue.trim()
    if (q.length < 2) return
    router.push(`/cms/search?q=${encodeURIComponent(q)}`)
  }

  const handleLogout = async () => {
    const response = await fetch('/api/auth/logout', { method: 'POST' })
    if (response.ok) {
      window.location.href = '/cms/login'
    }
  }

  const isActive = (href: string) =>
    pathname === href || (href !== '/cms' && pathname.startsWith(href))

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar__header">
        <Link href="/cms" className="admin-sidebar__logo">
          Louie<span>CMS</span>
        </Link>
      </div>

      <form onSubmit={handleSearchSubmit} className="admin-sidebar__search">
        <div className="admin-sidebar__search-wrap">
          <svg className="admin-sidebar__search-icon" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
          </svg>
          <input
            type="text"
            className="admin-sidebar__search-input"
            placeholder="Search CMS…"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            aria-label="Search CMS"
          />
        </div>
      </form>

      <nav className="admin-sidebar__nav">
        {/* Dashboard */}
        <div className="admin-sidebar__section">
          <Link
            href="/cms"
            className={`admin-sidebar__link ${isActive('/cms') && pathname === '/cms' ? 'admin-sidebar__link--active' : ''}`}
          >
            <HomeIcon />
            Dashboard
          </Link>
        </div>

        {/* Pages — collapsible */}
        <div className="admin-sidebar__section">
          <button
            onClick={() => setPagesOpen((o) => !o)}
            className="admin-sidebar__section-title admin-sidebar__section-title--button"
            aria-expanded={pagesOpen}
          >
            <span>Pages</span>
            <ChevronIcon open={pagesOpen} />
          </button>
          {pagesOpen && (
            <div className="admin-sidebar__collapsible">
              {pages.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`admin-sidebar__link admin-sidebar__link--indented ${isActive(item.href) ? 'admin-sidebar__link--active' : ''}`}
                  >
                    <Icon />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          )}
        </div>

        {/* Collections */}
        <div className="admin-sidebar__section">
          <div className="admin-sidebar__section-title">Collections</div>
          {collections.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`admin-sidebar__link ${isActive(item.href) ? 'admin-sidebar__link--active' : ''}`}
              >
                <Icon />
                {item.name}
              </Link>
            )
          })}
        </div>

        {/* Settings */}
        <div className="admin-sidebar__section">
          <div className="admin-sidebar__section-title">Settings</div>
          {settings.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`admin-sidebar__link ${isActive(item.href) ? 'admin-sidebar__link--active' : ''}`}
              >
                <Icon />
                {item.name}
              </Link>
            )
          })}
        </div>
      </nav>

      <div className="admin-sidebar__footer">
        <div className="admin-sidebar__user">
          <div className="admin-sidebar__avatar">
            {user.email?.charAt(0).toUpperCase() || 'A'}
          </div>
          <div className="admin-sidebar__email">{user.email}</div>
        </div>
        <button onClick={handleLogout} className="btn btn--secondary btn--full">
          <LogOutIcon />
          Sign Out
        </button>
      </div>
    </aside>
  )
}

// Chevron for collapse toggle
function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

// Simple SVG Icons
function HomeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  )
}

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

function MapIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
      <line x1="9" y1="3" x2="9" y2="18"/>
      <line x1="15" y1="6" x2="15" y2="21"/>
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

function PlayIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3"/>
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

function TagIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/>
      <path d="M7 7h.01"/>
    </svg>
  )
}

function PenIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
    </svg>
  )
}

function LogOutIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
      <polyline points="16 17 21 12 16 7"/>
      <line x1="21" x2="9" y1="12" y2="12"/>
    </svg>
  )
}
