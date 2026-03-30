# Unsplash Production API Requirements

This document outlines how the FHV Boston website meets Unsplash's Production API requirements.

## ✅ Requirements Checklist

### 1. Hotlink Photos
**Status:** ✅ Implemented

All photos are hotlinked directly from Unsplash's CDN using the original image URLs:
- Images use `image.urls.regular`, `image.urls.small`, etc. from the Unsplash API response
- No images are downloaded and re-hosted
- Implementation: See `src/lib/unsplash.ts` and all components using Unsplash images

### 2. Trigger Downloads
**Status:** ✅ Implemented

Download events are automatically triggered when images are displayed:

**Implementation:**
- `triggerUnsplashDownload()` function in `src/lib/unsplash.ts` (line ~270)
- `UnsplashAttribution` component automatically calls this on mount (`src/components/ui/UnsplashAttribution.tsx`)
- Download endpoint is hit with proper authorization header

**Example Usage:**
```tsx
import UnsplashAttribution from '@/components/ui/UnsplashAttribution';

// Attribution component automatically triggers download
<UnsplashAttribution image={imageData} variant="dark" />
```

### 3. App Does Not Use Unsplash Logo or Similar Name
**Status:** ✅ Compliant

- Application name: "FHV Boston" (Fresh Healthy Vending Boston)
- No Unsplash branding is used in the application
- Visually distinct from Unsplash's design
- No confusion with Unsplash's brand identity

### 4. Accurate Application Description
**Status:** ✅ Compliant

**Application Name:** FHV Boston Website

**Description:**
A corporate website for Fresh Healthy Vending Boston, a vending machine services company serving the Greater Boston area. The website showcases our vending solutions including traditional vending, fresh food vending, micro markets, office coffee services, and more. Unsplash images are used to enhance the visual appeal of service pages, hero sections, and product showcases.

### 5. Attribute Photographer and Unsplash
**Status:** ✅ Implemented

Proper attribution is displayed for all images with:
- Photographer's full name (linked to their Unsplash profile)
- "on Unsplash" text (linked to Unsplash homepage)
- UTM parameters for tracking (`utm_source=fhv-boston&utm_medium=referral`)

**Implementation:**
- `UnsplashAttribution` component in `src/components/ui/UnsplashAttribution.tsx`
- Displays: "Photo by [Photographer Name] on Unsplash"
- Both links are properly formatted with target="_blank" and rel="noopener noreferrer"

**Example Implementation (Hero Section):**
```tsx
<img
  src={heroImage.data.urls.regular}
  alt={heroImage.data.alt_description || 'Description'}
  className="w-full h-full object-cover"
/>
<UnsplashAttribution image={heroImage.data} variant="dark" />
```

## 📸 Screenshots

### Attribution Example (Homepage Hero)
The attribution appears at the bottom right of images:
- Dark overlay for readability
- Photographer name linked to their Unsplash profile
- "Unsplash" linked to unsplash.com
- Example: "Photo by John Doe on Unsplash"

### Where Attribution Appears
Attribution is displayed on:
1. **Homepage Hero Section** - Bottom right corner with dark overlay
2. **Service Page Heroes** - Bottom right of hero background images
3. **Product Category Cards** - Bottom of each card image
4. **About Page Images** - Below team/office images

## 🔧 Technical Implementation

### Components Using Unsplash

1. **Hero Component** (`src/components/sections/Hero.tsx`)
   - Fetches portrait vending machine image
   - Displays attribution in bottom-right corner

2. **Service Cards** (`src/components/services/ServiceCard.tsx`)
   - Images with gradient overlays
   - Attribution can be added to card footer

3. **Product Showcase** (`src/components/sections/ProductShowcase.tsx`)
   - Multiple category images
   - Attribution in image overlay

4. **About Page** (`src/app/about/page.tsx`)
   - Team and office workspace images
   - Attribution below images

5. **Individual Service Pages** (All 7 service detail pages)
   - Hero background images with attribution overlay

### Unsplash Utility Functions

Located in `src/lib/unsplash.ts`:

```typescript
// Fetch single image
fetchUnsplashImage(query, orientation)

// Fetch multiple images
fetchUnsplashImages(query, count, orientation)

// Search with pagination
searchUnsplashImages(query, page, perPage, orientation)

// Trigger download event (REQUIRED)
triggerUnsplashDownload(downloadLocation)

// Get attribution text
getUnsplashAttribution(image)

// Get attribution links with UTM params
getUnsplashAttributionLink(image)
```

### API Key Configuration

Environment variable in `.env`:
```
UNSPLASH_ACCESS_KEY="your-production-api-key"
```

## 📝 Notes for Production Access Application

When applying for Production access, provide:

1. **Application URL:** [Your production URL]
2. **Application Name:** FHV Boston Website
3. **Description:** Corporate website for Fresh Healthy Vending Boston showcasing vending services with enhanced visuals from Unsplash
4. **Screenshots:** Show attribution examples from homepage and service pages
5. **Expected API Usage:** ~1000 requests/month for hero images, service pages, and product showcases

## 🚀 Enabling Contextual Search (After Production Approval)

Once your application is approved for Production access:

1. Uncomment the `query` parameter lines in `src/lib/unsplash.ts`:
   - Line ~72 in `fetchUnsplashImage`
   - Line ~139 in `fetchUnsplashImages`
   - Line ~202 in `searchUnsplashImages`

2. Change search endpoint back to `/search/photos` in `searchUnsplashImages` (line ~211)

3. Images will then be contextually relevant to each page section

## ✨ Current Image Placement

| Page/Section | Image Type | Attribution Location |
|--------------|-----------|---------------------|
| Homepage Hero | Portrait vending machine | Bottom-right overlay |
| Services Section (7 cards) | Landscape service images | Card overlay/footer |
| Product Showcase (4 cards) | Square product images | Card overlay |
| About Page | Team & office images | Below images |
| Service Pages (7 pages) | Hero backgrounds | Bottom-right overlay |
| Technology Page | Tech dashboard | Bottom-right overlay |
| Service Areas Page | Boston skyline | Bottom-right overlay |

## 🔗 Helpful Links

- [Unsplash API Guidelines](https://help.unsplash.com/en/articles/2511245-unsplash-api-guidelines)
- [Apply for Production Access](https://unsplash.com/oauth/applications)
- [Unsplash API Documentation](https://unsplash.com/documentation)

---

**Last Updated:** March 27, 2026
**Status:** Ready for Production API Application ✅
