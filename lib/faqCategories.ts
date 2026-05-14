/**
 * FAQ categories for the /faqs page.
 *
 * Single source of truth used by:
 *   - lib/cms.ts (types)
 *   - app/(site)/faqs/* (public page rendering + TOC)
 *   - app/cms/faq/* (CMS admin dropdown)
 *
 * The `slug` is the value stored in faq_items.category. The `anchor` is the
 * DOM id used by the TOC links on the public page.
 */

export interface FAQCategory {
  slug: string
  label: string
  anchor: string
}

export const FAQ_CATEGORIES: FAQCategory[] = [
  { slug: 'role',       label: 'The Role of a Fractional Leader', anchor: 'role' },
  { slug: 'transition', label: 'Founder-Led Sales Transition',    anchor: 'transition' },
  { slug: 'hiring',     label: 'Hiring & Compensation',           anchor: 'hiring' },
  { slug: 'systems',    label: 'Sales Systems & Playbooks',       anchor: 'systems' },
  { slug: 'engagement', label: 'Working with Louie',              anchor: 'engagement' },
]

export const FAQ_CATEGORY_SLUGS = FAQ_CATEGORIES.map((c) => c.slug)

export function getFAQCategoryLabel(slug: string | null | undefined): string {
  if (!slug) return 'Uncategorized'
  return FAQ_CATEGORIES.find((c) => c.slug === slug)?.label ?? slug
}
