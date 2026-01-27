'use client'

import { SectionEditor } from '../../components/SectionEditor'

export default function EditROICalculatorTextPage() {
  return (
    <SectionEditor
      section="roiCalculatorText"
      title="ROI Calculator Text"
      description="Labels and text displayed in the ROI Calculator tool."
      backHref="/cms/tools"
      backLabel="Back to Tools"
      fields={[
        // Input section
        {
          name: 'inputSectionHeadline',
          label: 'Input Section Headline',
          type: 'text',
          placeholder: 'e.g., Your Numbers',
        },
        {
          name: 'inputSectionDescription',
          label: 'Input Section Description',
          type: 'text',
          placeholder: 'e.g., Adjust these values to match your company',
        },
        // Results section
        {
          name: 'resultsSectionHeadline',
          label: 'Results Section Headline',
          type: 'text',
          placeholder: 'e.g., 6-Month Cost Comparison',
        },
        {
          name: 'founderLedLabel',
          label: 'Founder-Led Sales Label',
          type: 'text',
          placeholder: 'e.g., Founder-Led Sales',
        },
        {
          name: 'badVPLabel',
          label: 'Bad VP Hire Label',
          type: 'text',
          placeholder: 'e.g., Bad VP Hire',
        },
        {
          name: 'fractionalLabel',
          label: 'Fractional Sales Leader Label',
          type: 'text',
          placeholder: 'e.g., Fractional Sales Leader',
        },
        // Savings section
        {
          name: 'savingsSectionHeadline',
          label: 'Savings Section Headline',
          type: 'text',
          placeholder: 'e.g., Your Potential Savings',
        },
        {
          name: 'savingsVsFounderLabel',
          label: 'Savings vs Founder Label',
          type: 'text',
          placeholder: 'e.g., vs. Founder-Led Sales',
        },
        {
          name: 'savingsVsBadVPLabel',
          label: 'Savings vs Bad VP Label',
          type: 'text',
          placeholder: 'e.g., vs. Bad VP Hire',
        },
        // CTA
        {
          name: 'ctaText',
          label: 'CTA Text',
          type: 'text',
          placeholder: 'e.g., Ready to see what a Fractional Sales Leader can do for your business?',
        },
        {
          name: 'ctaButtonText',
          label: 'CTA Button Text',
          type: 'text',
          placeholder: "e.g., Let's Talk",
        },
        // Disclaimer
        {
          name: 'disclaimerText',
          label: 'Disclaimer Text',
          type: 'textarea',
          rows: 2,
          placeholder: 'Note: This calculator shows top-line impact only...',
        },
      ]}
    />
  )
}
