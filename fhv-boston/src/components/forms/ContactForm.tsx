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

  return (
    <div className="w-full">
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
          <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <h4 className="font-semibold text-green-900 mb-1">
              Message Sent Successfully!
            </h4>
            <p className="text-sm text-green-700">
              Thank you for contacting us. We&apos;ll get back to you within 1-2
              business days.
            </p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <h4 className="font-semibold text-red-900 mb-1">
              Submission Failed
            </h4>
            <p className="text-sm text-red-700">
              There was an error sending your message. Please try again or contact
              us directly at John@fhvboston.com.
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
          />
          <Input
            label="Email Address"
            type="email"
            {...register('email')}
            error={errors.email?.message}
            placeholder="john@example.com"
            required
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <Input
            label="Phone Number"
            type="tel"
            {...register('phone')}
            error={errors.phone?.message}
            placeholder="(123) 456-7890"
          />
          <Input
            label="Company Name"
            {...register('company')}
            error={errors.company?.message}
            placeholder="Acme Corporation"
            required
          />
        </div>

        <Select
          label="Service Interest"
          {...register('serviceInterest')}
          error={errors.serviceInterest?.message}
          options={serviceOptions}
          required
        />

        <Textarea
          label="Message"
          {...register('message')}
          error={errors.message?.message}
          placeholder="Tell us about your vending needs..."
          rows={6}
          required
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
