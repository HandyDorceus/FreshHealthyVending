import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceHero from '@/components/services/ServiceHero';
import HighVolumeCallout from '@/components/services/HighVolumeCallout';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import {
  Droplets,
  Recycle,
  Shield,
  Award,
  CheckCircle,
  Sparkles,
  Filter,
  RefreshCw
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Water Services | FHV Boston - Bottled & Bottle-less Water Solutions',
  description:
    'Professional water dispenser services for Boston workplaces. Bottled water delivery and bottle-less filtration systems with regular service and maintenance included.',
};

export default function WaterServicesPage() {
  const features = [
    {
      icon: Droplets,
      title: 'Bottled Water Delivery',
      description:
        'Premium bottled water delivery service with hot and cold dispensers. We handle delivery, dispenser maintenance, and all logistics.',
    },
    {
      icon: Filter,
      title: 'Bottle-less Filtration',
      description:
        'Point-of-use water filtration systems connected directly to your water line. Unlimited filtered water without bottle storage or waste.',
    },
    {
      icon: RefreshCw,
      title: 'Regular Maintenance',
      description:
        'Scheduled sanitization, filter changes, and equipment maintenance to ensure clean, safe water at all times.',
    },
    {
      icon: Recycle,
      title: 'Eco-Friendly Options',
      description:
        'Reduce plastic waste with bottle-less systems, or choose recyclable bottled water options. Sustainable hydration for your workplace.',
    },
  ];

  const bottledWaterBenefits = [
    'Hot and cold water dispensers provided',
    'Regular delivery on customized schedule',
    'Premium purified and spring water options',
    'Sanitation and maintenance included',
    'No plumbing required—place anywhere',
    'Backup bottles always on hand',
  ];

  const bottlelessBenefits = [
    'Unlimited filtered water—no bottle limits',
    'Eliminate plastic bottle waste',
    'Advanced multi-stage filtration',
    'Hot, cold, and room temperature options',
    'Regular filter changes and sanitization',
    'Lower long-term costs for high-volume usage',
  ];

  return (
    <div className="bg-white">
      <ServiceHero
        title="Water Services"
        description="Keep your workplace hydrated with professional water solutions. Choose bottled water delivery or eco-friendly bottle-less systems—both with full service and maintenance included."
        icon={Droplets}
        gradient="from-blue-900 to-cyan-800"
      />

      {/* Service Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Professional Water Solutions
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Clean, refreshing water is essential in every workplace. Our water services provide convenient, reliable hydration for your team with equipment, delivery, and maintenance all included. Whether you prefer traditional bottled water delivery or modern bottle-less filtration systems, we offer comprehensive solutions tailored to your needs.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              For high-volume locations, water consumption can be significant. Our flexible service plans accommodate everything from small offices to busy facilities with dozens of employees. We monitor usage patterns and adjust delivery schedules or filter maintenance to ensure your team always has access to fresh, clean water.
            </p>
          </div>

          <HighVolumeCallout
            variant="emphasized"
            customText="High-volume workplaces consume significant amounts of water. Whether through frequent bottled water delivery or unlimited bottle-less systems, we ensure your team stays hydrated without ever running out."
          />
        </div>
      </section>

      {/* Service Options */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Two Water Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Choose the water service that best fits your workplace needs and preferences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {/* Bottled Water */}
            <Card variant="elevated">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Droplets className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Bottled Water Delivery</h3>
                <p className="text-slate-600 mb-6">
                  Traditional water cooler service with regular delivery and dispenser maintenance. Perfect for locations without dedicated water lines or those preferring bottled water.
                </p>
                <div className="space-y-3">
                  {bottledWaterBenefits.map((benefit, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-slate-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Bottle-less */}
            <Card variant="elevated">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Filter className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Bottle-less Filtration</h3>
                <p className="text-slate-600 mb-6">
                  Modern point-of-use filtration connected to your existing water line. Eco-friendly solution with unlimited filtered water and reduced plastic waste.
                </p>
                <div className="space-y-3">
                  {bottlelessBenefits.map((benefit, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-slate-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Premium Water Service Features
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Professional service and maintenance for both bottled and bottle-less solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} variant="elevated">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-primary" size={26} />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality & Safety */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Clean, Safe, Refreshing Water
              </h2>
              <p className="text-lg text-white/90">
                Quality and safety in every drop
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Quality Standards',
                  description: 'Premium water meeting all safety and purity standards',
                },
                {
                  icon: Sparkles,
                  title: 'Regular Sanitization',
                  description: 'Scheduled cleaning and maintenance for all equipment',
                },
                {
                  icon: Award,
                  title: 'Reliable Service',
                  description: 'Consistent delivery and support you can count on',
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
              Ready for Professional Water Service?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Let's discuss the best water solution for your workplace—bottled delivery or bottle-less filtration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="primary">
                  Request Water Service
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
