import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Truck, Wrench, Package, Clock } from 'lucide-react';

const services = [
  {
    icon: Package,
    title: 'Healthy Product Selection',
    description:
      'Wide variety of nutritious snacks, beverages, and fresh food options tailored to your workplace preferences.',
  },
  {
    icon: Truck,
    title: 'Regular Restocking',
    description:
      'Reliable delivery schedule ensuring your machines are always fully stocked with fresh products.',
  },
  {
    icon: Wrench,
    title: 'Full Maintenance',
    description:
      'Complete service and maintenance of all equipment at no additional cost to keep everything running smoothly.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description:
      'Round-the-clock customer support to handle any questions or issues that may arise.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-slate-600">
            Comprehensive vending solutions designed to meet the unique needs of
            your business. We handle everything so you don&apos;t have to.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} variant="elevated">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/services">
            <Button size="lg" variant="primary">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
