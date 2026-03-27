"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface LikeContextType {
  likedIds: number[]
  toggleLike: (id: number) => void
  isLiked: (id: number) => boolean
}

const LikeContext = createContext<LikeContextType | undefined>(undefined)

export const LikeProvider = ({ children }: { children: ReactNode }) => {
  const [likedIds, setLikedIds] = useState<number[]>([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const savedLikes = localStorage.getItem('food-likes')
    if (savedLikes) {
      setLikedIds(JSON.parse(savedLikes))
    }
  }, [])

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('food-likes', JSON.stringify(likedIds))
    }
  }, [likedIds, isMounted])

  const toggleLike = (id: number) => {
    setLikedIds((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const isLiked = (id: number) => likedIds.includes(id)

  return (
    <LikeContext.Provider value={{ likedIds, toggleLike, isLiked }}>
      {children}
    </LikeContext.Provider>
  )
}

export const useLike = () => {
  const context = useContext(LikeContext)
  if (context === undefined) {
    throw new Error('useLike must be used within a LikeProvider')
  }
  return context
}