import type { Metadata } from 'next';
import ServiceCard from '@/components/services/ServiceCard';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import {
  Package,
  Salad,
  Coffee,
  Store,
  Heart,
  Dumbbell,
  Droplets,
  CheckCircle,
  TrendingUp,
  BarChart3,
  Clock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services | FHV Boston - Complete Vending Solutions',
  description:
    'Comprehensive vending solutions from Fresh Healthy Vending Boston. Traditional vending, fresh food, coffee service, micro markets, and more—all with high-volume specialization.',
};

const services = [
  {
    icon: Package,
    title: 'Traditional Vending',
    description:
      'Full-service vending machines with 500+ snack and beverage options. State-of-the-art equipment with cashless payment systems and guaranteed delivery technology.',
    link: '/services/traditional-vending',
  },
  {
    icon: Salad,
    title: 'Fresh Food Vending',
    description:
      'Refrigerated fresh food solutions with gourmet sandwiches, salads, and healthy meals. Daily restocking available for high-volume locations.',
    link: '/services/fresh-food-vending',
  },
  {
    icon: Coffee,
    title: 'Office Coffee Services',
    description:
      'Premium coffee solutions from pod-based systems to bean-to-cup brewers. Complete breakroom service with all supplies and maintenance included.',
    link: '/services/office-coffee-services',
  },
  {
    icon: Store,
    title: 'Micro Markets',
    description:
      'Modern unmanned pantry with self-checkout kiosks. Browse hundreds of products in an open market experience with 24/7 availability.',
    link: '/services/micro-markets',
  },
  {
    icon: Heart,
    title: 'Healthy Vending',
    description:
      'Dedicated wellness-focused vending with nutritious snacks and better-for-you options. Support your workplace health initiatives with curated healthy selections.',
    link: '/services/healthy-vending',
  },
  {
    icon: Dumbbell,
    title: 'Gym Vending',
    description:
      'Specialized vending for fitness facilities. Sports nutrition, protein supplements, and performance products designed for active lifestyles.',
    link: '/services/gym-vending',
  },
  {
    icon: Droplets,
    title: 'Water Services',
    description:
      'Professional water solutions with bottled delivery or bottle-less filtration systems. All equipment, maintenance, and regular service included.',
    link: '/services/water-services',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Comprehensive Vending Solutions
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              From traditional vending to modern micro markets, we offer complete solutions for every workplace need. All backed by our high-volume specialization and real-time tracking technology.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              All Your Vending Needs, One Trusted Partner
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Explore our complete range of vending solutions. Each service is backed by our high-volume expertise, real-time inventory tracking, and data-driven restocking approach.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                image="placeholder"
              />
            ))}
          </div>
        </div>
      </section>

      {/* High-Volume Specialization */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Built for High-Volume Locations
              </h2>
              <p className="text-lg text-white/90">
                What sets us apart from traditional vending companies
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  icon: BarChart3,
                  title: 'Real-Time Tracking',
                  description: 'Monitor every sale and stock level with our proprietary system',
                },
                {
                  icon: TrendingUp,
                  title: 'Data-Driven Restocking',
                  description: 'Service based on consumption, not arbitrary routes',
                },
                {
                  icon: Clock,
                  title: 'Flexible Schedules',
                  description: 'Weekly to daily to multiple times per day—we adapt to your volume',
                },
              ].map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon size={32} className="text-white" />
                    </div>
                    <div className="font-bold text-lg mb-2">{advantage.title}</div>
                    <div className="text-white/80">{advantage.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Complete Service, No Hidden Costs
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Everything you need for a successful vending program—all included at no upfront cost.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              'State-of-the-art USA-manufactured equipment',
              'Professional installation at no cost',
              'Cashless payment systems (all card types, mobile pay)',
              'Real-time inventory tracking technology',
              'Data-driven restocking schedules',
              'Full-service maintenance and repairs',
              'Regular equipment cleaning',
              'Individually tailored product selection',
              'Monthly consumption reports',
              '500+ product options available',
              '24/7 customer support',
              'Flexible pricing (commission or lower per-item)',
            ].map((item, index) => (
              <div key={index} className="flex gap-3 items-start bg-white p-4 rounded-lg">
                <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
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
              Whether you need traditional vending, fresh food service, coffee solutions, or a complete micro market—we have the expertise and technology to serve your high-volume location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="primary">
                  Request a Free Consultation
                </Button>
              </Link>
              <Link href="/technology">
                <Button size="lg" variant="outline">
                  Learn About Our Technology
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
