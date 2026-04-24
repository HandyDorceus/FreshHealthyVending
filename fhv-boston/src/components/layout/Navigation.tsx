'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const serviceLinks = [
  { href: '/services/traditional-vending', label: 'Traditional Vending' },
  { href: '/services/fresh-food-vending', label: 'Fresh Food Vending' },
  { href: '/services/office-coffee-services', label: 'Office Coffee Services' },
  { href: '/services/micro-markets', label: 'Micro Markets' },
  { href: '/services/healthy-vending', label: 'Healthy Vending' },
  { href: '/services/gym-vending', label: 'Gym Vending' },
  { href: '/services/water-services', label: 'Water Services' },
];

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services', hasDropdown: true },
  { href: '/technology', label: 'Technology' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="relative" role="navigation" aria-label="Main navigation">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || (link.hasDropdown && pathname.startsWith('/services/'));

          if (link.hasDropdown) {
            return (
              <div
                key={link.href}
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 py-2',
                    isActive
                      ? 'text-primary border-b-2 border-primary pb-1'
                      : 'text-foreground'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  <ChevronDown size={16} className={cn(
                    'transition-transform',
                    servicesOpen && 'rotate-180'
                  )} />
                </Link>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-2 w-64 z-50">
                    <div className="bg-white shadow-lg rounded-lg border border-border py-2">
                    {serviceLinks.map((serviceLink) => {
                      const isServiceActive = pathname === serviceLink.href;
                      return (
                        <Link
                          key={serviceLink.href}
                          href={serviceLink.href}
                          className={cn(
                            'block px-4 py-2 text-sm transition-colors',
                            isServiceActive
                              ? 'bg-primary text-white font-medium'
                              : 'text-foreground hover:bg-muted'
                          )}
                        >
                          {serviceLink.label}
                        </Link>
                      );
                    })}
                    </div>
                  </div>
                )}
              </div>
            );
          }

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
              const isActive = pathname === link.href || (link.hasDropdown && pathname.startsWith('/services/'));

              if (link.hasDropdown) {
                return (
                  <div key={link.href}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={cn(
                        'w-full px-4 py-3 rounded-md text-sm font-medium transition-colors flex items-center justify-between',
                        isActive
                          ? 'bg-primary text-white'
                          : 'text-foreground hover:bg-muted'
                      )}
                    >
                      {link.label}
                      <ChevronDown size={16} className={cn(
                        'transition-transform',
                        servicesOpen && 'rotate-180'
                      )} />
                    </button>
                    {servicesOpen && (
                      <div className="ml-4 mt-2 space-y-1">
                        {serviceLinks.map((serviceLink) => {
                          const isServiceActive = pathname === serviceLink.href;
                          return (
                            <Link
                              key={serviceLink.href}
                              href={serviceLink.href}
                              onClick={closeMenu}
                              className={cn(
                                'block px-4 py-2 rounded-md text-sm transition-colors',
                                isServiceActive
                                  ? 'bg-primary/10 text-primary font-medium'
                                  : 'text-slate-600 hover:bg-muted'
                              )}
                            >
                              {serviceLink.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

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
