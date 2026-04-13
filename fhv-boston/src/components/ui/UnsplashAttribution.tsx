'use client';

import { useEffect } from 'react';
import { triggerUnsplashDownload, type UnsplashImage } from '@/lib/unsplash';

interface UnsplashAttributionProps {
  image: UnsplashImage;
  className?: string;
  variant?: 'light' | 'dark';
}

/**
 * Unsplash Attribution Component
 *
 * Displays proper attribution for Unsplash images as required by API guidelines.
 * Automatically triggers download event when mounted.
 *
 * @example
 * ```tsx
 * <UnsplashAttribution image={imageData} variant="light" />
 * ```
 */
export default function UnsplashAttribution({
  image,
  className = '',
  variant = 'light'
}: UnsplashAttributionProps) {
  // Trigger download event when image is displayed (required by Unsplash API)
  useEffect(() => {
    if (image?.links?.download_location) {
      triggerUnsplashDownload(image.links.download_location);
    }
  }, [image]);

  const textColor = variant === 'dark' ? 'text-white/80' : 'text-slate-600';
  const linkColor = variant === 'dark' ? 'text-white hover:text-white/90' : 'text-slate-900 hover:text-primary';

  return (
    <p className={`text-xs ${textColor} ${className}`}>
      Photo by{' '}
      <a
        href={`https://unsplash.com/@${image.user.username}?utm_source=fresh_healthy_vending_boston&utm_medium=referral`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${linkColor} underline font-medium`}
      >
        {image.user.name}
      </a>{' '}
      on{' '}
      <a
        href="https://unsplash.com/?utm_source=fresh_healthy_vending_boston&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className={`${linkColor} underline font-medium`}
      >
        Unsplash
      </a>
    </p>
  );
}
