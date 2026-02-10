-- Add category_id to blog_posts table
-- Reuses video_categories as shared categories for both videos and blog posts

ALTER TABLE public.blog_posts
  ADD COLUMN IF NOT EXISTS category_id uuid REFERENCES public.video_categories(id) ON DELETE SET NULL;

-- Index for filtering blog posts by category
CREATE INDEX IF NOT EXISTS idx_blog_posts_category_id ON public.blog_posts (category_id);
