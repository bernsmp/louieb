'use client'

import { useState } from 'react'
import Link from 'next/link'

interface VideoWithSlug {
  videoId: string
  title: string
  description?: string
  slug: string
  categoryId?: string
  categoryName?: string
  categorySlug?: string
}

interface VideoCategory {
  id: string
  name: string
  slug: string
}

interface VideoGridProps {
  videos: VideoWithSlug[]
  categories: VideoCategory[]
}

const INITIAL_COUNT = 6

export default function VideoGrid({ videos, categories }: VideoGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [expanded, setExpanded] = useState(false)

  const filtered = activeCategory === 'all'
    ? videos
    : videos.filter((v) => v.categoryId === activeCategory)

  const visible = expanded ? filtered : filtered.slice(0, INITIAL_COUNT)
  const hasMore = filtered.length > INITIAL_COUNT

  // Reset expanded when switching categories
  const handleCategoryChange = (id: string) => {
    setActiveCategory(id)
    setExpanded(false)
  }

  return (
    <div>
      {/* Filter Tabs */}
      {categories.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`rounded-full px-5 py-2 font-sans text-sm font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-[#0966c2] text-white'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`rounded-full px-5 py-2 font-sans text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-[#0966c2] text-white'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      )}

      {/* Video Card Grid */}
      {filtered.length === 0 ? (
        <p className="py-12 text-center font-sans text-muted-foreground">
          No videos in this category yet.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((video) => (
              <Link
                key={video.videoId}
                href={`/videos/${video.slug}`}
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                    alt={video.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-sans text-base font-semibold text-foreground line-clamp-2">
                    {video.title}
                  </h3>
                  {video.categoryName && (
                    <span className="mt-2 inline-block rounded-full bg-muted px-2.5 py-0.5 font-sans text-xs text-muted-foreground">
                      {video.categoryName}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Show More / Show Less Toggle */}
          {hasMore && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setExpanded(!expanded)}
                className="rounded-lg border border-border px-6 py-2.5 font-sans text-sm font-medium text-muted-foreground transition-colors hover:border-[#0966c2] hover:text-[#0966c2]"
              >
                {expanded
                  ? 'Show Less'
                  : `Show All ${filtered.length} Videos`}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
