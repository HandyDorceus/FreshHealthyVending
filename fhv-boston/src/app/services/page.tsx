import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import {
  Truck,
  Wrench,
  Package,
  Clock,
  Settings,
  DollarSign,
  Users,
  ShoppingCart,
  CheckCircle,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Comprehensive vending solutions from Fresh Healthy Vending Boston. From equipment installation to regular maintenance and custom product selection.',
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Complete vending solutions tailored to your business needs. We handle
              everything so you can focus on what matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From installation to ongoing support, we provide comprehensive vending
              services designed to meet the unique needs of your workplace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Package,
                title: 'Custom Product Selection',
                description:
                  'We work with you to curate a product mix that matches your employees\' preferences, dietary requirements, and budget. Choose from our extensive catalog of healthy snacks, beverages, and fresh meals.',
                features: [
                  'Healthy & traditional options',
                  'Dietary accommodation',
                  'Seasonal product rotation',
                  'Employee preference surveys',
                ],
              },
              {
                icon: Truck,
                title: 'Regular Restocking',
                description:
                  'Never worry about empty machines. Our reliable delivery schedule ensures your vending machines are always fully stocked with fresh products.',
                features: [
                  'Scheduled deliveries',
                  'Demand-based restocking',
                  'Fresh product rotation',
                  'Inventory tracking',
                ],
              },
              {
                icon: Wrench,
                title: 'Full-Service Maintenance',
                description:
                  'We take care of all equipment servicing, cleaning, and repairs at no additional cost. Our team ensures your machines are always in perfect working condition.',
                features: [
                  'Regular cleaning',
                  'Preventive maintenance',
                  'Quick repairs',
                  'Equipment upgrades',
                ],
              },
              {
                icon: Settings,
                title: 'Equipment Installation',
                description:
                  'Professional installation of state-of-the-art vending equipment at no cost to you. We handle everything from site assessment to final setup.',
                features: [
                  'Free equipment placement',
                  'Site consultation',
                  'Professional installation',
                  'Employee training',
                ],
              },
              {
                icon: Clock,
                title: '24/7 Customer Support',
                description:
                  'Round-the-clock support to handle any questions, concerns, or issues that may arise. We\'re always here when you need us.',
                features: [
                  'Phone & email support',
                  'Emergency response',
                  'Account management',
                  'Reporting & analytics',
                ],
              },
              {
                icon: DollarSign,
                title: 'Flexible Payment Options',
                description:
                  'Modern payment solutions including cash, credit/debit cards, and mobile payments. We make it easy for everyone to enjoy our products.',
                features: [
                  'Cash payments',
                  'Card readers',
                  'Mobile payments',
                  'Contactless options',
                ],
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} variant="elevated" className="h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={32} />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <CheckCircle
                            className="text-primary flex-shrink-0 mt-0.5"
                            size={16}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Getting started with Fresh Healthy Vending Boston is simple and
              straightforward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '1',
                title: 'Initial Consultation',
                description:
                  'We discuss your needs, assess your space, and recommend the best vending solutions.',
                icon: Users,
              },
              {
                step: '2',
                title: 'Custom Planning',
                description:
                  'We create a customized product selection and service plan tailored to your workplace.',
                icon: ShoppingCart,
              },
              {
                step: '3',
                title: 'Installation',
                description:
                  'Our team professionally installs the equipment at no cost and stocks it with your selected products.',
                icon: Settings,
              },
              {
                step: '4',
                title: 'Ongoing Service',
                description:
                  'We provide regular restocking, maintenance, and support to keep everything running smoothly.',
                icon: Sparkles,
              },
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <Card variant="elevated" className="h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                        {step.step}
                      </div>
                      <Icon
                        className="text-primary mx-auto mb-4"
                        size={32}
                      />
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-slate-600">{step.description}</p>
                    </CardContent>
                  </Card>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Benefits for Your Business
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Partnering with Fresh Healthy Vending Boston brings multiple
                advantages to your workplace.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Boost Employee Morale',
                  description:
                    'Show your employees you care about their well-being with convenient access to healthy food and beverages.',
                },
                {
                  title: 'Increase Productivity',
                  description:
                    'Well-nourished employees are more focused, energized, and productive throughout the day.',
                },
                {
                  title: 'No Upfront Costs',
                  description:
                    'We provide all equipment and installation at no charge, making it risk-free for your business.',
                },
                {
                  title: 'Hassle-Free Management',
                  description:
                    'We handle all aspects of service, maintenance, and restocking - no work required from you.',
                },
                {
                  title: 'Attract & Retain Talent',
                  description:
                    'Modern workplace amenities like quality vending help attract and keep top talent.',
                },
                {
                  title: 'Promote Wellness',
                  description:
                    'Support your employee wellness initiatives with healthier snack and meal options.',
                },
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Contact us today for a free consultation and see how we can transform
              your workplace refreshment experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-slate-100 min-w-[200px]"
                >
                  Get Free Quote
                </Button>
              </Link>
              <Link href="tel:+1234567890">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary min-w-[200px]"
                >
                  Call: (123) 456-7890
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
