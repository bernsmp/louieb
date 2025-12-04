'use client'

import { useState, useCallback, useRef } from 'react'

interface SortableListProps<T> {
  items: T[]
  getId: (item: T) => string
  renderItem: (item: T, index: number, isDragging: boolean) => React.ReactNode
  onReorder: (newItems: T[]) => void
  disabled?: boolean
  className?: string
}

/**
 * A reusable drag-and-drop sortable list component
 * Uses native HTML5 drag and drop API
 */
export function SortableList<T>({
  items,
  getId,
  renderItem,
  onReorder,
  disabled = false,
  className = '',
}: SortableListProps<T>) {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null)
  const dragNodeRef = useRef<HTMLDivElement | null>(null)

  const handleDragStart = useCallback(
    (e: React.DragEvent<HTMLDivElement>, index: number) => {
      if (disabled) return

      setDraggedIndex(index)
      dragNodeRef.current = e.currentTarget

      // Set drag image (optional - uses element by default)
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('text/plain', index.toString())

      // Add a slight delay to allow the drag image to be set
      setTimeout(() => {
        if (dragNodeRef.current) {
          dragNodeRef.current.style.opacity = '0.5'
        }
      }, 0)
    },
    [disabled]
  )

  const handleDragEnd = useCallback(() => {
    if (dragNodeRef.current) {
      dragNodeRef.current.style.opacity = '1'
    }
    setDraggedIndex(null)
    setDragOverIndex(null)
    dragNodeRef.current = null
  }, [])

  const handleDragOver = useCallback(
    (e: React.DragEvent<HTMLDivElement>, index: number) => {
      e.preventDefault()
      e.dataTransfer.dropEffect = 'move'

      if (draggedIndex === null || draggedIndex === index) return

      setDragOverIndex(index)
    },
    [draggedIndex]
  )

  const handleDragLeave = useCallback(() => {
    setDragOverIndex(null)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
      e.preventDefault()

      if (draggedIndex === null || draggedIndex === dropIndex) {
        handleDragEnd()
        return
      }

      // Reorder the items
      const newItems = [...items]
      const [draggedItem] = newItems.splice(draggedIndex, 1)
      newItems.splice(dropIndex, 0, draggedItem)

      onReorder(newItems)
      handleDragEnd()
    },
    [draggedIndex, items, onReorder, handleDragEnd]
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>, index: number) => {
      if (disabled) return

      // Arrow up - move item up
      if (e.key === 'ArrowUp' && index > 0) {
        e.preventDefault()
        const newItems = [...items]
        const [item] = newItems.splice(index, 1)
        newItems.splice(index - 1, 0, item)
        onReorder(newItems)
      }

      // Arrow down - move item down
      if (e.key === 'ArrowDown' && index < items.length - 1) {
        e.preventDefault()
        const newItems = [...items]
        const [item] = newItems.splice(index, 1)
        newItems.splice(index + 1, 0, item)
        onReorder(newItems)
      }
    },
    [disabled, items, onReorder]
  )

  return (
    <div className={`sortable-list ${className}`}>
      {items.map((item, index) => {
        const id = getId(item)
        const isDragging = draggedIndex === index
        const isDragOver = dragOverIndex === index

        return (
          <div
            key={id}
            draggable={!disabled}
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnd={handleDragEnd}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            tabIndex={disabled ? -1 : 0}
            role="listitem"
            aria-grabbed={isDragging}
            className={`sortable-item ${isDragging ? 'sortable-item--dragging' : ''} ${
              isDragOver ? 'sortable-item--drag-over' : ''
            } ${disabled ? 'sortable-item--disabled' : ''}`}
            style={{
              cursor: disabled ? 'default' : 'grab',
            }}
          >
            {/* Drag handle */}
            {!disabled && (
              <div className="sortable-item__handle" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle cx="4" cy="4" r="1.5" />
                  <circle cx="4" cy="8" r="1.5" />
                  <circle cx="4" cy="12" r="1.5" />
                  <circle cx="10" cy="4" r="1.5" />
                  <circle cx="10" cy="8" r="1.5" />
                  <circle cx="10" cy="12" r="1.5" />
                </svg>
              </div>
            )}

            {/* Item content */}
            <div className="sortable-item__content">
              {renderItem(item, index, isDragging)}
            </div>

            {/* Move buttons for keyboard accessibility */}
            {!disabled && (
              <div className="sortable-item__buttons">
                <button
                  type="button"
                  onClick={() => {
                    if (index > 0) {
                      const newItems = [...items]
                      const [item] = newItems.splice(index, 1)
                      newItems.splice(index - 1, 0, item)
                      onReorder(newItems)
                    }
                  }}
                  disabled={index === 0}
                  className="sortable-item__button"
                  title="Move up"
                  aria-label="Move up"
                >
                  ↑
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (index < items.length - 1) {
                      const newItems = [...items]
                      const [item] = newItems.splice(index, 1)
                      newItems.splice(index + 1, 0, item)
                      onReorder(newItems)
                    }
                  }}
                  disabled={index === items.length - 1}
                  className="sortable-item__button"
                  title="Move down"
                  aria-label="Move down"
                >
                  ↓
                </button>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

// Also export as default for convenience
export default SortableList

