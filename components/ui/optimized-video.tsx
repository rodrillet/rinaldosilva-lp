"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { PlayCircle } from 'lucide-react'

interface OptimizedVideoProps {
  videoSrc: string
  posterSrc: string
  title: string
  description?: string
  className?: string
  aspectRatio?: string
  preload?: 'none' | 'metadata' | 'auto'
}

export function OptimizedVideo({
  videoSrc,
  posterSrc,
  title,
  description,
  className = '',
  aspectRatio = 'aspect-video',
  preload = 'metadata'
}: OptimizedVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handleLoaded = () => {
    setIsLoaded(true)
  }

  useEffect(() => {
    const videoElement = videoRef.current
    
    if (videoElement) {
      videoElement.addEventListener('loadeddata', handleLoaded)
      
      return () => {
        videoElement.removeEventListener('loadeddata', handleLoaded)
      }
    }
  }, [])

  return (
    <div className={`relative ${aspectRatio} overflow-hidden rounded-xl shadow-xl ${className}`}>
      {/* Placeholder/Poster */}
      {!isPlaying && (
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
          
          <Image
            src={posterSrc}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <button
              onClick={handlePlay}
              className="w-16 h-16 bg-[#d4fb00]/80 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300"
              aria-label="Reproduzir vídeo"
            >
              <PlayCircle className="h-10 w-10 text-black" />
            </button>
          </div>
          
          {/* Title and Description */}
          {(title || description) && (
            <div className="absolute bottom-4 left-4 right-4 z-20">
              {title && <h3 className="text-xl font-bold text-white">{title}</h3>}
              {description && <p className="text-sm text-gray-300">{description}</p>}
            </div>
          )}
        </div>
      )}
      
      {/* Video Element */}
      <video
        ref={videoRef}
        src={videoSrc}
        className={`w-full h-full object-cover ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
        preload={preload}
        playsInline
        controls={isPlaying}
        poster={posterSrc}
        onEnded={() => setIsPlaying(false)}
      />
      
      {/* Loading Indicator */}
      {isPlaying && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-20">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#d4fb00]"></div>
        </div>
      )}
    </div>
  )
} 