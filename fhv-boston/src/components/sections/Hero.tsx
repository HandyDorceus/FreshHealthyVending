import Link from 'next/link';
import Button from '@/components/ui/Button';
import { CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Fresh & Healthy Vending Solutions for{' '}
              <span className="text-primary">Your Business</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              Elevate your workplace with premium vending services. We provide
              healthy snacks, beverages, and fresh food options that keep your
              team energized and productive.
            </p>

            {/* Key Benefits */}
            <ul className="space-y-4 mb-8">
              {[
                'High-quality, healthy product selection',
                'State-of-the-art vending equipment',
                'Full-service maintenance & restocking',
                'Customizable options for your workplace',
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
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for vending machine image */}
              <div className="aspect-[3/4] bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-6xl">🥗</span>
                  </div>
                  <p className="text-white/90 text-sm">
                    Image placeholder: Modern vending machine with healthy options
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white text-foreground p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">10+</span>
                </div>
                <div>
                  <div className="font-bold text-lg">Years</div>
                  <div className="text-sm text-slate-600">Experience</div>
                </div>
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
