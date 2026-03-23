import Link from 'next/link';
import Image from 'next/image';
import Navigation from './Navigation';
import { Phone, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-border shadow-sm">
      {/* Top Bar - Contact Info */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-6 text-sm">
            <a
              href="mailto:John@fhvboston.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
              aria-label="Email us at John@fhvboston.com"
            >
              <Mail size={16} />
              <span>John@fhvboston.com</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 hover:text-primary transition-colors"
              aria-label="Call us"
            >
              <Phone size={16} />
              <span>(123) 456-7890</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group"
            aria-label="Fresh Healthy Vending Boston - Home"
          >
            <Image
              src="/fhv-logo.svg"
              alt="Fresh Healthy Vending Boston"
              width={140}
              height={100}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Navigation */}
          <Navigation />
        </div>
      </div>
    </header>
  );
}
