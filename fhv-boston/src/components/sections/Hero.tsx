import Link from 'next/link';
import Button from '@/components/ui/Button';
import { CheckCircle } from 'lucide-react';

export default function Hero() {
  // Using specific Unsplash image URL
  const heroImageUrl = 'https://images.unsplash.com/photo-1599762427626-e11d2df73ed6?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              High-Volume Vending Solutions for{' '}
              <span className="text-secondary">Boston's Busiest Locations</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              Real-time tracking. Data-driven restocking. From once a week to every day—we handle the volume.
            </p>

            {/* Key Benefits */}
            <ul className="space-y-4 mb-8">
              {[
                'Specialized in high-volume locations',
                'Real-time inventory tracking drives restocking',
                'Data-driven service, not route-based',
                '500+ product options tailored to your location',
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-200">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" variant="primary">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImageUrl}
                alt="Modern vending machine with healthy snacks"
                className="aspect-[3/4] object-cover w-full"
              />
              <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded">
                <p className="text-xs text-white/80">
                  Photo by{' '}
                  <a
                    href="https://unsplash.com/@timmossholder?utm_source=fresh_healthy_vending_boston&utm_medium=referral"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/90 underline font-medium"
                  >
                    Tim Mossholder
                  </a>{' '}
                  on{' '}
                  <a
                    href="https://unsplash.com/?utm_source=fresh_healthy_vending_boston&utm_medium=referral"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/90 underline font-medium"
                  >
                    Unsplash
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
