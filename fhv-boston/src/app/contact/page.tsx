import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Fresh Healthy Vending Boston. We\'re here to answer your questions and help you find the perfect vending solution for your business.',
};

export default function ContactPage() {
  return (
    <div className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-slate-600">
            Ready to bring fresh, healthy vending to your workplace? Get in touch
            with us today for a free consultation and quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card variant="elevated">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:John@fhvboston.com"
                        className="text-slate-600 hover:text-primary transition-colors"
                      >
                        John@fhvboston.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a
                        href="tel:+1234567890"
                        className="text-slate-600 hover:text-primary transition-colors"
                      >
                        (123) 456-7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-slate-600">
                        Boston, Massachusetts
                        <br />
                        Serving the Greater Boston Area
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <div className="text-sm text-slate-600 space-y-1">
                        <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered" className="bg-primary text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Quick Response</h3>
                <p className="text-sm text-white/90">
                  We typically respond to all inquiries within 1-2 business days.
                  For urgent matters, please call us directly.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card variant="elevated">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
