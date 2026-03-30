import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceHero from '@/components/services/ServiceHero';
import HighVolumeCallout from '@/components/services/HighVolumeCallout';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import {
  Salad,
  Refrigerator,
  Clock,
  Sparkles,
  CheckCircle,
  Sandwich,
  Apple,
  Timer
} from 'lucide-react';
import { fetchUnsplashImage } from '@/lib/unsplash';

export const metadata: Metadata = {
  title: 'Fresh Food Vending | FHV Boston - Refrigerated Fresh Meals & Sandwiches',
  description:
    'Fresh food vending machines with gourmet sandwiches, salads, and healthy meals. High-volume fresh food solutions for busy Boston locations with daily restocking.',
};

export default async function FreshFoodVendingPage() {
  const heroImage = await fetchUnsplashImage('fresh salad', 'landscape');
  const features = [
    {
      icon: Refrigerator,
      title: 'Refrigerated Fresh Storage',
      description:
        'Climate-controlled machines maintain optimal temperature for fresh salads, sandwiches, wraps, and complete meals.',
    },
    {
      icon: Timer,
      title: 'Daily Restocking Available',
      description:
        'High-volume locations can receive daily or even multiple daily restocks to ensure peak freshness and availability.',
    },
    {
      icon: Sparkles,
      title: 'Gourmet Quality Options',
      description:
        'From artisan sandwiches to healthy grain bowls, we source premium fresh food options your team will love.',
    },
    {
      icon: Apple,
      title: 'Healthy & Delicious',
      description:
        'Nutritious meals that don\'t compromise on taste. Fresh ingredients, balanced nutrition, convenient access.',
    },
  ];

  const productCategories = [
    'Gourmet sandwiches and wraps',
    'Fresh salads and grain bowls',
    'Protein boxes and snack packs',
    'Yogurt parfaits and fruit cups',
    'Fresh fruit and vegetables',
    'Complete meals and entrees',
    'Breakfast items and pastries',
    'Specialty dietary options (vegan, gluten-free, etc.)',
  ];

  return (
    <div className="bg-white">
      <ServiceHero
        title="Fresh Food Vending"
        description="Elevate your workplace dining with refrigerated fresh food vending. Gourmet sandwiches, crisp salads, and nutritious meals—delivered fresh and restocked as often as you need."
        icon={Salad}
        gradient="from-green-900 to-green-800"
        backgroundImage={heroImage.success && heroImage.data ? heroImage.data.urls.regular : undefined}
        imageAlt={heroImage.success && heroImage.data ? heroImage.data.alt_description || 'Fresh food vending' : undefined}
      />

      {/* Service Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Fresh Food, Always Available
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Your team deserves better than stale snacks and old sandwiches. Our fresh food vending solutions bring restaurant-quality meals directly to your workplace. With refrigerated storage and frequent restocking, we ensure every selection is fresh, delicious, and ready when your team needs it.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We specialize in high-volume locations where fresh food moves quickly. Our real-time inventory tracking means we restock based on actual consumption, not arbitrary schedules. For busy offices, summer camps, and healthcare facilities, we can deliver fresh food daily or even multiple times per day.
            </p>
          </div>

          <HighVolumeCallout
            variant="emphasized"
            customText="Fresh food requires frequent restocking—and we excel at it. Our data-driven approach ensures your machines are always stocked with the freshest options, whether you need daily service or multiple restocks per day."
          />
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Premium Fresh Food Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Advanced refrigeration technology meets gourmet quality for the ultimate fresh food vending experience.
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

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Fresh Food Variety
              </h2>
              <p className="text-lg text-slate-600">
                A complete selection of fresh, delicious options to satisfy every taste and dietary preference.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {productCategories.map((category, index) => (
                <div key={index} className="flex gap-3 items-start bg-muted p-4 rounded-lg">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-700 font-medium">{category}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-slate-700 leading-relaxed">
                <strong className="text-foreground">Custom Product Mix:</strong> We work with you to select fresh food options that match your team's preferences and dietary requirements. Client photos and specialty items can be incorporated based on availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* High-Volume Excellence */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Built for High-Volume Locations
              </h2>
              <p className="text-lg text-white/90">
                When fresh food moves fast, you need a partner who can keep up
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  icon: Clock,
                  title: 'Rapid Restocking',
                  description: 'Daily or multiple daily visits for busy locations',
                },
                {
                  icon: Sandwich,
                  title: 'Always Fresh',
                  description: 'Real-time tracking ensures optimal rotation',
                },
                {
                  icon: Sparkles,
                  title: 'Premium Quality',
                  description: 'Gourmet options that match your standards',
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon size={32} className="text-white" />
                    </div>
                    <div className="font-bold text-lg mb-2">{item.title}</div>
                    <div className="text-white/80">{item.description}</div>
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
              Bring Fresh Food to Your Workplace
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Perfect for high-volume offices, summer camps, healthcare facilities, and anywhere fresh, healthy meals make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="primary">
                  Request Fresh Food Service
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
