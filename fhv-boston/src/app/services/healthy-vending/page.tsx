import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceHero from '@/components/services/ServiceHero';
import HighVolumeCallout from '@/components/services/HighVolumeCallout';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { fetchUnsplashImage } from '@/lib/unsplash';
import {
  Heart,
  Leaf,
  Apple,
  Award,
  CheckCircle,
  Sparkles,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Healthy Vending | FHV Boston - Nutritious Snacks & Better-For-You Options',
  description:
    'Dedicated healthy vending solutions with nutritious snacks and better-for-you beverages. Wellness-focused vending for Boston workplaces promoting employee health.',
};

export default async function HealthyVendingPage() {
  const heroImage = await fetchUnsplashImage('healthy food');

  const features = [
    {
      icon: Leaf,
      title: 'Better-For-You Selection',
      description:
        'Carefully curated products focusing on natural ingredients, lower sugar, whole grains, and nutritional value without sacrificing taste.',
    },
    {
      icon: Apple,
      title: 'Fresh & Natural Options',
      description:
        'Fresh fruit, vegetables, nuts, granola, yogurt, and wholesome snacks that support your wellness initiatives.',
    },
    {
      icon: ShieldCheck,
      title: 'Dietary Accommodations',
      description:
        'Options for various dietary needs: gluten-free, vegan, organic, non-GMO, keto, and allergy-friendly choices.',
    },
    {
      icon: Award,
      title: 'Quality Brands',
      description:
        'Premium healthy brands your employees recognize and trust, from established wellness companies and emerging health-focused innovators.',
    },
  ];

  const productCategories = [
    'Fresh fruit and vegetables',
    'Nuts, seeds, and trail mixes',
    'Protein bars and energy bars',
    'Whole grain and gluten-free snacks',
    'Greek yogurt and protein-packed options',
    'Organic and non-GMO selections',
    'Low-sugar beverages and enhanced waters',
    'Vegan and plant-based options',
    'Keto-friendly and paleo snacks',
    'Natural energy drinks and smoothies',
  ];

  return (
    <div className="bg-white">
      <ServiceHero
        title="Healthy Vending Solutions"
        description="Support workplace wellness with vending machines dedicated to nutritious, better-for-you options. From fresh fruit to protein-packed snacks, we make healthy choices convenient."
        icon={Heart}
        gradient="from-green-900 to-emerald-800"
        backgroundImage={heroImage.success && heroImage.data ? heroImage.data.urls.regular : undefined}
        imageAlt={heroImage.success && heroImage.data ? heroImage.data.alt_description || 'Healthy Vending Solutions' : undefined}
      />

      {/* Service Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Wellness-Focused Vending
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Support your team's health and wellness goals with vending solutions designed around nutrition. Our healthy vending program offers carefully selected products that meet rigorous nutritional standards while still delivering on taste and satisfaction.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you're implementing a corporate wellness initiative or simply want to offer better options, our healthy vending solutions deliver. We customize product selections to match your team's preferences and dietary requirements, ensuring healthy options that people actually want to choose.
            </p>
          </div>

          <HighVolumeCallout
            variant="emphasized"
            customText="Healthy options are especially popular in high-volume wellness-focused environments like corporate offices, healthcare facilities, and fitness centers. Our data-driven restocking ensures fresh, nutritious options are always available."
          />
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Nutrition Meets Convenience
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Healthy vending that supports your wellness programs and employee satisfaction.
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
                Healthy Product Selection
              </h2>
              <p className="text-lg text-slate-600">
                Nutritious options across every category to satisfy diverse tastes and dietary needs.
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

            <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex gap-4">
                <Sparkles className="text-green-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Customized Wellness Programs</h3>
                  <p className="text-slate-700 leading-relaxed">
                    We work with you to create product mixes that align with your corporate wellness initiatives, nutritional guidelines, and employee preferences. Every location gets a tailored healthy selection.
                  </p>
                </div>
              </div>
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
                Benefits of Healthy Vending
              </h2>
              <p className="text-lg text-white/90">
                Supporting employee wellness and business goals simultaneously
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: 'Employee Wellness',
                  description: 'Support healthier lifestyles and show you care',
                },
                {
                  icon: TrendingUp,
                  title: 'Increased Productivity',
                  description: 'Better nutrition leads to better focus and energy',
                },
                {
                  icon: Award,
                  title: 'Wellness Programs',
                  description: 'Complement and enhance corporate health initiatives',
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
              Invest in Employee Wellness
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Make healthy choices the easy choice with dedicated healthy vending solutions for your workplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="primary">
                  Request Healthy Vending
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
