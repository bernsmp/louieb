-- Create blog_posts table
-- This table stores all blog post content, metadata, and display settings
-- RLS policies allow authenticated users to manage posts

CREATE TABLE IF NOT EXISTS public.blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  linkedin_url text,
  published_date date NOT NULL,
  image text,
  image_alt text,
  author text DEFAULT 'Louie Bernstein',
  tags text[],
  display_order integer DEFAULT 0,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Policy 1: Public READ access
-- Anyone can view published blog posts
CREATE POLICY "Public read access for blog posts"
  ON public.blog_posts
  FOR SELECT
  USING (true);

-- Policy 2: Authenticated INSERT access
-- Only authenticated users can create new blog posts
CREATE POLICY "Authenticated insert access for blog posts"
  ON public.blog_posts
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- Policy 3: Authenticated UPDATE access
-- Only authenticated users can update blog posts
CREATE POLICY "Authenticated update access for blog posts"
  ON public.blog_posts
  FOR UPDATE
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Policy 4: Authenticated DELETE access
-- Only authenticated users can delete blog posts
CREATE POLICY "Authenticated delete access for blog posts"
  ON public.blog_posts
  FOR DELETE
  USING (auth.role() = 'authenticated');

-- Create index on display_order for efficient sorting
CREATE INDEX idx_blog_posts_display_order ON public.blog_posts (display_order);

-- Create index on published_date for chronological sorting
CREATE INDEX idx_blog_posts_published_date ON public.blog_posts (published_date DESC);

-- Create index on is_featured for featured post queries
CREATE INDEX idx_blog_posts_is_featured ON public.blog_posts (is_featured) WHERE is_featured = true;

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically update updated_at on row updates
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();
