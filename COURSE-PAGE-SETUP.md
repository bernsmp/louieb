# Course Page Setup Instructions

## ✅ What's Been Created

1. **Course Page** (`/app/course/page.tsx`)
   - Complete page structure with all 12 course modules
   - Video preview section (first 5 videos)
   - Results section with metrics
   - Multiple CTAs to YouTube playlist
   - SEO-optimized metadata

2. **Navigation Updated**
   - Added "Course" link to FloatingNavWrapper
   - Uses GraduationCap icon from lucide-react

## 🔧 What Needs to Be Updated

### 1. YouTube Video IDs

Replace the placeholder video IDs in `previewVideos` array:

```tsx
const previewVideos = [
  {
    title: "Introduction: The Founder's and CEO's Sales System",
    videoId: "VIDEO_ID_1", // ← Replace with actual YouTube video ID
    description: "...",
  },
  // ... etc
];
```

**How to get video IDs:**
- Go to YouTube video
- Copy the ID from URL: `youtube.com/watch?v=VIDEO_ID_HERE`
- Or use the video ID from the playlist

### 2. YouTube Playlist ID

Replace `YOUR_PLAYLIST_ID` in two places:
- Line ~200: `href="https://www.youtube.com/playlist?list=YOUR_PLAYLIST_ID"`
- Line ~350: Same URL

**How to get playlist ID:**
- Go to YouTube playlist
- Copy the ID from URL: `youtube.com/playlist?list=PLAYLIST_ID_HERE`

### 3. Video Embeds

Uncomment the iframe code and comment out the placeholder div:

```tsx
{/* Replace with actual video embed */}
<div className="flex h-full items-center justify-center text-white">
  <p className="text-lg">Video {index + 1}: {video.title}</p>
</div>
{/* <iframe
  src={`https://www.youtube.com/embed/${video.videoId}`}
  title={video.title}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="h-full w-full"
/> */}
```

**Change to:**

```tsx
<iframe
  src={`https://www.youtube.com/embed/${video.videoId}`}
  title={video.title}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="h-full w-full"
/>
```

## 📋 Course Modules Included

All 12 modules from your description are included:
1. Hiring System (120+ questions)
2. Sales Playbook Templates
3. LinkedIn Lead Generation
4. Sales Pipeline Management
5. Sales & Marketing Alignment
6. Sales & 1:1 Meetings
7. Sales Manager's Checklist (12 steps)
8. 588-Page Sales Training PDF
9. Cold Call & Voicemail Scripts
10. AI Impact on Sales
11. CRM Selection Guide
12. Video Guidance

## 🎨 Design Features

- **Hero Section**: Dark gradient with course title and value prop
- **Module Cards**: Clean grid layout with icons and benefits
- **Video Previews**: First 5 videos embedded with descriptions
- **Results Section**: Metrics (61%, 120+, 20, 588)
- **Case Study Highlight**: 61% increase testimonial
- **Multiple CTAs**: YouTube links throughout

## 🔍 SEO & AEO Optimization

- **Title**: "The Founder's and CEO's Sales System | Complete Sales Training Course"
- **Description**: Includes key phrases and benefits
- **Keywords**: Sales system, CEO sales training, fractional sales leader, etc.
- **Structured Content**: Clear sections for AI crawlers
- **Internal Links**: Links to contact page

## 📝 Copywriting Framework Applied

- **Ogilvy**: Benefits over features, specific numbers (61%, 120+, 20 steps)
- **Halbert**: Curiosity-driven headlines, momentum-building CTAs
- **Vitale**: Power words (FREE, Transform, Break through)
- **Boag**: Scannable layout, clear hierarchy, web-optimized

## 🚀 Next Steps

1. Get YouTube playlist ID and video IDs
2. Update the placeholders in `page.tsx`
3. Uncomment video embed code
4. Test the page locally
5. Deploy to Vercel

## 💡 Optional Enhancements

- Add email capture before YouTube redirect
- Add downloadable resources section
- Add FAQ section
- Add testimonials carousel
- Add progress tracker for course completion

