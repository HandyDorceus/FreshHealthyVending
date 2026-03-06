import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceHero from '@/components/services/ServiceHero';
import HighVolumeCallout from '@/components/services/HighVolumeCallout';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import {
  Coffee,
  Droplet,
  Settings,
  Sparkles,
  CheckCircle,
  Award,
  Clock,
  ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Office Coffee Services (OCS) | FHV Boston - Premium Workplace Coffee',
  description:
    'Professional office coffee services with pod-based and bean-to-cup solutions. High-volume coffee service for busy Boston offices with premium beans and regular restocking.',
};

export default function OfficeCoffeeServicesPage() {
  const features = [
    {
      icon: Coffee,
      title: 'Multiple Brewing Options',
      description:
        'Choose from pod-based systems for variety or bean-to-cup brewers for premium fresh-ground coffee. We have solutions for every office size.',
    },
    {
      icon: Droplet,
      title: 'Premium Coffee Selections',
      description:
        'From classic roasts to specialty blends, artisan options to decaf—we offer premium coffee brands your team will love.',
    },
    {
      icon: Settings,
      title: 'Full-Service Maintenance',
      description:
        'We handle everything: equipment installation, regular cleaning, descaling, repairs, and ongoing maintenance—all included.',
    },
    {
      icon: Sparkles,
      title: 'Complete Breakroom Solutions',
      description:
        'Coffee, tea, hot chocolate, creamers, sweeteners, cups, stirrers—we stock everything you need for a fully equipped breakroom.',
    },
  ];

  const coffeeOptions = [
    'Single-serve pod systems (K-Cup compatible)',
    'Bean-to-cup espresso machines',
    'Traditional drip coffee brewers',
    'Specialty coffee and espresso blends',
    'Decaf and flavored varieties',
    'Premium tea selections',
    'Hot chocolate and specialty drinks',
    'All supplies: cups, lids, stirrers, creamers, sweeteners',
  ];

  return (
    <div className="bg-white">
      <ServiceHero
        title="Office Coffee Services"
        description="Elevate your workplace with premium coffee service. From pod-based convenience to bean-to-cup excellence, we deliver the perfect coffee solution for your office."
        icon={Coffee}
        gradient="from-amber-900 to-amber-800"
      />

      {/* Service Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Premium Coffee Service for Your Workplace
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Great coffee fuels great work. Our office coffee services bring café-quality beverages directly to your breakroom, with none of the hassle. We provide the equipment, premium coffee selections, and ongoing service—you just enjoy perfect coffee every time.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you're a small office or a high-volume corporate campus, we tailor our coffee service to match your consumption patterns. Our data-driven restocking ensures you never run out of coffee, creamer, or supplies—even during your busiest periods.
            </p>
          </div>

          <HighVolumeCallout
            variant="emphasized"
            customText="High-volume offices demand consistent coffee availability. Our real-time tracking and flexible restocking schedules mean your coffee station is always ready, whether you need weekly service or daily replenishment."
          />
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Comprehensive Coffee Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Professional-grade equipment and premium selections for the ultimate office coffee experience.
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

      {/* Coffee Options */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Coffee & Beverage Options
              </h2>
              <p className="text-lg text-slate-600">
                Premium selections and equipment to match your office needs and preferences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {coffeeOptions.map((option, index) => (
                <div key={index} className="flex gap-3 items-start bg-muted p-4 rounded-lg">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-700 font-medium">{option}</span>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card variant="elevated">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Award className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Pod-Based Systems</h3>
                  <p className="text-slate-600">
                    Perfect for offices wanting variety. Each employee can choose their favorite blend, strength, and flavor. Quick, convenient, and consistently great.
                  </p>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <ThermometerSun className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Bean-to-Cup Excellence</h3>
                  <p className="text-slate-600">
                    For coffee connoisseurs. Fresh-ground beans with every cup, customizable strength and temperature. The ultimate in coffee quality and freshness.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Full-Service Coffee Management
              </h2>
              <p className="text-lg text-white/90">
                We handle all the details so you can focus on your business
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  icon: Settings,
                  title: 'Equipment Included',
                  description: 'Professional brewers provided at no cost',
                },
                {
                  icon: Clock,
                  title: 'Regular Restocking',
                  description: 'Coffee, supplies, and maintenance on schedule',
                },
                {
                  icon: Sparkles,
                  title: 'Always Clean',
                  description: 'Regular cleaning and maintenance included',
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
              Upgrade Your Office Coffee Experience
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Let's discuss the perfect coffee solution for your workplace—from small offices to high-volume corporate environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="primary">
                  Request Coffee Service
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
