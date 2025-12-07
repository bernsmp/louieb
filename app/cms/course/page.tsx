'use client'

import Link from 'next/link'
import { SectionEditor } from '../components/SectionEditor'

export default function EditCoursePage() {
  return (
    <div>
      {/* Link to Course Modules Editor */}
      <div style={{ 
        background: '#1a1a1a', 
        border: '1px solid #333', 
        borderRadius: '8px', 
        padding: '1rem 1.5rem', 
        marginBottom: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <h3 style={{ margin: 0, fontSize: '1rem', color: '#fff' }}>Course Modules</h3>
          <p style={{ margin: '0.25rem 0 0', fontSize: '0.85rem', color: '#888' }}>
            Edit the 4 cards shown in &quot;What you get with this FREE course&quot;
          </p>
        </div>
        <Link 
          href="/cms/course/modules" 
          className="btn btn--primary"
          style={{ whiteSpace: 'nowrap' }}
        >
          Edit Modules →
        </Link>
      </div>

      <SectionEditor
        section="coursePage"
        title="Course Page"
        description="Content for the /course page."
        backHref="/cms"
        backLabel="Back to Dashboard"
        previewUrl="/cms/preview/course"
        fields={[
        {
          name: 'headline',
          label: 'Page Headline',
          type: 'text',
          placeholder: "e.g., The Founder's and CEO's Sales System",
        },
        {
          name: 'tagline',
          label: 'Tagline',
          type: 'text',
          placeholder: 'e.g., Build, optimize, and scale your sales team—without the full-time cost',
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          rows: 3,
        },
        {
          name: 'resultsBadge',
          label: 'Results Badge Text',
          type: 'text',
          placeholder: 'e.g., 61% sales increase • 120+ hiring questions • 20-step system',
        },
        {
          name: 'modulesHeadline',
          label: 'Modules Section Headline',
          type: 'text',
          placeholder: 'e.g., What You Get With This Course',
        },
        {
          name: 'modulesSubheadline',
          label: 'Modules Section Subheadline',
          type: 'text',
        },
        {
          name: 'previewHeadline',
          label: 'Preview Section Headline',
          type: 'text',
          placeholder: 'e.g., Preview the Course',
        },
        {
          name: 'resultsHeadline',
          label: 'Results Section Headline',
          type: 'text',
          placeholder: 'e.g., Real Results From Real Businesses',
        },
        {
          name: 'caseStudyQuote',
          label: 'Case Study Quote',
          type: 'textarea',
          rows: 2,
        },
        {
          name: 'caseStudyAttribution',
          label: 'Case Study Attribution',
          type: 'text',
          placeholder: 'e.g., Client Case Study',
        },
        {
          name: 'finalCtaHeadline',
          label: 'Final CTA Headline',
          type: 'text',
          placeholder: 'e.g., Start Building Your Sales System Today',
        },
        {
          name: 'finalCtaDescription',
          label: 'Final CTA Description',
          type: 'text',
        },
      ]}
      />
    </div>
  )
}
