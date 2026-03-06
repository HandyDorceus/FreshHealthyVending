import type { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { Target, Heart, Users, Award, CheckCircle, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Fresh Healthy Vending Boston - your trusted partner in workplace wellness and vending solutions across the Greater Boston area.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About Fresh Healthy Vending Boston
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Dedicated to bringing fresh, healthy, and convenient vending
              solutions to businesses across the Greater Boston area.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p className="text-lg leading-relaxed">
                Fresh Healthy Vending Boston was founded with a simple mission: to
                revolutionize the vending industry by providing healthier options
                for hardworking professionals across the Boston area. We recognized
                that traditional vending machines often lacked nutritious choices,
                and we set out to change that.
              </p>
              <p className="text-lg leading-relaxed">
                With over a decade of experience in the vending industry, we&apos;ve
                built our reputation on reliability, quality, and exceptional
                customer service. Our team is committed to understanding the unique
                needs of each workplace we serve, ensuring that every vending
                machine is stocked with products that your employees will love.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we proudly serve hundreds of businesses throughout the
                Greater Boston area, from small offices to large corporate
                campuses. Our commitment to health, convenience, and customer
                satisfaction continues to drive everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We&apos;re driven by core values that shape how we serve our clients
              and their employees every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Heart,
                title: 'Health First',
                description:
                  'Prioritizing nutritious options that promote employee wellness and productivity.',
              },
              {
                icon: Target,
                title: 'Quality Service',
                description:
                  'Delivering reliable, professional service with attention to every detail.',
              },
              {
                icon: Users,
                title: 'Customer Focus',
                description:
                  'Building lasting partnerships by understanding and exceeding client expectations.',
              },
              {
                icon: Award,
                title: 'Excellence',
                description:
                  'Maintaining the highest standards in products, equipment, and service delivery.',
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} variant="elevated">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-primary" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Choose FHV Boston?
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We go beyond simply placing vending machines - we become your
                trusted partner in workplace wellness.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  {
                    title: 'Extensive Product Selection',
                    description:
                      'Choose from over 100 healthy snacks, beverages, and fresh meal options tailored to your workplace.',
                  },
                  {
                    title: 'No Cost Equipment',
                    description:
                      'We provide and install state-of-the-art vending machines at no charge to you.',
                  },
                  {
                    title: 'Full-Service Maintenance',
                    description:
                      'Our team handles all servicing, cleaning, and repairs to keep your machines running smoothly.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: 'Flexible Restocking',
                    description:
                      'Regular delivery schedule customized to your consumption patterns ensures fresh products always.',
                  },
                  {
                    title: 'Customizable Solutions',
                    description:
                      'We work with you to select products that match your employees\' preferences and dietary needs.',
                  },
                  {
                    title: '24/7 Support',
                    description:
                      'Round-the-clock customer support to address any questions or concerns promptly.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '500+', label: 'Happy Clients' },
              { number: '100+', label: 'Product Options' },
              { number: '24/7', label: 'Customer Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold mb-2 flex items-center justify-center gap-2">
                  {stat.number}
                  {index === 1 && <TrendingUp size={40} />}
                </div>
                <div className="text-lg text-white/90">{stat.label}</div>
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
              Ready to Partner With Us?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Let&apos;s discuss how Fresh Healthy Vending Boston can transform
              your workplace refreshment experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="primary">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
