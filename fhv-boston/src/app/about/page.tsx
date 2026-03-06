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

      {/* What Sets Us Apart */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                What Sets Us Apart
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We're not just another vending company. Our unique approach to high-volume service and data-driven operations delivers superior results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card variant="elevated">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">High-Volume Specialization</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    We thrive on high-volume locations. Busy offices, summer camps, healthcare facilities, corporate campuses—places where vending machines see heavy traffic and rapid turnover are where we excel.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    From once a week to every day, even multiple times per day—we're equipped to handle whatever volume your location demands.
                  </p>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Data-Driven, Not Route-Based</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Unlike competitors who follow fixed routes regardless of need, our real-time inventory tracking tells us exactly when your machines need restocking.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    We don't restock on Tuesdays because "that's when we're in your area." We restock based on actual consumption data, ensuring machines stay full without wasted trips.
                  </p>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Customer-First Philosophy</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    High communication and exceptional customer service aren't optional extras—they're fundamental to how we operate.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Monthly data sharing reports keep you informed. Individually tailored product mixes ensure your team gets what they actually want. If it's vendible, we can usually procure it.
                  </p>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Award className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Advanced Technology</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    State-of-the-art equipment manufactured in the USA. Cashless payment systems accepting credit, debit, contactless, and mobile payments.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Guaranteed Delivery Sensit Technology ensures customers get their product every time—or an automatic refund.
                  </p>
                </CardContent>
              </Card>
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
                    title: '500+ Product Options',
                    description:
                      'From traditional snacks to fresh food, healthy options to sports nutrition—we offer an extensive selection tailored to your location.',
                  },
                  {
                    title: 'Real-Time Inventory Tracking',
                    description:
                      'Proprietary systems monitor every sale, driving data-based restocking schedules that keep your machines fully stocked.',
                  },
                  {
                    title: 'High-Volume Expertise',
                    description:
                      'We specialize in locations with heavy traffic and high consumption. Daily restocking? Multiple visits per day? We handle it.',
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
                    title: 'No Cost Equipment',
                    description:
                      'State-of-the-art USA-manufactured vending machines with cashless payment systems—provided at no charge to you.',
                  },
                  {
                    title: 'Individually Tailored Service',
                    description:
                      'Custom product mix, flexible pricing options (commission or lower per-item pricing), and monthly data reports.',
                  },
                  {
                    title: 'Full-Service Maintenance',
                    description:
                      'Complete servicing, cleaning, repairs, and 24/7 support—everything handled so you can focus on your business.',
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
