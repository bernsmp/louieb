-- Create RLS policies for media storage bucket
-- Policies:
-- 1. Public READ access - anyone can view images via public URL
-- 2. Authenticated WRITE access - only logged-in users can upload
-- 3. Authenticated DELETE access - only logged-in users can delete

-- Enable RLS on storage.objects if not already enabled
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Policy 1: Public READ access
-- Anyone (including unauthenticated users) can read files from the media bucket
CREATE POLICY "Public read access for media bucket"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'media');

-- Policy 2: Authenticated WRITE access
-- Only authenticated users can upload files to the media bucket
CREATE POLICY "Authenticated upload access to media bucket"
  ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'media'
    AND auth.role() = 'authenticated'
  );

-- Policy 3: Authenticated DELETE access
-- Only authenticated users can delete files from the media bucket
CREATE POLICY "Authenticated delete access to media bucket"
  ON storage.objects
  FOR DELETE
  USING (
    bucket_id = 'media'
    AND auth.role() = 'authenticated'
  );
