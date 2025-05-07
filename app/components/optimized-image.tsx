"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  className?: string
  sizes?: string
  quality?: number
  loading?: "eager" | "lazy"
  placeholder?: "blur" | "empty" | "data:image/..."
  blurDataURL?: string
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 85,
  loading = "lazy",
  placeholder = "empty",
  blurDataURL,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [observer, setObserver] = useState<IntersectionObserver | null>(null)
  const [imageRef, setImageRef] = useState<HTMLDivElement | null>(null)

  // Gera um placeholder blur simples se não for fornecido
  const finalBlurDataURL =
    blurDataURL || placeholder === "blur"
      ? `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width || 100} ${height || 100}'%3E%3Crect width='100%25' height='100%25' fill='%23d4fb0020'/%3E%3C/svg%3E`
      : undefined

  // Configura o Intersection Observer
  useEffect(() => {
    if (!imageRef || priority) return

    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const obs = new IntersectionObserver(
        (entries) => {
          const [entry] = entries
          setIsIntersecting(entry.isIntersecting)
        },
        {
          rootMargin: "200px", // Carrega a imagem um pouco antes do usuário chegar nela
          threshold: 0.01,
        },
      )

      setObserver(obs)
      obs.observe(imageRef)

      return () => {
        if (obs && imageRef) {
          obs.unobserve(imageRef)
        }
      }
    } else {
      // Fallback para browsers que não suportam IntersectionObserver
      setIsIntersecting(true)
      return undefined
    }
  }, [imageRef, priority])

  // Limpa o observer quando a imagem estiver carregada
  useEffect(() => {
    if (isLoaded && observer && imageRef) {
      observer.unobserve(imageRef)
    }
  }, [isLoaded, observer, imageRef])

  return (
    <div
      ref={setImageRef}
      className={`relative ${className}`}
      style={{ height: fill ? "100%" : height, width: fill ? "100%" : width }}
    >
      {(isIntersecting || priority) && (
        <Image
          src={src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          sizes={sizes}
          quality={quality}
          loading={priority ? "eager" : loading}
          onLoad={() => setIsLoaded(true)}
          priority={priority}
          placeholder={placeholder !== "empty" ? "blur" : "empty"}
          blurDataURL={finalBlurDataURL}
          className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
        />
      )}
      {!isLoaded && (priority || isIntersecting) && (
        <div
          className={`absolute inset-0 bg-gray-200 animate-pulse ${
            isLoaded ? "opacity-0" : "opacity-100"
          } transition-opacity duration-300`}
        />
      )}
    </div>
  )
}
