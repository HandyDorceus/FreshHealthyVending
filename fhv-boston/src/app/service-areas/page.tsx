import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { MapPin, CheckCircle, Building2, School, Heart, Dumbbell } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Service Areas | FHV Boston - Greater Boston Vending Services',
  description:
    'Professional vending services throughout Greater Boston and surrounding areas. Serving offices, schools, healthcare facilities, gyms, and high-volume locations across Massachusetts.',
};

export default function ServiceAreasPage() {
  const locations = [
    'Boston',
    'Cambridge',
    'Somerville',
    'Brookline',
    'Newton',
    'Quincy',
    'Waltham',
    'Watertown',
    'Arlington',
    'Medford',
    'Malden',
    'Everett',
    'Chelsea',
    'Revere',
    'Dedham',
    'Needham',
  ];

  const locationTypes = [
    {
      icon: Building2,
      title: 'Corporate Offices',
      description: 'From small startups to large corporate campuses, we provide comprehensive vending solutions for businesses of all sizes.',
    },
    {
      icon: School,
      title: 'Schools & Universities',
      description: 'Educational institutions including K-12 schools, colleges, universities, and summer camps with high-volume needs.',
    },
    {
      icon: Heart,
      title: 'Healthcare Facilities',
      description: 'Hospitals, clinics, medical offices, and healthcare centers where staff and visitors need reliable refreshment options.',
    },
    {
      icon: Dumbbell,
      title: 'Fitness Centers',
      description: 'Gyms, health clubs, yoga studios, and fitness facilities requiring sports nutrition and performance products.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin size={40} className="text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Serving Greater Boston
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Professional vending services throughout the Greater Boston area and surrounding communities. Wherever you're located, we bring high-volume expertise and data-driven service to your workplace.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our Coverage Area
              </h2>
              <p className="text-lg text-slate-600">
                We proudly serve businesses and organizations throughout Greater Boston and the surrounding communities.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {locations.map((location, index) => (
                <div key={index} className="flex items-center gap-2 bg-muted p-3 rounded-lg">
                  <MapPin className="text-primary flex-shrink-0" size={18} />
                  <span className="font-medium text-slate-700">{location}</span>
                </div>
              ))}
            </div>

            <Card variant="elevated" className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Don't See Your Location?
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      We're continuously expanding our service area. If you're located in Massachusetts and interested in our services, please contact us. We're especially interested in high-volume locations throughout the state.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Types */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Who We Serve
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Specialized vending solutions for diverse workplace environments across Greater Boston.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {locationTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card key={index} variant="elevated">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="text-primary" size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                        <p className="text-slate-600">{type.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* High-Volume Specialization */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                High-Volume Locations Are Our Specialty
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                While we serve locations of all sizes, we truly excel with high-traffic, high-consumption environments. Our data-driven approach shines when volume is high and consistent availability is critical.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card variant="elevated" className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">Daily</div>
                  <div className="text-slate-600">Restocking available for busy locations</div>
                </CardContent>
              </Card>
              <Card variant="elevated" className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-slate-600">Real-time inventory monitoring</div>
                </CardContent>
              </Card>
              <Card variant="elevated" className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-slate-600">Product options available</div>
                </CardContent>
              </Card>
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
              Whether you're in downtown Boston or the surrounding suburbs, let's discuss how our high-volume vending solutions can serve your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Contact Us Today
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" className="bg-white text-primary hover:bg-slate-100">
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
