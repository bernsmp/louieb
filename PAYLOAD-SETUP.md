# Payload CMS Setup

## Quick Start

### 1. Create MongoDB Atlas Database (Free)

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Create free account or sign in
3. Create a new cluster (free tier M0)
4. Click "Connect" → "Connect your application"
5. Copy the connection string

### 2. Create `.env.local` file

Create a file called `.env.local` in the website root with:

```bash
# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/louiebernstein?retryWrites=true&w=majority

# Payload Secret (use a secure random string in production)
PAYLOAD_SECRET=louie-bernstein-payload-secret-change-in-prod
```

Replace:
- `username` with your MongoDB username
- `password` with your MongoDB password
- `cluster` with your cluster address

### 3. Run Development Server

```bash
npm run dev
```

### 4. Access Admin Panel

Go to: http://localhost:3000/admin

First visit will prompt you to create an admin user.

---

## Content Types Created

### Articles
- Title, slug, content (rich text)
- Featured image
- SEO fields (title, description, keywords)
- VoiceCraft metadata (AI/human, voice profile, style influences)
- Status (draft/published)

### Videos
- Title, YouTube ID, description
- Category (hero, course, short, featured)
- Playlist ID (for course videos)
- Display order

### Testimonials
- Quote, author, role, company
- Optional image
- Featured flag
- Display order

### Site Settings (Global)
- Hero section (headline, tagline, video ID, CTAs)
- Social links (LinkedIn, YouTube, Calendly)
- Newsletter settings
- Course playlist ID
- Contact info

---

## API Endpoints

After setup, these endpoints are available:

```
GET  /api/articles          - List all articles
GET  /api/articles/:id      - Get single article
POST /api/articles          - Create article (auth required)

GET  /api/videos            - List all videos
GET  /api/testimonials      - List all testimonials
GET  /api/globals/site-settings - Get site settings
```

---

## VoiceCraft Integration

The API is ready for VoiceCraft to:
1. Create articles via POST /api/articles
2. Update videos via PATCH /api/videos/:id
3. Add testimonials via POST /api/testimonials
4. Update settings via PATCH /api/globals/site-settings

Authentication: Use API key or JWT token from Payload.

---

## Vercel Deployment

Add these environment variables in Vercel:
- `MONGODB_URI` - Your MongoDB connection string
- `PAYLOAD_SECRET` - A secure random string

---

## File Structure

```
website/
├── payload.config.ts       # Main Payload config
├── payload/
│   ├── collections/
│   │   ├── Articles.ts
│   │   ├── Videos.ts
│   │   ├── Testimonials.ts
│   │   ├── Users.ts
│   │   └── Media.ts
│   └── globals/
│       └── SiteSettings.ts
├── app/
│   ├── (payload)/          # Payload admin routes
│   │   ├── admin/
│   │   └── api/
│   └── (frontend)/         # Public site (existing)
└── public/
    └── media/              # Uploaded files
```

