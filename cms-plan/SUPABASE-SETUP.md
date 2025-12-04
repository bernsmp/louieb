    # Supabase Setup Guide

## 1. Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign in or create an account
3. Click "New Project"
4. Choose your organization
5. Enter project details:
   - **Name**: `louie-cms` (or similar)
   - **Database Password**: Generate a strong password and save it
   - **Region**: Choose closest to your users (e.g., `us-east-1`)
6. Click "Create new project" and wait for it to initialize

## 2. Run the Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New query"
3. Copy the entire contents of `schema.sql` from this folder
4. Paste it into the SQL editor
5. Click "Run" to execute
6. Verify tables were created in **Table Editor**

## 3. Get Your API Keys

1. Go to **Settings** → **API** in your Supabase dashboard
2. Copy these values:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon public** key (safe for client-side)
   - **service_role** key (server-side only, keep secret!)

## 4. Configure Environment Variables

Add these to your `.env.local` file in the louieb project root:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# CMS Feature Flag (set to 'true' to enable Supabase CMS)
USE_SUPABASE_CMS=false
```

## 5. Set Up Authentication

1. Go to **Authentication** → **Providers** in Supabase
2. Ensure **Email** provider is enabled
3. Go to **Authentication** → **Users**
4. Click "Add user" → "Create new user"
5. Enter Louie's email and a temporary password
6. The user can reset their password on first login

## 6. Disable Public Signups (Important!)

1. Go to **Authentication** → **Providers** → **Email**
2. Disable "Enable email confirmations" for easier testing
3. Go to **Authentication** → **Settings**
4. Consider disabling "Allow new users to sign up" once Louie's account is created

## 7. Test the Connection

Run the development server and check the console for any Supabase connection errors:

```bash
npm run dev
```

Visit `/admin/login` to test authentication.

## Troubleshooting

### "Invalid API key" error
- Double-check your `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Make sure there are no extra spaces or quotes

### RLS policy errors
- Ensure you ran the full schema.sql including the RLS policies
- Check the Supabase logs for specific policy violations

### Tables not appearing
- Refresh the Table Editor page
- Check the SQL Editor for any error messages from the schema run

