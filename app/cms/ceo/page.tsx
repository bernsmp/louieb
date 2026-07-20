'use client'

import { SectionEditor } from '../components/SectionEditor'

export default function CeoLandingCmsPage() {
  return (
    <SectionEditor
      section="ceoLanding"
      title="The Founder's Corner™ Landing Page"
      description="Edit content for /ceo"
      backHref="/cms"
      backLabel="Dashboard"
      fields={[
        // Shared CTA
        { name: 'ctaButtonLabel', label: 'Button Label (hero + mid-page Book buttons)', type: 'text' },
        { name: 'finalCtaButtonLabel', label: 'Button Label (final section only)', type: 'text' },
        { name: 'investCtaButtonLabel', label: 'Button Label (Your Investment section only)', type: 'text' },

        // Hero
        { name: 'heroKicker', label: 'Hero: Kicker (orange, uppercase)', type: 'text', aiRewrite: true },
        { name: 'heroH1Line1', label: 'Hero: Headline Line 1', type: 'text', aiRewrite: true },
        { name: 'heroH1Line2', label: 'Hero: Headline Line 2', type: 'text', aiRewrite: true },
        { name: 'heroSubhead', label: 'Hero: Subhead', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'heroAccent', label: 'Hero: Accent Line (orange)', type: 'text', aiRewrite: true },
        { name: 'heroMicrocopy', label: 'Hero: Microcopy under button', type: 'textarea', rows: 2 },
        { name: 'heroProof', label: 'Hero: Proof Line', type: 'text', aiRewrite: true },

        // Maybe This Sounds Familiar
        { name: 'familiarHeading', label: 'Sounds Familiar: Heading', type: 'text', aiRewrite: true },
        { name: 'familiarP1', label: 'Sounds Familiar: Paragraph 1', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'familiarP2', label: 'Sounds Familiar: Paragraph 2', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'familiarP3', label: 'Sounds Familiar: Paragraph 3', type: 'textarea', aiRewrite: true, rows: 2 },
        { name: 'familiarQuote', label: 'Sounds Familiar: Quote', type: 'textarea', rows: 3 },
        { name: 'familiarQuoteAttr', label: 'Sounds Familiar: Quote Attribution', type: 'text' },

        // Costing You More
        { name: 'costHeading', label: 'Costing More: Heading', type: 'text', aiRewrite: true },
        { name: 'costP1', label: 'Costing More: Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'costP2', label: 'Costing More: Intro line above list', type: 'text' },
        { name: 'costItem1', label: 'Costing More: Item 1', type: 'text' },
        { name: 'costItem2', label: 'Costing More: Item 2', type: 'text' },
        { name: 'costItem3', label: 'Costing More: Item 3', type: 'text' },
        { name: 'costItem4', label: 'Costing More: Item 4', type: 'text' },
        { name: 'costItem5', label: 'Costing More: Item 5', type: 'text' },
        { name: 'costClosing', label: 'Costing More: Closing line', type: 'textarea', aiRewrite: true, rows: 2 },

        // If Nothing Changes
        { name: 'nothingHeading', label: 'If Nothing Changes: Heading', type: 'text', aiRewrite: true },
        { name: 'nothingP1', label: 'If Nothing Changes: Intro line', type: 'text' },
        { name: 'nothingItem1', label: 'If Nothing Changes: Item 1', type: 'text' },
        { name: 'nothingItem2', label: 'If Nothing Changes: Item 2', type: 'text' },
        { name: 'nothingItem3', label: 'If Nothing Changes: Item 3', type: 'text' },
        { name: 'nothingItem4', label: 'If Nothing Changes: Item 4', type: 'text' },
        { name: 'nothingClosing', label: 'If Nothing Changes: Closing line', type: 'textarea', aiRewrite: true, rows: 2 },
        { name: 'nothingTestimonial', label: 'If Nothing Changes: Testimonial quote', type: 'textarea', rows: 3 },
        { name: 'nothingTestimonialAttr', label: 'If Nothing Changes: Testimonial attribution', type: 'text' },

        // Founder-Led Sales Eventually Breaks Every Company
        { name: 'breakHeading', label: 'Breaks Every Company: Heading', type: 'text', aiRewrite: true },
        { name: 'breakIntro', label: 'Breaks Every Company: Intro line ("Because:")', type: 'text' },
        { name: 'breakItem1', label: 'Breaks: Item 1', type: 'text' },
        { name: 'breakItem2', label: 'Breaks: Item 2', type: 'text' },
        { name: 'breakItem3', label: 'Breaks: Item 3', type: 'text' },
        { name: 'breakItem4', label: 'Breaks: Item 4', type: 'text' },
        { name: 'breakItem5', label: 'Breaks: Item 5', type: 'text' },
        { name: 'breakSlow', label: 'Breaks: "This happens slowly." line', type: 'text' },
        { name: 'breakRealize', label: 'Breaks: "Until one day you realize:" line', type: 'text' },
        { name: 'breakJob', label: 'Breaks: "You built yourself a job." line', type: 'text' },
        { name: 'breakNotCompany', label: 'Breaks: "Not a company." line', type: 'text' },

        // Today vs Could Be
        { name: 'compareHeading', label: 'Today vs. Future: Heading', type: 'text', aiRewrite: true },
        { name: 'todayHeading', label: 'Today Column: Heading', type: 'text' },
        { name: 'todayItem1', label: 'Today: Item 1', type: 'text' },
        { name: 'todayItem2', label: 'Today: Item 2', type: 'text' },
        { name: 'todayItem3', label: 'Today: Item 3', type: 'text' },
        { name: 'todayItem4', label: 'Today: Item 4', type: 'text' },
        { name: 'todayItem5', label: 'Today: Item 5', type: 'text' },
        { name: 'futureHeading', label: 'Future Column: Heading', type: 'text' },
        { name: 'futureItem1', label: 'Future: Item 1', type: 'text' },
        { name: 'futureItem2', label: 'Future: Item 2', type: 'text' },
        { name: 'futureItem3', label: 'Future: Item 3', type: 'text' },
        { name: 'futureItem4', label: 'Future: Item 4', type: 'text' },
        { name: 'futureItem5', label: 'Future: Item 5', type: 'text' },
        { name: 'futureItem6', label: 'Future: Item 6', type: 'text' },

        // What You Walk Away With
        { name: 'walkHeading', label: 'Walk Away With: Heading', type: 'text', aiRewrite: true },
        { name: 'walkItem1', label: 'Walk Away: Item 1', type: 'textarea', rows: 2 },
        { name: 'walkItem2', label: 'Walk Away: Item 2', type: 'textarea', rows: 2 },
        { name: 'walkItem3', label: 'Walk Away: Item 3', type: 'textarea', rows: 2 },
        { name: 'walkItem4', label: 'Walk Away: Item 4', type: 'textarea', rows: 2 },
        { name: 'walkItem5', label: 'Walk Away: Item 5', type: 'textarea', rows: 2 },
        { name: 'walkItem6', label: 'Walk Away: Item 6', type: 'text' },
        { name: 'walkClosing', label: 'Walk Away: Closing line', type: 'textarea', aiRewrite: true, rows: 2 },

        // Not About Better Selling
        { name: 'notSellingHeading', label: 'Not About Selling: Heading', type: 'text', aiRewrite: true },
        { name: 'notSellingIntro', label: 'Not About Selling: Intro line', type: 'text' },
        { name: 'notSellingItem1', label: 'Not About Selling: Item 1', type: 'text' },
        { name: 'notSellingItem2', label: 'Not About Selling: Item 2', type: 'text' },
        { name: 'notSellingItem3', label: 'Not About Selling: Item 3', type: 'text' },
        { name: 'notSellingItem4', label: 'Not About Selling: Item 4', type: 'text' },
        { name: 'notSellingItem5', label: 'Not About Selling: Item 5', type: 'text' },

        // How You Get There
        { name: 'howHeading', label: 'How You Get There: Heading', type: 'text', aiRewrite: true },
        { name: 'howP1', label: 'How You Get There: Paragraph 1', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'howP2', label: 'How You Get There: Paragraph 2', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'howP3', label: 'How You Get There: Paragraph 3 (intro to list)', type: 'textarea', rows: 2 },
        { name: 'howBuys1', label: 'What It Buys You: Item 1', type: 'text' },
        { name: 'howBuys2', label: 'What It Buys You: Item 2', type: 'text' },
        { name: 'howBuys3', label: 'What It Buys You: Item 3', type: 'text' },
        { name: 'howBuys4', label: 'What It Buys You: Item 4', type: 'text' },
        { name: 'pathHeading', label: '12-Week Path: Sub-heading', type: 'text' },
        { name: 'pathIntro', label: '12-Week Path: Intro line', type: 'textarea', rows: 2 },
        { name: 'week1Title', label: 'Week 1: Title', type: 'text' },
        { name: 'week1Detail', label: 'Week 1: Detail', type: 'text' },
        { name: 'week2Title', label: 'Week 2: Title', type: 'text' },
        { name: 'week2Detail', label: 'Week 2: Detail', type: 'text' },
        { name: 'week3Title', label: 'Week 3: Title', type: 'text' },
        { name: 'week3Detail', label: 'Week 3: Detail', type: 'text' },
        { name: 'week4Title', label: 'Week 4: Title', type: 'text' },
        { name: 'week4Detail', label: 'Week 4: Detail', type: 'text' },
        { name: 'week5Title', label: 'Week 5: Title', type: 'text' },
        { name: 'week5Detail', label: 'Week 5: Detail', type: 'text' },
        { name: 'week6Title', label: 'Week 6: Title', type: 'text' },
        { name: 'week6Detail', label: 'Week 6: Detail', type: 'text' },
        { name: 'week7Title', label: 'Week 7: Title', type: 'text' },
        { name: 'week7Detail', label: 'Week 7: Detail', type: 'text' },
        { name: 'week8Title', label: 'Week 8: Title', type: 'text' },
        { name: 'week8Detail', label: 'Week 8: Detail', type: 'text' },
        { name: 'week9Title', label: 'Week 9: Title', type: 'text' },
        { name: 'week9Detail', label: 'Week 9: Detail', type: 'text' },
        { name: 'week10Title', label: 'Week 10: Title', type: 'text' },
        { name: 'week10Detail', label: 'Week 10: Detail', type: 'text' },
        { name: 'week11Title', label: 'Week 11: Title', type: 'text' },
        { name: 'week11Detail', label: 'Week 11: Detail', type: 'text' },
        { name: 'week12Title', label: 'Week 12: Title', type: 'text' },
        { name: 'week12Detail', label: 'Week 12: Detail', type: 'text' },
        { name: 'howClosing', label: 'How You Get There: Closing line', type: 'textarea', aiRewrite: true, rows: 2 },

        // Is This You?
        { name: 'isThisHeading', label: 'Is This You: Heading', type: 'text', aiRewrite: true },
        { name: 'forYouHeading', label: 'For You Column: Heading', type: 'text' },
        { name: 'forYouItem1', label: 'For You: Item 1', type: 'textarea', rows: 2 },
        { name: 'forYouItem2', label: 'For You: Item 2', type: 'textarea', rows: 2 },
        { name: 'forYouItem3', label: 'For You: Item 3', type: 'textarea', rows: 2 },
        { name: 'forYouItem4', label: 'For You: Item 4', type: 'textarea', rows: 2 },
        { name: 'forYouFootnote', label: 'For You: Footnote line (bold, bottom of box)', type: 'text', aiRewrite: true },
        { name: 'notForYouHeading', label: 'Not For You Column: Heading', type: 'text' },
        { name: 'notForYouItem1', label: 'Not For You: Item', type: 'textarea', rows: 2 },

        // Founders Stop Guessing
        { name: 'guessingHeading', label: 'Stop Guessing: Heading', type: 'text', aiRewrite: true },
        { name: 'guessingP1', label: 'Stop Guessing: Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'guessingQuote', label: 'Stop Guessing: Quote', type: 'textarea', rows: 2 },
        { name: 'guessingQuoteAttr', label: 'Stop Guessing: Quote Attribution', type: 'text' },

        // Picture This: One Year From Now
        { name: 'pictureHeading', label: 'Picture This: Heading', type: 'text', aiRewrite: true },
        { name: 'pictureLine1', label: 'Picture This: Line 1', type: 'text' },
        { name: 'pictureLine2', label: 'Picture This: Line 2', type: 'text' },
        { name: 'pictureLine3', label: 'Picture This: Line 3', type: 'text' },
        { name: 'pictureLine4', label: 'Picture This: Line 4', type: 'text' },
        { name: 'pictureLine5', label: 'Picture This: Line 5', type: 'text' },
        { name: 'pictureLine6', label: 'Picture This: Line 6', type: 'text' },
        { name: 'pictureClosing', label: 'Picture This: Closing line (orange)', type: 'text', aiRewrite: true },

        // Why Founders Hire Me
        { name: 'whyHireHeading', label: 'Why Hire Me: Heading', type: 'text', aiRewrite: true },
        { name: 'whyHireImage', label: 'Why Hire Me: Headshot Image', type: 'image', folder: 'general' },
        { name: 'whyHireP1', label: 'Why Hire Me: Intro paragraph', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'whyHireItem1', label: 'Why Hire Me: Item 1', type: 'text' },
        { name: 'whyHireItem2', label: 'Why Hire Me: Item 2', type: 'text' },
        { name: 'whyHireItem3', label: 'Why Hire Me: Item 3', type: 'text' },
        { name: 'whyHireItem4', label: 'Why Hire Me: Item 4', type: 'text' },
        { name: 'whyHireClosing', label: 'Why Hire Me: Closing line', type: 'text', aiRewrite: true },

        // Your Investment
        { name: 'investHeading', label: 'Investment: Heading', type: 'text', aiRewrite: true },
        { name: 'investP1', label: 'Investment: Paragraph', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'priceHeadline', label: 'Investment: Price Headline (bold navy)', type: 'text' },
        { name: 'priceLine1', label: 'Investment: Price line (after headline)', type: 'textarea', rows: 2 },
        { name: 'priceLine2', label: 'Investment: Terms line', type: 'textarea', rows: 2 },
        { name: 'priceItem1', label: 'Investment: Item 1', type: 'text' },
        { name: 'priceItem2', label: 'Investment: Item 2', type: 'text' },
        { name: 'priceItem3', label: 'Investment: Item 3', type: 'text' },
        { name: 'priceItem4', label: 'Investment: Item 4', type: 'textarea', rows: 2 },
        { name: 'investFootnote', label: 'Investment: Footnote (below price box)', type: 'text', aiRewrite: true },

        // When Sales Stops Depending
        { name: 'stopHeading', label: 'Sales Stops Depending: Heading', type: 'text', aiRewrite: true },
        { name: 'stopItem1', label: 'Sales Stops: Item 1', type: 'text' },
        { name: 'stopItem2', label: 'Sales Stops: Item 2', type: 'text' },
        { name: 'stopItem3', label: 'Sales Stops: Item 3', type: 'text' },
        { name: 'stopItem4', label: 'Sales Stops: Item 4', type: 'text' },
        { name: 'stopItem5', label: 'Sales Stops: Item 5', type: 'text' },
        { name: 'stopItem6', label: 'Sales Stops: Item 6', type: 'text' },
        { name: 'stopClosing', label: 'Sales Stops: Closing line', type: 'text', aiRewrite: true },

        // Every Month You Wait
        { name: 'waitHeading', label: 'Every Month You Wait: Heading', type: 'text', aiRewrite: true },
        { name: 'waitItem1', label: 'Wait: Item 1', type: 'text' },
        { name: 'waitItem2', label: 'Wait: Item 2', type: 'text' },
        { name: 'waitItem3', label: 'Wait: Item 3', type: 'text' },
        { name: 'waitItem4', label: 'Wait: Item 4', type: 'text' },
        { name: 'waitItem5', label: 'Wait: Item 5', type: 'text' },
        { name: 'waitClosing', label: 'Wait: Closing line', type: 'textarea', aiRewrite: true, rows: 2 },

        // FAQ
        { name: 'faqHeading', label: 'FAQ: Heading', type: 'text' },
        { name: 'faq1Question', label: 'FAQ 1: Question', type: 'text' },
        { name: 'faq1Answer', label: 'FAQ 1: Answer', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'faq2Question', label: 'FAQ 2: Question', type: 'text' },
        { name: 'faq2Answer', label: 'FAQ 2: Answer', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'faq3Question', label: 'FAQ 3: Question', type: 'text' },
        { name: 'faq3Answer', label: 'FAQ 3: Answer', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'faq4Question', label: 'FAQ 4: Question', type: 'text' },
        { name: 'faq4Answer', label: 'FAQ 4: Answer', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'faq5Question', label: 'FAQ 5: Question', type: 'text' },
        { name: 'faq5Answer', label: 'FAQ 5: Answer', type: 'textarea', aiRewrite: true, rows: 3 },
        { name: 'faq6Question', label: 'FAQ 6: Question', type: 'text' },
        { name: 'faq6Answer', label: 'FAQ 6: Answer', type: 'textarea', aiRewrite: true, rows: 3 },

        // Final band
        { name: 'finalHeading', label: 'Final Band: Heading', type: 'text', aiRewrite: true },
        { name: 'finalSubhead', label: 'Final Band: Sub-heading', type: 'text' },
        { name: 'finalLine', label: 'Final Band: Description line', type: 'textarea', rows: 2 },

        // Footer
        { name: 'footerText', label: 'Footer: Text (before the louiebernstein.com link)', type: 'text' },
      ]}
      previewUrl="/ceo"
    />
  )
}
