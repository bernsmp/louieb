'use client'

import { useState } from 'react'

interface LiteYouTubeEmbedProps {
  videoId?: string
  playlistId?: string
  title: string
  thumbnailUrl?: string
}

// Click-to-play facade: renders a thumbnail + play button and only loads the
// YouTube iframe (~1.5MB of player JS) after the visitor clicks.
export default function LiteYouTubeEmbed({
  videoId,
  playlistId,
  title,
  thumbnailUrl,
}: LiteYouTubeEmbedProps) {
  const [activated, setActivated] = useState(false)

  if (activated) {
    const src = playlistId
      ? `https://www.youtube-nocookie.com/embed/videoseries?list=${playlistId}&autoplay=1`
      : `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`
    return (
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setActivated(true)}
      aria-label={`Play ${title}`}
      className="group/play relative block h-full w-full cursor-pointer bg-black"
    >
      {thumbnailUrl || videoId ? (
        <img
          src={thumbnailUrl || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      ) : (
        <span className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900" />
      )}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0966c2] shadow-lg transition-transform group-hover/play:scale-110">
          <svg
            viewBox="0 0 24 24"
            className="ml-1 h-6 w-6 fill-white"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  )
}
