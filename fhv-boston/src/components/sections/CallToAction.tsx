import Link from 'next/link';
import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Upgrade Your Workplace?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-white/90 leading-relaxed">
            Join hundreds of satisfied businesses across Boston who trust Fresh
            Healthy Vending for their workplace refreshment needs. Get started
            with a free consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary min-w-[200px]"
              >
                Get Free Quote
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="tel:+1234567890">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-slate-100 min-w-[200px]"
              >
                Call: (123) 456-7890
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl font-bold mb-2">No Cost</div>
              <div className="text-white/80">Equipment Installation</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Free</div>
              <div className="text-white/80">Maintenance & Service</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
