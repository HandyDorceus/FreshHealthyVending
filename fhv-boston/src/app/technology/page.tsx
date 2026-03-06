import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import {
  BarChart3,
  CreditCard,
  Smartphone,
  Wifi,
  TrendingUp,
  Clock,
  Shield,
  Zap,
  CheckCircle,
  DollarSign,
  Database,
  Bell
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technology & Innovation | FHV Boston - Real-Time Tracking & Cashless Payments',
  description:
    'Advanced vending technology with real-time inventory tracking, cashless payment systems, and data-driven restocking. Modern solutions for high-volume Boston locations.',
};

export default function TechnologyPage() {
  const technologies = [
    {
      icon: BarChart3,
      title: 'Real-Time Inventory Tracking',
      description:
        'Our proprietary system monitors every sale in real-time, giving us exact visibility into stock levels across all your machines.',
      benefits: [
        'No more empty machines or sold-out products',
        'Data-driven restocking schedules',
        'Predictive analytics for high-demand items',
        'Monthly consumption reports for your team',
      ],
    },
    {
      icon: CreditCard,
      title: 'Cashless Payment Systems',
      description:
        'Accept every payment type with our advanced cashless systems. From traditional credit cards to the latest mobile wallets.',
      benefits: [
        'Credit and debit card acceptance',
        'Contactless payments (tap-to-pay)',
        'Apple Pay, Google Pay, Samsung Pay',
        'Bill recyclers for cash transactions ($1, $5, $10)',
      ],
    },
    {
      icon: Wifi,
      title: 'Remote Monitoring & Management',
      description:
        'Cloud-connected machines allow us to monitor performance, diagnose issues, and optimize operations without being on-site.',
      benefits: [
        'Proactive maintenance alerts',
        'Remote troubleshooting capabilities',
        'Temperature monitoring for fresh food',
        'Performance analytics and optimization',
      ],
    },
    {
      icon: Shield,
      title: 'Guaranteed Delivery Technology',
      description:
        'AMS Sensit III technology with guaranteed product delivery. If the product doesn\'t vend, customers automatically get a refund.',
      benefits: [
        'Sensit III infrared detection',
        'Automatic refund system',
        'Reduces customer frustration',
        'Increases customer satisfaction',
      ],
    },
  ];

  const dataAdvantages = [
    {
      icon: TrendingUp,
      title: 'Consumption Patterns',
      description: 'We analyze buying trends to optimize product mix and placement for maximum satisfaction.',
    },
    {
      icon: Clock,
      title: 'Peak Time Analysis',
      description: 'Identify busy periods and ensure machines are fully stocked during high-traffic times.',
    },
    {
      icon: Database,
      title: 'Historical Data',
      description: 'Track performance over time to continuously improve service and product selection.',
    },
    {
      icon: Bell,
      title: 'Low Stock Alerts',
      description: 'Automated alerts trigger restocking before items run out, not on fixed schedules.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap size={40} className="text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Cutting-Edge Vending Technology
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Advanced systems that drive our high-volume specialization. Real-time tracking, cashless payments, and data-driven service that keeps your machines always stocked and always available.
            </p>
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Technology-Driven, Not Route-Driven
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Traditional vending companies follow fixed routes: "We visit every Tuesday, whether your machine needs service or not." This leads to wasted trips when machines are full, and empty machines when they run out between visits.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              <strong className="text-foreground">We're different.</strong> Our real-time tracking tells us exactly when your machines need restocking. If you're a high-volume location running through products quickly, we come more often. If you're slower-paced, we adjust accordingly. It's efficient for us and better for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card variant="elevated" className="bg-slate-50">
              <CardContent className="p-8">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">📅</div>
                  <h3 className="text-xl font-bold text-foreground">Old Way: Route-Based</h3>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Fixed schedule regardless of need</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Machines run empty between visits</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>No visibility into what's selling</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Wasted trips when stocking isn't needed</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="elevated" className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">📊</div>
                  <h3 className="text-xl font-bold text-foreground">Our Way: Data-Driven</h3>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex gap-2">
                    <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                    <span className="font-medium">Restocking based on actual consumption</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                    <span className="font-medium">Machines stay fully stocked</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                    <span className="font-medium">Real-time visibility into every sale</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                    <span className="font-medium">Efficient service when you need it</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Advanced Technology Stack
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The systems and technology that power our high-volume vending solutions.
            </p>
          </div>

          <div className="grid gap-8 max-w-5xl mx-auto">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <Card key={index} variant="elevated">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Icon className="text-primary" size={32} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-3">{tech.title}</h3>
                        <p className="text-slate-600 mb-4 leading-relaxed">{tech.description}</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {tech.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex gap-2 items-start">
                              <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={16} />
                              <span className="text-sm text-slate-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Data Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              The Power of Data
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Real-time data transforms how we service your machines and optimize your product selection.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {dataAdvantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <Card key={index} variant="elevated">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-primary" size={26} />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{advantage.title}</h3>
                    <p className="text-slate-600 text-sm">{advantage.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment Technology */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Accept Every Payment Type
              </h2>
              <p className="text-lg text-white/90">
                Modern payment systems for modern workplaces
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: CreditCard, label: 'Credit & Debit', detail: 'All major cards' },
                { icon: Smartphone, label: 'Mobile Wallets', detail: 'Apple Pay, Google Pay' },
                { icon: Wifi, label: 'Contactless', detail: 'Tap-to-pay technology' },
                { icon: DollarSign, label: 'Cash Accepted', detail: '$1, $5, $10 bills' },
              ].map((payment, index) => {
                const Icon = payment.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon size={32} className="text-white" />
                    </div>
                    <div className="font-bold text-lg mb-1">{payment.label}</div>
                    <div className="text-white/80 text-sm">{payment.detail}</div>
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
              Experience Technology-Driven Service
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              See how our advanced technology delivers better service, better availability, and better results for high-volume locations.
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
