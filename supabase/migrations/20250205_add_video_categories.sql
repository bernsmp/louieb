-- Create video_categories table
-- Stores category labels for organizing videos (e.g., "Sales Fundamentals", "Team Management")

CREATE TABLE IF NOT EXISTS public.video_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.video_categories ENABLE ROW LEVEL SECURITY;

-- Policy 1: Public READ access
CREATE POLICY "Public read access for video categories"
  ON public.video_categories
  FOR SELECT
  USING (true);

-- Policy 2: Authenticated INSERT access
CREATE POLICY "Authenticated insert access for video categories"
  ON public.video_categories
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- Policy 3: Authenticated UPDATE access
CREATE POLICY "Authenticated update access for video categories"
  ON public.video_categories
  FOR UPDATE
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Policy 4: Authenticated DELETE access
CREATE POLICY "Authenticated delete access for video categories"
  ON public.video_categories
  FOR DELETE
  USING (auth.role() = 'authenticated');

-- Index on display_order for sorting
CREATE INDEX idx_video_categories_display_order ON public.video_categories (display_order);

-- Trigger to auto-update updated_at (reuses existing function)
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.video_categories
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Add category_id to videos table (nullable FK, ON DELETE SET NULL)
ALTER TABLE public.videos
  ADD COLUMN IF NOT EXISTS category_id uuid REFERENCES public.video_categories(id) ON DELETE SET NULL;

-- Index for filtering videos by category
CREATE INDEX idx_videos_category_id ON public.videos (category_id);
