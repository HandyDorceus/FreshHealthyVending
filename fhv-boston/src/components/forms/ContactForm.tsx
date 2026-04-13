'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import { CheckCircle, AlertCircle } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().min(2, 'Company name is required'),
  serviceInterest: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const serviceOptions = [
  { value: '', label: 'Select a service...' },
  { value: 'healthy-vending', label: 'Healthy Vending Machines' },
  { value: 'traditional-vending', label: 'Traditional Vending Machines' },
  { value: 'fresh-food', label: 'Fresh Food & Meals' },
  { value: 'beverage-service', label: 'Beverage Service' },
  { value: 'micro-market', label: 'Micro Market Solutions' },
  { value: 'other', label: 'Other / General Inquiry' },
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendAnother = () => {
    setSubmitStatus('idle');
    reset();
  };

  // Success State - Replace entire form with success message
  if (submitStatus === 'success') {
    return (
      <div
        className="w-full text-center py-12"
        role="status"
        aria-live="polite"
      >
        <div className="flex flex-col items-center max-w-md mx-auto">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="text-primary" size={48} />
          </div>

          {/* Success Heading */}
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Message Sent!
          </h3>

          {/* Success Message */}
          <p className="text-lg text-slate-600 mb-8">
            Thank you for reaching out. We&apos;ll get back to you shortly.
          </p>

          {/* Send Another Button */}
          <Button
            onClick={handleSendAnother}
            size="lg"
            variant="primary"
            className="w-full sm:w-auto"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  // Form State - Show form with optional error banner
  return (
    <div className="w-full">
      {/* Error Banner - Only shows when there's an error */}
      {submitStatus === 'error' && (
        <div
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
          role="alert"
          aria-live="assertive"
        >
          <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <h4 className="font-semibold text-red-900 mb-1">
              Something went wrong
            </h4>
            <p className="text-sm text-red-700">
              Please try again or contact us directly at{' '}
              <a
                href="mailto:john@fhvboston.com"
                className="underline hover:text-red-900 font-medium"
              >
                john@fhvboston.com
              </a>
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            {...register('name')}
            error={errors.name?.message}
            placeholder="John Smith"
            required
            disabled={isSubmitting}
          />
          <Input
            label="Email Address"
            type="email"
            {...register('email')}
            error={errors.email?.message}
            placeholder="john@example.com"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <Input
            label="Phone Number"
            type="tel"
            {...register('phone')}
            error={errors.phone?.message}
            placeholder="(123) 456-7890"
            disabled={isSubmitting}
          />
          <Input
            label="Company Name"
            {...register('company')}
            error={errors.company?.message}
            placeholder="Acme Corporation"
            required
            disabled={isSubmitting}
          />
        </div>

        <Select
          label="Service Interest"
          {...register('serviceInterest')}
          error={errors.serviceInterest?.message}
          options={serviceOptions}
          required
          disabled={isSubmitting}
        />

        <Textarea
          label="Message"
          {...register('message')}
          error={errors.message?.message}
          placeholder="Tell us about your vending needs..."
          rows={6}
          required
          disabled={isSubmitting}
        />

        <Button
          type="submit"
          size="lg"
          variant="primary"
          isLoading={isSubmitting}
          className="w-full sm:w-auto"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}
