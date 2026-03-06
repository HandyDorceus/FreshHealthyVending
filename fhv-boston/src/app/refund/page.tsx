import type { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/Card';
import RefundForm from '@/components/forms/RefundForm';
import { AlertCircle, CheckCircle, Clock, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Refund Portal',
  description:
    'Submit a refund request for Fresh Healthy Vending Boston. We process all refund requests within 3-5 business days.',
};

export default function RefundPage() {
  return (
    <div className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Refund Portal
          </h1>
          <p className="text-lg text-slate-600">
            We value your satisfaction. If you experienced an issue with a
            purchase from our vending machines, please submit a refund request
            below.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Refund Policy Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card variant="elevated">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Refund Policy</h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold mb-1">Processing Time</h3>
                      <p className="text-sm text-slate-600">
                        Refund requests are processed within 3-5 business days
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold mb-1">Eligible Refunds</h3>
                      <p className="text-sm text-slate-600">
                        Product not dispensed, defective product, incorrect
                        charge, or product quality issues
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FileText className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold mb-1">Required Information</h3>
                      <p className="text-sm text-slate-600">
                        Machine location, transaction date, amount, and detailed
                        explanation
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <AlertCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold mb-1">Confirmation</h3>
                      <p className="text-sm text-slate-600">
                        You&apos;ll receive an email confirmation once your refund
                        is approved and processed
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered" className="bg-slate-900 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Need Help?</h3>
                <p className="text-sm text-white/90 mb-4">
                  If you have questions about the refund process or need
                  immediate assistance, please contact us.
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Email:</strong>{' '}
                    <a
                      href="mailto:John@fhvboston.com"
                      className="text-primary hover:underline"
                    >
                      John@fhvboston.com
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong>{' '}
                    <a
                      href="tel:+1234567890"
                      className="text-primary hover:underline"
                    >
                      (123) 456-7890
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Refund Form */}
          <div className="lg:col-span-2">
            <Card variant="elevated">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Submit Refund Request</h2>
                <RefundForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
