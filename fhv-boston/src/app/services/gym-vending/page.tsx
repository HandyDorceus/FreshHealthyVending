import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceHero from '@/components/services/ServiceHero';
import HighVolumeCallout from '@/components/services/HighVolumeCallout';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import {
  Dumbbell,
  Zap,
  Droplet,
  Award,
  CheckCircle,
  Flame,
  Battery,
  Target
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gym Vending | FHV Boston - Fitness Facility Vending Solutions',
  description:
    'Specialized vending for fitness facilities and gyms. Sports nutrition, protein supplements, energy drinks, and healthy refueling options for active Boston locations.',
};

export default function GymVendingPage() {
  const features = [
    {
      icon: Flame,
      title: 'Sports Nutrition Focus',
      description:
        'Protein bars, shakes, supplements, and recovery products designed for active individuals and fitness enthusiasts.',
    },
    {
      icon: Droplet,
      title: 'Hydration Solutions',
      description:
        'Enhanced waters, electrolyte drinks, sports beverages, and premium bottled water to support optimal hydration.',
    },
    {
      icon: Battery,
      title: 'Energy & Performance',
      description:
        'Natural energy drinks, pre-workout snacks, and performance-enhancing products to fuel workouts and recovery.',
    },
    {
      icon: Award,
      title: 'Premium Fitness Brands',
      description:
        'Top sports nutrition brands athletes recognize and trust: Quest, RXBAR, Gatorade, BodyArmor, and more.',
    },
  ];

  const productCategories = [
    'Protein bars and protein shakes',
    'Energy bars and pre-workout snacks',
    'Sports drinks and electrolyte beverages',
    'Enhanced and alkaline waters',
    'Natural energy drinks',
    'Protein chips and high-protein snacks',
    'Recovery drinks and supplements',
    'Healthy grab-and-go meals',
    'BCAA drinks and amino acid supplements',
    'Low-carb and keto-friendly options',
  ];

  return (
    <div className="bg-white">
      <ServiceHero
        title="Gym & Fitness Vending"
        description="Specialized vending solutions for fitness facilities. Sports nutrition, protein supplements, and performance products that match your members' active lifestyles."
        icon={Dumbbell}
        gradient="from-red-900 to-orange-800"
      />

      {/* Service Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Vending Built for Fitness Facilities
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Gym members have unique nutritional needs. Our fitness-focused vending solutions deliver the protein, energy, and hydration products that active individuals want and need—right when they need them. From pre-workout fuel to post-workout recovery, we stock products that support your members' fitness goals.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We understand the demands of busy fitness facilities. Peak hours mean high volume, and our data-driven restocking approach ensures your machines stay fully stocked during your busiest times. Whether you're a 24-hour gym, a boutique fitness studio, or a large health club, we tailor our service to match your traffic patterns.
            </p>
          </div>

          <HighVolumeCallout
            variant="emphasized"
            customText="Fitness facilities experience intense peak hours and high product turnover. Our real-time tracking and flexible restocking schedules ensure your vending machines keep pace with your busiest class times and rush hours."
          />
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Performance-Focused Products
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Specialized selections designed for athletes and fitness enthusiasts.
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
                Fitness & Sports Nutrition
              </h2>
              <p className="text-lg text-slate-600">
                Complete product selection to fuel workouts, support recovery, and maintain performance.
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

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <Card variant="elevated">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Pre-Workout Fuel</h3>
                  <p className="text-slate-600">
                    Energy bars, natural energy drinks, and light snacks to power through intense training sessions.
                  </p>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Post-Workout Recovery</h3>
                  <p className="text-slate-600">
                    Protein shakes, recovery drinks, and nutrient-dense snacks for optimal muscle recovery and refueling.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Benefits for Fitness Facilities
              </h2>
              <p className="text-lg text-white/90">
                Enhance member experience and drive additional revenue
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: 'Member Satisfaction',
                  description: 'Convenient access to nutrition products members want',
                },
                {
                  icon: Dumbbell,
                  title: 'Support Fitness Goals',
                  description: 'Help members fuel and recover for better results',
                },
                {
                  icon: Flame,
                  title: 'Additional Revenue',
                  description: 'Commission-based or lower pricing options available',
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
              Enhance Your Fitness Facility
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Specialized vending solutions for gyms, health clubs, yoga studios, CrossFit boxes, and all fitness facilities across Greater Boston.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="primary">
                  Request Gym Vending Service
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
