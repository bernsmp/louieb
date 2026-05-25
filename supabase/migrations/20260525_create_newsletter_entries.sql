-- Create newsletter_entries table
-- Stores Sunday Starter newsletter entries shown on /site-map under the "Newsletter" section.
-- Managed via /cms/newsletter-entries.

CREATE TABLE IF NOT EXISTS public.newsletter_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  url text NOT NULL,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE public.newsletter_entries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access for newsletter entries"
  ON public.newsletter_entries
  FOR SELECT
  USING (true);

CREATE POLICY "Authenticated insert access for newsletter entries"
  ON public.newsletter_entries
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated update access for newsletter entries"
  ON public.newsletter_entries
  FOR UPDATE
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated delete access for newsletter entries"
  ON public.newsletter_entries
  FOR DELETE
  USING (auth.role() = 'authenticated');

CREATE INDEX IF NOT EXISTS idx_newsletter_entries_display_order
  ON public.newsletter_entries (display_order);

CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.newsletter_entries
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();
