-- Louie CMS Supabase Schema
-- Run this in the Supabase SQL Editor to set up the database

-- ============================================================================
-- SITE CONTENT TABLE (JSON-backed settings for all page sections)
-- ============================================================================
CREATE TABLE IF NOT EXISTS site_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section TEXT UNIQUE NOT NULL,
  content JSONB NOT NULL DEFAULT '{}',
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  updated_by TEXT
);

-- Create index for fast section lookups
CREATE INDEX IF NOT EXISTS idx_site_content_section ON site_content(section);

-- Trigger to auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_site_content_updated_at
  BEFORE UPDATE ON site_content
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- TESTIMONIALS TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quote TEXT NOT NULL,
  author TEXT NOT NULL,
  role TEXT,
  company TEXT,
  image_url TEXT,
  featured BOOLEAN DEFAULT false,
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_testimonials_display_order ON testimonials(display_order);
CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON testimonials(featured);

CREATE TRIGGER update_testimonials_updated_at
  BEFORE UPDATE ON testimonials
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- FAQ ITEMS TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS faq_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  display_order INT DEFAULT 0,
  page TEXT DEFAULT 'homepage', -- 'homepage', 'fslPage', etc.
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_faq_items_display_order ON faq_items(display_order);
CREATE INDEX IF NOT EXISTS idx_faq_items_page ON faq_items(page);

CREATE TRIGGER update_faq_items_updated_at
  BEFORE UPDATE ON faq_items
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- VIDEOS TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS videos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  youtube_id TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  page TEXT DEFAULT 'featured', -- 'featured', 'course', 'fslPage', 'newsletter'
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_videos_display_order ON videos(display_order);
CREATE INDEX IF NOT EXISTS idx_videos_page ON videos(page);

CREATE TRIGGER update_videos_updated_at
  BEFORE UPDATE ON videos
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- SERVICES TABLE (for service items with ordering)
-- ============================================================================
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT,
  highlight BOOLEAN DEFAULT false,
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_services_display_order ON services(display_order);

CREATE TRIGGER update_services_updated_at
  BEFORE UPDATE ON services
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- PROCESS STEPS TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS process_steps (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  step_number TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_process_steps_display_order ON process_steps(display_order);

CREATE TRIGGER update_process_steps_updated_at
  BEFORE UPDATE ON process_steps
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================================

-- Enable RLS on all tables
ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE faq_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE process_steps ENABLE ROW LEVEL SECURITY;

-- Public read access for all tables (needed for the website)
CREATE POLICY "Public read access" ON site_content FOR SELECT USING (true);
CREATE POLICY "Public read access" ON testimonials FOR SELECT USING (true);
CREATE POLICY "Public read access" ON faq_items FOR SELECT USING (true);
CREATE POLICY "Public read access" ON videos FOR SELECT USING (true);
CREATE POLICY "Public read access" ON services FOR SELECT USING (true);
CREATE POLICY "Public read access" ON process_steps FOR SELECT USING (true);

-- Admin write access (authenticated users only)
CREATE POLICY "Admin insert access" ON site_content FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin update access" ON site_content FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin delete access" ON site_content FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Admin insert access" ON testimonials FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin update access" ON testimonials FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin delete access" ON testimonials FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Admin insert access" ON faq_items FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin update access" ON faq_items FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin delete access" ON faq_items FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Admin insert access" ON videos FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin update access" ON videos FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin delete access" ON videos FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Admin insert access" ON services FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin update access" ON services FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin delete access" ON services FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Admin insert access" ON process_steps FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin update access" ON process_steps FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin delete access" ON process_steps FOR DELETE USING (auth.role() = 'authenticated');

-- ============================================================================
-- INITIAL SECTION RECORDS (empty, will be populated on first edit)
-- ============================================================================
INSERT INTO site_content (section, content) VALUES
  ('hero', '{}'),
  ('credentials', '{}'),
  ('about', '{}'),
  ('valueProposition', '{}'),
  ('fractionalSalesLeader', '{}'),
  ('servicesSection', '{}'),
  ('processSection', '{}'),
  ('faqSection', '{}'),
  ('awards', '{}'),
  ('testimonialsSection', '{}'),
  ('contactSection', '{}'),
  ('social', '{}'),
  ('contact', '{}'),
  ('footer', '{}'),
  ('newsletter', '{}'),
  ('newsletterPage', '{}'),
  ('videosPage', '{}'),
  ('course', '{}'),
  ('coursePage', '{}'),
  ('toolsPage', '{}'),
  ('roiCalculatorPage', '{}'),
  ('fslPage', '{}'),
  ('seo', '{}')
ON CONFLICT (section) DO NOTHING;

