'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
  { href: '/refund', label: 'Refund Portal' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="relative" role="navigation" aria-label="Main navigation">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                isActive
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-foreground'
              )}
              aria-current={isActive ? 'page' : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* Mobile Navigation Toggle */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div
          className="absolute top-full right-0 mt-4 w-64 bg-white shadow-lg rounded-lg border border-border md:hidden z-50"
          role="menu"
        >
          <div className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={cn(
                    'px-4 py-3 rounded-md text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-foreground hover:bg-muted'
                  )}
                  role="menuitem"
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
