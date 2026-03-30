# Unsplash Integration Guide

This guide explains how to use the Unsplash API integration to fetch contextually relevant images throughout the FHV Boston website.

## Setup

The Unsplash integration is already configured with your API key in `.env`:

```env
UNSPLASH_ACCESS_KEY="your-api-key-here"
```

## Usage Examples

### 1. Fetch a Single Random Image

Use this for hero sections, feature images, or single image displays:

```tsx
import { fetchUnsplashImage } from '@/lib/unsplash';

export default async function ServicePage() {
  const imageResult = await fetchUnsplashImage('vending machine healthy snacks', 'landscape');

  return (
    <div>
      {imageResult.success && imageResult.data && (
        <img
          src={imageResult.data.urls.regular}
          alt={imageResult.data.alt_description || 'Healthy vending machine'}
          className="w-full h-64 object-cover rounded-lg"
        />
      )}
    </div>
  );
}
```

### 2. Fetch Multiple Images

Perfect for galleries, product showcases, or image grids:

```tsx
import { fetchUnsplashImages } from '@/lib/unsplash';

export default async function ProductsPage() {
  const imagesResult = await fetchUnsplashImages('office coffee service', 6, 'landscape');

  return (
    <div className="grid grid-cols-3 gap-4">
      {imagesResult.success && imagesResult.data?.map((image) => (
        <img
          key={image.id}
          src={image.urls.small}
          alt={image.alt_description || 'Coffee service'}
          className="w-full h-48 object-cover rounded-lg"
        />
      ))}
    </div>
  );
}
```

### 3. Search with Pagination

Use for search results or browseable galleries:

```tsx
import { searchUnsplashImages } from '@/lib/unsplash';

export default async function GalleryPage({ searchParams }: { searchParams: { page?: string } }) {
  const page = parseInt(searchParams.page || '1');
  const result = await searchUnsplashImages('micro market fresh food', page, 12);

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {result.success && result.data?.results.map((image) => (
          <img
            key={image.id}
            src={image.urls.small}
            alt={image.alt_description || 'Micro market'}
            className="w-full h-40 object-cover rounded-lg"
          />
        ))}
      </div>
      {result.success && result.data && (
        <p className="mt-4 text-muted">
          Page {page} of {result.data.total_pages} ({result.data.total} results)
        </p>
      )}
    </div>
  );
}
```

### 4. Proper Attribution (Required by Unsplash)

Always provide attribution when displaying Unsplash images:

```tsx
import { fetchUnsplashImage, getUnsplashAttributionLink } from '@/lib/unsplash';

export default async function ImageWithAttribution() {
  const result = await fetchUnsplashImage('healthy snacks');

  if (!result.success || !result.data) return null;

  const attribution = getUnsplashAttributionLink(result.data);
  const image = result.data;

  return (
    <figure>
      <img
        src={image.urls.regular}
        alt={image.alt_description || 'Healthy snacks'}
        className="w-full rounded-lg"
      />
      <figcaption className="text-xs text-muted mt-2">
        Photo by{' '}
        <a
          href={attribution.photographerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {image.user.name}
        </a>{' '}
        on{' '}
        <a
          href={attribution.unsplashUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Unsplash
        </a>
      </figcaption>
    </figure>
  );
}
```

## Contextual Query Examples by Page

Here are recommended search queries for different sections of your website:

### Services Pages

```tsx
// Fresh Food Vending
await fetchUnsplashImage('fresh healthy food vending machine');
await fetchUnsplashImage('fresh salad refrigerated case');

// Gym Vending
await fetchUnsplashImage('gym fitness protein snacks');
await fetchUnsplashImage('sports nutrition vending');

// Healthy Vending
await fetchUnsplashImage('healthy snacks fruits vegetables');
await fetchUnsplashImage('organic healthy food options');

// Micro Markets
await fetchUnsplashImage('office micro market convenience store');
await fetchUnsplashImage('self-checkout retail display');

// Office Coffee Services
await fetchUnsplashImage('office coffee machine espresso');
await fetchUnsplashImages('coffee service workplace', 4);

// Traditional Vending
await fetchUnsplashImage('vending machine snacks drinks');

// Water Services
await fetchUnsplashImage('water cooler office hydration');
await fetchUnsplashImage('filtered water dispenser');
```

### Product Categories

```tsx
// Snacks
await fetchUnsplashImages('healthy snacks nuts granola', 8);

// Beverages
await fetchUnsplashImages('drinks beverages bottles cans', 8);

// Fresh Food
await fetchUnsplashImages('fresh food salads sandwiches', 8);

// Coffee & Tea
await fetchUnsplashImages('coffee tea hot beverages', 6);
```

### Homepage Sections

```tsx
// Hero Section
await fetchUnsplashImage('modern vending machine office', 'landscape');

// Services Showcase
await fetchUnsplashImages('workplace amenities office break room', 3);

// Product Showcase
await fetchUnsplashImages('variety snacks healthy options', 6);
```

## Image Size Options

Unsplash provides multiple image sizes. Choose based on your use case:

- `urls.thumb` - Small thumbnail (200px)
- `urls.small` - Small (400px) - Good for cards/thumbnails
- `urls.regular` - Medium (1080px) - Good for most content
- `urls.full` - Large (up to 6000px) - High resolution
- `urls.raw` - Original uploaded image (with custom parameters)

```tsx
// For thumbnails and cards
<img src={image.urls.small} alt={image.alt_description} />

// For hero sections and main content
<img src={image.urls.regular} alt={image.alt_description} />

// For high-quality displays
<img src={image.urls.full} alt={image.alt_description} />
```

## Orientation Filters

Control image orientation to match your layout:

```tsx
// Landscape (horizontal) - Great for hero sections
await fetchUnsplashImage('vending machine', 'landscape');

// Portrait (vertical) - Good for sidebars, mobile
await fetchUnsplashImage('healthy snacks', 'portrait');

// Squarish - Perfect for profile images, square grids
await fetchUnsplashImage('coffee cup', 'squarish');
```

## Error Handling

Always check for success and handle errors gracefully:

```tsx
const result = await fetchUnsplashImage('coffee');

if (!result.success) {
  console.error('Failed to fetch image:', result.error);
  // Show fallback image or placeholder
  return <img src="/placeholder.jpg" alt="Coffee" />;
}

if (result.data) {
  return <img src={result.data.urls.regular} alt={result.data.alt_description || 'Coffee'} />;
}
```

## Caching

The utility automatically caches responses for 1 hour using Next.js `revalidate`:

```tsx
fetch(url, {
  next: { revalidate: 3600 }, // 1 hour cache
});
```

You can override this in your pages if needed:

```tsx
export const revalidate = 7200; // Cache page for 2 hours

export default async function MyPage() {
  const result = await fetchUnsplashImage('vending');
  // ...
}
```

## Best Practices

1. **Use specific queries**: Instead of "food", use "healthy fresh food salad"
2. **Always provide alt text**: Use `image.alt_description` or provide a fallback
3. **Add proper attribution**: Required by Unsplash API terms
4. **Handle errors**: Network issues can happen, show fallback images
5. **Use appropriate sizes**: Don't load `urls.full` for thumbnails
6. **Consider orientation**: Match your layout with landscape/portrait filters
7. **Cache strategically**: Balance freshness with performance

## API Limits

Unsplash free tier provides:
- 50 requests per hour
- Rate limit resets every hour

The utility handles errors gracefully if you exceed limits.

## Next Steps

To integrate Unsplash images into your pages:

1. Import the utility: `import { fetchUnsplashImage } from '@/lib/unsplash';`
2. Choose the appropriate function (single, multiple, or search)
3. Use contextually relevant search queries
4. Add proper attribution links
5. Handle errors with fallback images

Happy coding!
