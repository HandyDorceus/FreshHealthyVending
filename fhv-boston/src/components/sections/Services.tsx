import Link from 'next/link';
import ServiceCard from '@/components/services/ServiceCard';
import Button from '@/components/ui/Button';
import { Package, Salad, Coffee, Store, Heart, Dumbbell, Droplets } from 'lucide-react';

const services = [
  {
    icon: Package,
    title: 'Traditional Vending',
    description:
      'Full-service vending machines with 500+ snack and beverage options. State-of-the-art equipment with cashless payment systems.',
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
      'Premium coffee solutions from pod-based systems to bean-to-cup brewers. Complete breakroom service with maintenance included.',
    link: '/services/office-coffee-services',
  },
  {
    icon: Store,
    title: 'Micro Markets',
    description:
      'Modern unmanned pantry with self-checkout kiosks. Browse hundreds of products in an open market experience.',
    link: '/services/micro-markets',
  },
  {
    icon: Heart,
    title: 'Healthy Vending',
    description:
      'Dedicated wellness-focused vending with nutritious snacks and better-for-you options. Support your workplace health initiatives.',
    link: '/services/healthy-vending',
  },
  {
    icon: Dumbbell,
    title: 'Gym Vending',
    description:
      'Specialized vending for fitness facilities. Sports nutrition, protein supplements, and performance products for active lifestyles.',
    link: '/services/gym-vending',
  },
  {
    icon: Droplets,
    title: 'Water Services',
    description:
      'Professional water solutions with bottled delivery or bottle-less filtration systems. All equipment and maintenance included.',
    link: '/services/water-services',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Vending Solutions
          </h2>
          <p className="text-lg text-slate-600">
            From traditional vending to modern micro markets, we offer complete solutions for every workplace need. All backed by our high-volume specialization and real-time tracking technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
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
