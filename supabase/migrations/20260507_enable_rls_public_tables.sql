-- Fix Supabase Linter ERROR: rls_disabled_in_public
--
-- All app reads/writes go through the SUPABASE_SERVICE_ROLE_KEY on the server,
-- which bypasses RLS. The browser never queries these tables directly with the
-- anon key (it goes through Next.js API routes in app/api/cms/**).
--
-- Therefore enabling RLS with NO policies is the correct fix:
--   - service role keeps full access (unchanged)
--   - anon role is denied (was never used to read these tables)
--   - linter warnings clear

ALTER TABLE public.site_content     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faq_items        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.videos           ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services         ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.video_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.process_steps    ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts       ENABLE ROW LEVEL SECURITY;
