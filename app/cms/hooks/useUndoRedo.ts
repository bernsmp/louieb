import { useState, useCallback } from 'react'

interface UseUndoRedoReturn<T> {
  state: T
  setState: (newState: T) => void
  undo: () => void
  redo: () => void
  canUndo: boolean
  canRedo: boolean
}

export function useUndoRedo<T>(initialState: T): UseUndoRedoReturn<T> {
  const [history, setHistory] = useState<T[]>([initialState])
  const [currentIndex, setCurrentIndex] = useState(0)

  const state = history[currentIndex]
  const canUndo = currentIndex > 0
  const canRedo = currentIndex < history.length - 1

  const setState = useCallback((newState: T) => {
    setHistory((prev) => {
      // Remove any future states if we're not at the end
      const newHistory = prev.slice(0, currentIndex + 1)

      // Add new state
      newHistory.push(newState)

      // Keep max 20 states
      if (newHistory.length > 20) {
        newHistory.shift()
        setCurrentIndex(newHistory.length - 1)
        return newHistory
      }

      setCurrentIndex(newHistory.length - 1)
      return newHistory
    })
  }, [currentIndex])

  const undo = useCallback(() => {
    if (canUndo) {
      setCurrentIndex((prev) => prev - 1)
    }
  }, [canUndo])

  const redo = useCallback(() => {
    if (canRedo) {
      setCurrentIndex((prev) => prev + 1)
    }
  }, [canRedo])

  return {
    state,
    setState,
    undo,
    redo,
    canUndo,
    canRedo,
  }
}
