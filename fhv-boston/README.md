# Fresh Healthy Vending Boston - Website

A professional, modern website for Fresh Healthy Vending Boston built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Contact Portal**: Full-featured contact form with email notifications
- **Refund Portal**: Dedicated refund request system with automated email handling
- **SEO Optimized**: Meta tags, Open Graph tags, and semantic HTML for better search visibility
- **Performance**: Fast loading times with Next.js static generation
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation

## 📋 Pages

1. **Home** - Hero section, services overview, product showcase, and call-to-action
2. **About** - Company story, mission, values, and why choose FHV Boston
3. **Services** - Detailed service offerings and how it works
4. **Products** - Product categories and specialty options
5. **Contact** - Contact form portal with business information
6. **Refund** - Refund request portal with policy information

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend API
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   cd fhv-boston
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```bash
   cp .env.local.example .env.local
   ```

   Then edit `.env.local` with your actual values:
   ```env
   # Email Service Configuration
   RESEND_API_KEY=your_resend_api_key_here

   # Email addresses
   CONTACT_EMAIL=John@fhvboston.com

   # Site configuration
   NEXT_PUBLIC_SITE_URL=https://fhvboston.com
   NEXT_PUBLIC_SITE_NAME=Fresh Healthy Vending Boston
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 Email Setup

This site uses [Resend](https://resend.com) for email delivery. Here's how to set it up:

1. **Create a Resend account**
   - Go to [resend.com](https://resend.com)
   - Sign up for a free account

2. **Get your API key**
   - Navigate to API Keys in the dashboard
   - Create a new API key
   - Copy the key to your `.env.local` file

3. **Verify your domain** (for production)
   - Add your domain in Resend dashboard
   - Add the required DNS records
   - Wait for verification (usually a few minutes)

4. **Update email addresses**
   - Change the `from` addresses in `/src/lib/email.ts` from `noreply@fhvboston.com` to your verified domain
   - Update `CONTACT_EMAIL` in `.env.local`

### Testing Email Locally

For development, you can use Resend's test mode which allows sending emails without domain verification.

## 🚀 Deployment

### Deploying to Vercel (Recommended)

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Configure environment variables (same as `.env.local`)
   - Click "Deploy"

3. **Set up custom domain**
   - In Vercel dashboard, go to Settings > Domains
   - Add your custom domain (e.g., fhvboston.com)
   - Follow DNS configuration instructions

### Alternative Deployment Options

You can also deploy to:
- **Netlify**: Use `npm run build` and deploy the `.next` folder
- **AWS Amplify**: Connect your GitHub repo
- **DigitalOcean App Platform**: Connect your GitHub repo

## 📝 Customization

### Updating Content

Content is located in the following files:

- **Homepage sections**: `/src/components/sections/`
  - `Hero.tsx` - Main hero section
  - `Services.tsx` - Services overview
  - `ProductShowcase.tsx` - Product categories
  - `CallToAction.tsx` - CTA sections

- **Page content**: `/src/app/[page-name]/page.tsx`

### Updating Contact Information

Update contact details in:
- `/src/components/layout/Header.tsx` - Phone and email in header
- `/src/components/layout/Footer.tsx` - All footer contact info
- `/src/app/contact/page.tsx` - Contact page details

### Changing Colors

Update the color scheme in `/src/app/globals.css`:
```css
:root {
  --primary: 16 185 129;      /* Main brand color */
  --primary-dark: 5 150 105;  /* Darker shade */
  --secondary: 14 165 233;    /* Secondary color */
  --accent: 99 102 241;       /* Accent color */
}
```

### Adding Images

1. Place images in `/public/images/`
2. Use Next.js Image component for optimization:
   ```tsx
   import Image from 'next/image';

   <Image
     src="/images/your-image.jpg"
     alt="Description"
     width={800}
     height={600}
   />
   ```

## 🧪 Testing

Run the production build locally:
```bash
npm run build
npm run start
```

Check for TypeScript errors:
```bash
npm run build
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security

- Form validation with Zod
- Server-side API routes for email
- Environment variables for sensitive data
- HTTPS enforced in production (via Vercel)

## 📞 Support & Maintenance

### Common Tasks

**Update business hours:**
- Edit `/src/components/layout/Footer.tsx`
- Edit `/src/app/contact/page.tsx`

**Add new service:**
- Edit `/src/app/services/page.tsx`
- Update the services array

**Add new product category:**
- Edit `/src/app/products/page.tsx`
- Update the product categories array

**Change phone number:**
- Search and replace across all files
- Update in Header, Footer, and Contact page

### Getting Help

For technical support or questions about the website:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Tailwind CSS docs](https://tailwindcss.com/docs)
- Contact your developer

## 📄 License

Copyright © 2026 Fresh Healthy Vending Boston. All rights reserved.

## 🎯 Performance

The website is optimized for:
- **Fast loading**: < 3 seconds on 3G
- **SEO**: Semantic HTML and meta tags
- **Accessibility**: WCAG 2.1 AA compliant
- **Mobile**: Responsive design for all devices

## 🔄 Future Enhancements

Potential features to add:
- Blog/News section
- Customer testimonials with photos
- Online ordering system
- Product catalog with images
- Admin dashboard for managing content
- Analytics integration (Google Analytics)

---

**Built with ❤️ for Fresh Healthy Vending Boston**
