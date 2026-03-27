import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceHero from '@/components/services/ServiceHero';
import HighVolumeCallout from '@/components/services/HighVolumeCallout';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { fetchUnsplashImage } from '@/lib/unsplash';
import {
  Package,
  CreditCard,
  Zap,
  Shield,
  CheckCircle,
  Smartphone,
  DollarSign,
  Settings
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Traditional Vending Services | FHV Boston - High-Volume Vending Solutions',
  description:
    'Full-service traditional vending machines for snacks and beverages. Specializing in high-volume locations across Greater Boston with real-time tracking and cashless payments.',
};

export default async function TraditionalVendingPage() {
  const heroImage = await fetchUnsplashImage('vending machine');

  const features = [
    {
      icon: Package,
      title: '500+ Product Options',
      description:
        'From classic favorites to better-for-you options, we offer an extensive selection of snacks and beverages tailored to your location.',
    },
    {
      icon: CreditCard,
      title: 'Cashless Payment Systems',
      description:
        'Accept cash, credit, debit, contactless payments, and Apple Pay. Bill recyclers accepting $1s, $5s, and $10s.',
    },
    {
      icon: Zap,
      title: 'Guaranteed Delivery Technology',
      description:
        'AMS Sensit III 39" combo machines with Guaranteed Delivery Sensit Technology ensure customers always get their selection.',
    },
    {
      icon: Shield,
      title: 'USA-Manufactured Equipment',
      description:
        'State-of-the-art refrigerated vending machines manufactured in the USA for reliability and quality.',
    },
  ];

  const benefits = [
    'Real-time inventory tracking drives our restocking schedule',
    'No route-based restocking—we restock based on data',
    'Individually tailored product mix per location',
    'Full-service maintenance and cleaning included',
    'Monthly data sharing reports',
    '15% commission OR lower pricing ($.25 less per item)',
    'If it\'s vendible, we can usually procure it',
    'Perfect for busy offices, summer camps, and high-traffic facilities',
  ];

  return (
    <div className="bg-white">
      <ServiceHero
        title="Traditional Vending Services"
        description="Premium snack and beverage vending solutions with cutting-edge technology. From high-volume locations to corporate offices, we deliver reliable service that keeps your team satisfied."
        icon={Package}
        gradient="from-blue-900 to-blue-800"
        backgroundImage={heroImage.success && heroImage.data ? heroImage.data.urls.regular : undefined}
        imageAlt={heroImage.success && heroImage.data ? heroImage.data.alt_description || 'Traditional Vending Services' : undefined}
      />

      {/* Service Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Full-Service Traditional Vending
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Our traditional vending machines provide the convenience your employees and visitors expect, with the advanced technology and service reliability you deserve. We specialize in high-volume locations where consistent availability and rapid restocking are essential.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Unlike competitors who follow fixed route schedules, our real-time inventory tracking system tells us exactly when your machines need restocking. Whether you need service once a week or multiple times per day, we're equipped to handle your volume.
            </p>
          </div>

          <HighVolumeCallout variant="emphasized" />
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Advanced Features & Technology
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              State-of-the-art equipment with cutting-edge technology for the best vending experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} variant="elevated">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-slate-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Choose FHV Boston for Traditional Vending?
              </h2>
              <p className="text-lg text-slate-600">
                We go beyond basic vending service to provide comprehensive solutions tailored to your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Details */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                State-of-the-Art Equipment
              </h2>
              <p className="text-lg text-white/90">
                USA-manufactured vending machines with industry-leading technology
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Settings, label: 'AMS Sensit III', detail: '39" Combo Machines' },
                { icon: CreditCard, label: 'Cashless Ready', detail: 'All Payment Types' },
                { icon: Smartphone, label: 'Contactless', detail: 'Apple Pay & More' },
                { icon: DollarSign, label: 'Bill Recyclers', detail: '$1, $5, $10 Bills' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon size={32} className="text-white" />
                    </div>
                    <div className="font-bold text-lg mb-1">{item.label}</div>
                    <div className="text-white/80 text-sm">{item.detail}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Let's discuss how our traditional vending solutions can serve your high-volume location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="primary">
                  Request a Quote
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
