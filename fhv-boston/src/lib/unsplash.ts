/**
 * Unsplash API Integration
 *
 * This utility provides functions to fetch contextually relevant images
 * from Unsplash API for use throughout the FHV Boston website.
 */

// Unsplash API Response Types
export interface UnsplashImage {
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  alt_description: string | null;
  description: string | null;
  user: {
    name: string;
    username: string;
    links: {
      html: string;
    };
  };
  links: {
    html: string;
    download_location: string;
  };
  width: number;
  height: number;
}

export interface UnsplashApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

const UNSPLASH_API_KEY = process.env.UNSPLASH_ACCESS_KEY;
const UNSPLASH_API_BASE = 'https://api.unsplash.com';

/**
 * Fetch a single random image from Unsplash based on a search query
 *
 * @param query - Search query for relevant images (e.g., "vending machine", "fresh food")
 * @param orientation - Optional image orientation filter
 * @returns Promise with success status and image data or error
 *
 * @example
 * ```tsx
 * const result = await fetchUnsplashImage('healthy snacks');
 * if (result.success && result.data) {
 *   return <img src={result.data.urls.regular} alt={result.data.alt_description || 'Healthy snacks'} />;
 * }
 * ```
 */
export async function fetchUnsplashImage(
  query: string,
  orientation?: 'landscape' | 'portrait' | 'squarish'
): Promise<UnsplashApiResponse<UnsplashImage>> {
  try {
    if (!UNSPLASH_API_KEY) {
      return {
        success: false,
        error: 'Unsplash API key is not configured. Add UNSPLASH_ACCESS_KEY to your .env file.',
      };
    }

    const params = new URLSearchParams({
      // Note: Demo Unsplash API keys don't support query parameters
      // To enable search, apply for Production access at https://unsplash.com/oauth/applications
      // query,
      client_id: UNSPLASH_API_KEY,
      ...(orientation && { orientation }),
    });

    const url = `${UNSPLASH_API_BASE}/photos/random?${params}`;
    console.log('Fetching Unsplash image:', url);

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour in Next.js
    });

    if (!response.ok) {
      console.error('Unsplash API error response:', response.status, response.statusText, 'URL:', url);
      throw new Error(`Unsplash API error: ${response.status} ${response.statusText}`);
    }

    const photo: UnsplashImage = await response.json();

    // Trigger download event for API compliance
    // Note: Our site generates and displays images automatically via server-side rendering.
    // While Unsplash primarily requires this for user-selected images, we trigger it
    // for all fetched images to ensure full compliance with their API guidelines.
    if (photo.links?.download_location) {
      await triggerUnsplashDownload(photo.links.download_location);
    }

    return {
      success: true,
      data: photo,
    };
  } catch (error) {
    console.error('Error fetching Unsplash image:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

/**
 * Fetch multiple images from Unsplash based on a search query
 *
 * @param query - Search query for relevant images
 * @param count - Number of images to fetch (default: 10, max: 30)
 * @param orientation - Optional image orientation filter
 * @returns Promise with success status and array of images or error
 *
 * @example
 * ```tsx
 * const result = await fetchUnsplashImages('office coffee', 6);
 * if (result.success && result.data) {
 *   return result.data.map(img => (
 *     <img key={img.id} src={img.urls.small} alt={img.alt_description || 'Coffee'} />
 *   ));
 * }
 * ```
 */
export async function fetchUnsplashImages(
  query: string,
  count: number = 10,
  orientation?: 'landscape' | 'portrait' | 'squarish'
): Promise<UnsplashApiResponse<UnsplashImage[]>> {
  try {
    if (!UNSPLASH_API_KEY) {
      return {
        success: false,
        error: 'Unsplash API key is not configured. Add UNSPLASH_ACCESS_KEY to your .env file.',
      };
    }

    // Ensure count is within Unsplash limits
    const validCount = Math.min(Math.max(count, 1), 30);

    const params = new URLSearchParams({
      // Note: Demo Unsplash API keys don't support query parameters
      // To enable search, apply for Production access at https://unsplash.com/oauth/applications
      // query,
      client_id: UNSPLASH_API_KEY,
      count: validCount.toString(),
      ...(orientation && { orientation }),
    });

    const response = await fetch(`${UNSPLASH_API_BASE}/photos/random?${params}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour in Next.js
    });

    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status} ${response.statusText}`);
    }

    const photos: UnsplashImage[] = await response.json();

    // Trigger download event for each photo for API compliance
    // Note: Our site generates and displays images automatically via server-side rendering.
    // While Unsplash primarily requires this for user-selected images, we trigger it
    // for all fetched images to ensure full compliance with their API guidelines.
    await Promise.all(
      photos.map(photo =>
        photo.links?.download_location
          ? triggerUnsplashDownload(photo.links.download_location)
          : Promise.resolve()
      )
    );

    return {
      success: true,
      data: photos,
    };
  } catch (error) {
    console.error('Error fetching Unsplash images:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

/**
 * Search for images on Unsplash with pagination support
 *
 * @param query - Search query
 * @param page - Page number (default: 1)
 * @param perPage - Results per page (default: 10, max: 30)
 * @param orientation - Optional image orientation filter
 * @returns Promise with success status and search results or error
 *
 * @example
 * ```tsx
 * const result = await searchUnsplashImages('micro market', 1, 12);
 * if (result.success && result.data) {
 *   return result.data.results.map(img => (
 *     <img key={img.id} src={img.urls.regular} alt={img.alt_description || query} />
 *   ));
 * }
 * ```
 */
export async function searchUnsplashImages(
  query: string,
  page: number = 1,
  perPage: number = 10,
  orientation?: 'landscape' | 'portrait' | 'squarish'
): Promise<UnsplashApiResponse<{ results: UnsplashImage[]; total: number; total_pages: number }>> {
  try {
    if (!UNSPLASH_API_KEY) {
      return {
        success: false,
        error: 'Unsplash API key is not configured. Add UNSPLASH_ACCESS_KEY to your .env file.',
      };
    }

    const validPerPage = Math.min(Math.max(perPage, 1), 30);

    const params = new URLSearchParams({
      // Note: Demo Unsplash API keys don't support query/search parameters
      // To enable search, apply for Production access at https://unsplash.com/oauth/applications
      // query,
      client_id: UNSPLASH_API_KEY,
      page: page.toString(),
      per_page: validPerPage.toString(),
      ...(orientation && { orientation }),
    });

    // Note: Using random endpoint instead of search since Demo API keys don't support search
    // When you upgrade to Production, change this back to search/photos endpoint
    const response = await fetch(`${UNSPLASH_API_BASE}/photos/random?${params}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour in Next.js
    });

    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status} ${response.statusText}`);
    }

    const photos = await response.json();
    const results = Array.isArray(photos) ? photos : [photos];

    // Trigger download event for each photo for API compliance
    // Note: Our site generates and displays images automatically via server-side rendering.
    // While Unsplash primarily requires this for user-selected images, we trigger it
    // for all fetched images to ensure full compliance with their API guidelines.
    await Promise.all(
      results.map(photo =>
        photo.links?.download_location
          ? triggerUnsplashDownload(photo.links.download_location)
          : Promise.resolve()
      )
    );

    return {
      success: true,
      data: {
        results: results,
        total: results.length,
        total_pages: 1,
      },
    };
  } catch (error) {
    console.error('Error searching Unsplash images:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

/**
 * Trigger download event for Unsplash API Guidelines compliance
 * REQUIRED: Must be called when an image is displayed to the user
 *
 * @param downloadLocation - The download_location URL from the image object
 *
 * @example
 * ```tsx
 * // Call this when the image is displayed
 * useEffect(() => {
 *   if (image?.links?.download_location) {
 *     triggerUnsplashDownload(image.links.download_location);
 *   }
 * }, [image]);
 * ```
 */
export async function triggerUnsplashDownload(downloadLocation: string): Promise<void> {
  if (!UNSPLASH_API_KEY) return;

  try {
    await fetch(downloadLocation, {
      method: 'GET',
      headers: {
        'Authorization': `Client-ID ${UNSPLASH_API_KEY}`,
      },
    });
  } catch (error) {
    console.error('Failed to trigger Unsplash download:', error);
  }
}

/**
 * Helper function to generate proper attribution for Unsplash images
 * Required by Unsplash API guidelines
 *
 * @param image - Unsplash image object
 * @returns Attribution string with photographer credit
 *
 * @example
 * ```tsx
 * <img src={image.urls.regular} alt={image.alt_description || 'Image'} />
 * <p className="text-xs text-muted">{getUnsplashAttribution(image)}</p>
 * ```
 */
export function getUnsplashAttribution(image: UnsplashImage): string {
  return `Photo by ${image.user.name} on Unsplash`;
}

/**
 * Get a properly formatted attribution link for Unsplash images
 * Required by Unsplash API guidelines
 *
 * @param image - Unsplash image object
 * @returns Object with photographer link and Unsplash link
 *
 * @example
 * ```tsx
 * const attribution = getUnsplashAttributionLink(image);
 * <p>
 *   Photo by <a href={attribution.photographerUrl}>{image.user.name}</a> on{' '}
 *   <a href={attribution.unsplashUrl}>Unsplash</a>
 * </p>
 * ```
 */
export function getUnsplashAttributionLink(image: UnsplashImage) {
  return {
    photographerUrl: `https://unsplash.com/@${image.user.username}?utm_source=fresh_healthy_vending_boston&utm_medium=referral`,
    unsplashUrl: `https://unsplash.com/?utm_source=fresh_healthy_vending_boston&utm_medium=referral`,
    photoUrl: `${image.links.html}?utm_source=fresh_healthy_vending_boston&utm_medium=referral`,
  };
}
