'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function SeoIcpChecklistPage() {
  return (
    <SectionEditor
      section="seoIcpChecklist"
      title="Lead Magnet: ICP Clarity Checklist"
      description="Edit the landing page copy for /icp-checklist (the 15 checklist questions live in code — ask Claude to change those)"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        // Hero
        { name: 'heroTag', label: 'Hero: Eyebrow Tag', type: 'text', aiRewrite: true },
        { name: 'heroLine1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true },
        { name: 'heroAccent', label: 'Hero: Accent Line (blue text)', type: 'text', aiRewrite: true },
        { name: 'heroH2', label: 'Hero: Subtitle (H2)', type: 'text', aiRewrite: true },
        { name: 'heroDescription', label: 'Hero: Description Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'heroCtaText', label: 'Hero: CTA Button Text', type: 'text', aiRewrite: true },
        { name: 'heroCtaNote', label: 'Hero: Note Next to CTA', type: 'text' },

        // Benefits
        { name: 'benefitsHeading', label: 'Benefits: Section Heading', type: 'text', aiRewrite: true },
        { name: 'benefit1Title', label: 'Benefit 1: Title', type: 'text', aiRewrite: true },
        { name: 'benefit1Text', label: 'Benefit 1: Text', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'benefit2Title', label: 'Benefit 2: Title', type: 'text', aiRewrite: true },
        { name: 'benefit2Text', label: 'Benefit 2: Text', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'benefit3Title', label: 'Benefit 3: Title', type: 'text', aiRewrite: true },
        { name: 'benefit3Text', label: 'Benefit 3: Text', type: 'textarea', aiRewrite: true, rows: 3 },
      ]}
      previewUrl="/icp-checklist"
    />
  )
}
