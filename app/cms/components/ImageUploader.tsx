'use client'

import { useState, useRef, useCallback } from 'react'
import { uploadImage } from '@/lib/supabase'

interface ImageUploaderProps {
  value?: string  // Current image URL
  onChange: (url: string | null) => void
  folder?: string  // Storage folder, default 'general'
  accept?: string  // File types, default 'image/*'
}

export function ImageUploader({
  value,
  onChange,
  folder = 'general',
  accept = 'image/*'
}: ImageUploaderProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFile = useCallback(async (file: File) => {
    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file')
      return
    }

    // Validate file size (5MB max)
    const MAX_SIZE = 5 * 1024 * 1024
    if (file.size > MAX_SIZE) {
      setError('File size must be less than 5MB')
      return
    }

    setError(null)
    setIsUploading(true)
    setUploadProgress(0)

    try {
      // Simulate progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => Math.min(prev + 10, 90))
      }, 100)

      const result = await uploadImage(file, folder)

      clearInterval(progressInterval)
      setUploadProgress(100)

      if (result?.url) {
        onChange(result.url)
        setTimeout(() => {
          setUploadProgress(0)
        }, 500)
      } else {
        setError('Upload failed. Please try again.')
      }
    } catch (err) {
      console.error('Upload error:', err)
      setError('Upload failed. Please try again.')
    } finally {
      setIsUploading(false)
    }
  }, [folder, onChange])

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFile(files[0])
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFile(files[0])
    }
  }

  const handleBrowse = () => {
    fileInputRef.current?.click()
  }

  const handleRemove = () => {
    onChange(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="image-uploader">
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileInput}
        className="image-uploader__input"
      />

      {value ? (
        // Preview mode
        <div className="image-uploader__preview">
          <img
            src={value}
            alt="Upload preview"
            className="image-uploader__preview-img"
          />
          <div className="image-uploader__preview-overlay">
            <button
              type="button"
              onClick={handleRemove}
              className="image-uploader__remove-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
              </svg>
              Remove
            </button>
            <button
              type="button"
              onClick={handleBrowse}
              className="image-uploader__change-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              Change
            </button>
          </div>
        </div>
      ) : (
        // Upload zone
        <div
          className={`image-uploader__dropzone ${isDragging ? 'image-uploader__dropzone--dragging' : ''} ${isUploading ? 'image-uploader__dropzone--uploading' : ''}`}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleBrowse}
        >
          {isUploading ? (
            <div className="image-uploader__progress">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
              </svg>
              <div className="image-uploader__progress-bar">
                <div
                  className="image-uploader__progress-fill"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
              <p className="image-uploader__progress-text">Uploading... {uploadProgress}%</p>
            </div>
          ) : (
            <>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="image-uploader__icon">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <p className="image-uploader__text">
                <span className="image-uploader__text-primary">Click to browse</span>
                <span className="image-uploader__text-secondary"> or drag and drop</span>
              </p>
              <p className="image-uploader__hint">PNG, JPG, GIF up to 5MB</p>
            </>
          )}
        </div>
      )}

      {error && (
        <div className="image-uploader__error">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          {error}
        </div>
      )}
    </div>
  )
}
