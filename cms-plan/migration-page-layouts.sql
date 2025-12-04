-- Migration: Add page layout entries for section ordering
-- Run this in Supabase SQL Editor

-- Insert default page layout configurations
-- These store the section order for each page that supports drag-and-drop section reordering

INSERT INTO site_content (section, content) VALUES
  ('page_layout_fractional-sales-leader', '{"sections": ["hero", "videos", "intro", "faq", "finalCta"]}'),
  ('page_layout_homepage', '{"sections": ["hero", "credentials", "about", "valueProposition", "services", "process", "testimonials", "faq", "contact"]}')
ON CONFLICT (section) DO NOTHING;

