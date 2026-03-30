import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/fhv-logo.svg"
                alt="Fresh Healthy Vending Boston"
                width={140}
                height={100}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Providing high-quality, healthy vending solutions for businesses
              across the Boston area. Your trusted partner in employee
              wellness.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  Refund Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-1 flex-shrink-0" />
                <a
                  href="mailto:John@fhvboston.com"
                  className="text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  John@fhvboston.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary mt-1 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-slate-400">
                  Boston, Massachusetts
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="text-sm text-slate-400 space-y-1 mb-6">
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-dark rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-dark rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-dark rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-dark mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>
              &copy; {currentYear} Fresh Healthy Vending Boston. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
