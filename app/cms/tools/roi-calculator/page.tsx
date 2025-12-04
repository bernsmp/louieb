'use client'

import { SectionEditor } from '../../components/SectionEditor'

export default function EditROICalculatorPage() {
  return (
    <SectionEditor
      section="roiCalculatorPage"
      title="ROI Calculator Page"
      description="Header content for the /tools/roi-calculator page."
      backHref="/cms/tools"
      backLabel="Back to Tools"
      fields={[
        {
          name: 'headline',
          label: 'Page Headline',
          type: 'text',
          placeholder: 'e.g., Fractional Sales ROI Calculator',
        },
        {
          name: 'subheadline',
          label: 'Page Subheadline',
          type: 'text',
          placeholder: 'e.g., You be the judge if a Fractional Sales Leader makes financial sense',
        },
      ]}
    />
  )
}

