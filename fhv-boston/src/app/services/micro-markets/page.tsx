import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceHero from '@/components/services/ServiceHero';
import HighVolumeCallout from '@/components/services/HighVolumeCallout';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import {
  Store,
  CreditCard,
  Shield,
  TrendingUp,
  CheckCircle,
  ShoppingCart,
  Scan,
  Clock24
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Micro Markets | FHV Boston - Unmanned Pantry & Self-Checkout Solutions',
  description:
    'Modern micro market solutions with self-checkout kiosks. Unmanned pantry services for Boston offices with extensive product selection and 24/7 availability.',
};

export default function MicroMarketsPage() {
  const features = [
    {
      icon: Store,
      title: 'Open Market Experience',
      description:
        'Unlike traditional vending, micro markets offer an open browsing experience. Walk in, select products, and check out—just like a convenience store.',
    },
    {
      icon: Scan,
      title: 'Self-Checkout Kiosks',
      description:
        'State-of-the-art self-checkout technology accepts credit, debit, mobile payments, and contactless transactions for fast, convenient purchases.',
    },
    {
      icon: TrendingUp,
      title: 'Extensive Product Selection',
      description:
        'With more space than traditional vending, micro markets offer hundreds of products: fresh food, snacks, beverages, meals, and more.',
    },
    {
      icon: Shield,
      title: 'Secure & Monitored',
      description:
        'Advanced security systems and real-time inventory tracking ensure product security and optimal stock levels at all times.',
    },
  ];

  const benefits = [
    '24/7 unmanned operation—always open when your team needs it',
    'Fresh food, snacks, beverages, and complete meals',
    'Real-time inventory tracking for optimal stock levels',
    'Data-driven restocking based on consumption patterns',
    'Perfect for high-volume offices and corporate campuses',
    'Customizable product mix tailored to your workplace',
    'Monthly sales reports and consumption data',
    'Full installation, maintenance, and restocking included',
  ];

  return (
    <div className="bg-white">
      <ServiceHero
        title="Micro Markets"
        description="Transform your breakroom into a modern unmanned pantry. Browse hundreds of products, grab what you need, and check out in seconds with our self-service micro market solutions."
        icon={Store}
        gradient="from-purple-900 to-purple-800"
      />

      {/* Service Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              The Future of Workplace Refreshment
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Micro markets represent the evolution of workplace convenience. Unlike traditional vending machines with limited selections, micro markets offer an open-shelf browsing experience with hundreds of product options. Employees can see what they're buying, compare options, and choose exactly what they want.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our micro markets combine cutting-edge self-checkout technology with comprehensive inventory management. Real-time tracking means we know exactly what's selling and when to restock—perfect for high-volume corporate environments where variety and availability are essential.
            </p>
          </div>

          <HighVolumeCallout
            variant="emphasized"
            customText="Micro markets excel in high-traffic environments. With hundreds of products and frequent restocking, we keep your micro market fully stocked whether you need weekly service or daily replenishment for busy corporate campuses."
          />
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Modern Technology, Maximum Convenience
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Advanced systems that make workplace refreshment effortless and efficient.
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
                Why Choose Micro Markets?
              </h2>
              <p className="text-lg text-slate-600">
                The ultimate workplace convenience solution with benefits for both employees and employers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3 items-start bg-muted p-4 rounded-lg">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Simple, Secure, Always Available
              </h2>
              <p className="text-lg text-white/90">
                Three easy steps to workplace convenience
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  icon: ShoppingCart,
                  title: 'Browse & Select',
                  description: 'Walk in and choose from hundreds of products',
                },
                {
                  icon: Scan,
                  title: 'Scan Items',
                  description: 'Use the self-checkout kiosk to scan your selections',
                },
                {
                  icon: CreditCard,
                  title: 'Pay & Go',
                  description: 'Fast payment with credit, debit, or mobile wallet',
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

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-lg px-6 py-3">
                <Clock24 className="text-white" size={24} />
                <span className="text-lg font-medium">Open 24/7 for Your Convenience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready for a Micro Market?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Perfect for corporate offices, hospitals, universities, and any high-volume location where variety and convenience matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="primary">
                  Request Micro Market Service
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
