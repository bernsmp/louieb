# Deployment Instructions

## ✅ Git Repository Setup Complete

The website has been committed and is ready to push to GitHub.

## Push to GitHub

Run this command in the website directory:

```bash
cd "/Users/maxb/Desktop/Vibe Projects/aeo-optimizer-business/clients/louiebernstein/website"
git push -u origin main
```

If you get authentication errors, you can:
1. Use GitHub Desktop
2. Use SSH: `git remote set-url origin git@github.com:bernsmp/louieb.git`
3. Use Personal Access Token (recommended for HTTPS)

## Deploy to Vercel

### Option 1: Import from GitHub (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Import from GitHub: Select `bernsmp/louieb`
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

### Option 2: Vercel CLI

```bash
npm i -g vercel
cd "/Users/maxb/Desktop/Vibe Projects/aeo-optimizer-business/clients/louiebernstein/website"
vercel
```

## Vercel Configuration

The project should auto-detect:
- **Framework Preset:** Next.js
- **Root Directory:** `./` (root)
- **Build Command:** `next build` (auto-detected)
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `npm install` (auto-detected)

## Environment Variables (if needed)

If you need any environment variables, add them in Vercel:
1. Go to Project Settings → Environment Variables
2. Add any required variables

## After Deployment

Once deployed, Vercel will provide:
- Production URL: `https://louieb.vercel.app` (or custom domain)
- Preview URLs for each commit

## Next Steps

1. Push to GitHub (see above)
2. Import to Vercel
3. Share the live URL with Louie!

