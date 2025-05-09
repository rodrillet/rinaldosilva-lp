import { useEffect, useState } from 'react';

interface OptimizationOptions {
  preloadImages?: string[];
  preconnectUrls?: string[];
  prefetchPages?: string[];
  lazyLoadThreshold?: number;
}

export function useOptimizedResources({
  preloadImages = [],
  preconnectUrls = [],
  prefetchPages = [],
  lazyLoadThreshold = 0.2,
}: OptimizationOptions = {}) {
  const [resourcesLoaded, setResourcesLoaded] = useState(false);

  useEffect(() => {
    // Preload critical images
    preloadImages.forEach((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
    });

    // Add preconnect for external domains
    preconnectUrls.forEach((url) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = url;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Prefetch pages for faster navigation
    prefetchPages.forEach((page) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = page;
      document.head.appendChild(link);
    });

    // Setup IntersectionObserver for lazy loading
    if ('IntersectionObserver' in window) {
      const lazyLoadImages = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      }, {
        rootMargin: '0px',
        threshold: lazyLoadThreshold,
      });

      lazyLoadImages.forEach((img) => {
        imageObserver.observe(img);
      });
    }

    setResourcesLoaded(true);

    // Cleanup
    return () => {
      // Remove any dynamically added links if needed
    };
  }, [preloadImages, preconnectUrls, prefetchPages, lazyLoadThreshold]);

  return { resourcesLoaded };
} 