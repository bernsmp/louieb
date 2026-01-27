'use client'

import { useState, useEffect, useCallback } from 'react'
import { listImages } from '@/lib/supabase'
import { ImageUploader } from './ImageUploader'

interface ImagePickerProps {
  isOpen: boolean
  onClose: () => void
  onSelect: (url: string) => void
  folder?: string
}

type ViewMode = 'browse' | 'upload'

export function ImagePicker({
  isOpen,
  onClose,
  folder,
  onSelect
}: ImagePickerProps) {
  const [images, setImages] = useState<{ name: string; url: string; path: string }[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<ViewMode>('browse')

  const loadImages = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const imageList = await listImages(folder)
      setImages(imageList)
    } catch (err) {
      console.error('Error loading images:', err)
      setError('Failed to load images. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }, [folder])

  useEffect(() => {
    if (isOpen) {
      loadImages()
      setViewMode('browse')
    }
  }, [isOpen, loadImages])

  const handleImageSelect = (url: string) => {
    onSelect(url)
    onClose()
  }

  const handleUploadComplete = (url: string | null) => {
    if (url) {
      onSelect(url)
      onClose()
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="image-picker-overlay" onClick={handleBackdropClick}>
      <div className="image-picker-modal">
        {/* Header */}
        <div className="image-picker-modal__header">
          <div>
            <h2 className="image-picker-modal__title">Select Image</h2>
            {folder && (
              <p className="image-picker-modal__subtitle">
                Browsing: {folder}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="image-picker-modal__close"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* View Mode Toggle */}
        <div className="image-picker-modal__tabs">
          <button
            type="button"
            className={`image-picker-modal__tab ${viewMode === 'browse' ? 'image-picker-modal__tab--active' : ''}`}
            onClick={() => setViewMode('browse')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            Browse Images
          </button>
          <button
            type="button"
            className={`image-picker-modal__tab ${viewMode === 'upload' ? 'image-picker-modal__tab--active' : ''}`}
            onClick={() => setViewMode('upload')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
            </svg>
            Upload New
          </button>
        </div>

        {/* Content */}
        <div className="image-picker-modal__body">
          {viewMode === 'browse' ? (
            <>
              {isLoading ? (
                <div className="image-picker-modal__loading">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12a9 9 0 11-6.219-8.56" />
                  </svg>
                  <p>Loading images...</p>
                </div>
              ) : error ? (
                <div className="image-picker-modal__error">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <p>{error}</p>
                  <button
                    type="button"
                    onClick={loadImages}
                    className="btn btn--secondary btn--small"
                  >
                    Try Again
                  </button>
                </div>
              ) : images.length === 0 ? (
                <div className="image-picker-modal__empty">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <p>No images found</p>
                  <button
                    type="button"
                    onClick={() => setViewMode('upload')}
                    className="btn btn--secondary btn--small"
                  >
                    Upload your first image
                  </button>
                </div>
              ) : (
                <div className="image-picker-modal__grid">
                  {images.map((image) => (
                    <button
                      key={image.path}
                      type="button"
                      className="image-picker-modal__image"
                      onClick={() => handleImageSelect(image.url)}
                      title={image.name}
                    >
                      <img src={image.url} alt={image.name} />
                      <div className="image-picker-modal__image-overlay">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="image-picker-modal__upload">
              <ImageUploader
                value={undefined}
                onChange={handleUploadComplete}
                folder={folder || 'general'}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
