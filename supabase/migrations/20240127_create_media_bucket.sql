-- Create media storage bucket for CMS images
-- This migration sets up the storage bucket for storing media files

INSERT INTO storage.buckets (id, name, public)
VALUES ('media', 'media', true)
ON CONFLICT (id) DO NOTHING;
