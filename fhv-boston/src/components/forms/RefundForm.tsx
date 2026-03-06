'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import { CheckCircle, AlertCircle } from 'lucide-react';

const refundSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  machineLocation: z.string().min(2, 'Machine location/ID is required'),
  transactionDate: z.string().min(1, 'Transaction date is required'),
  amount: z.string().min(1, 'Amount is required'),
  reason: z.string().min(20, 'Please provide a detailed reason (minimum 20 characters)'),
});

type RefundFormData = z.infer<typeof refundSchema>;

export default function RefundForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RefundFormData>({
    resolver: zodResolver(refundSchema),
  });

  const onSubmit = async (data: RefundFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/refund', {
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
              Refund Request Submitted!
            </h4>
            <p className="text-sm text-green-700">
              Your refund request has been received. We&apos;ll process it within
              3-5 business days and send you a confirmation email.
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
              There was an error submitting your refund request. Please try again
              or contact us directly at John@fhvboston.com.
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
            required
          />
          <Input
            label="Machine Location/ID"
            {...register('machineLocation')}
            error={errors.machineLocation?.message}
            placeholder="e.g., Building A - 2nd Floor, Machine #123"
            required
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <Input
            label="Transaction Date"
            type="date"
            {...register('transactionDate')}
            error={errors.transactionDate?.message}
            required
          />
          <Input
            label="Amount"
            type="number"
            step="0.01"
            {...register('amount')}
            error={errors.amount?.message}
            placeholder="0.00"
            required
          />
        </div>

        <Textarea
          label="Reason for Refund"
          {...register('reason')}
          error={errors.reason?.message}
          placeholder="Please provide a detailed explanation of why you are requesting a refund..."
          rows={6}
          required
        />

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
          <p className="text-sm text-slate-600">
            <strong>Note:</strong> Refund requests are typically processed within
            3-5 business days. You will receive an email confirmation once your
            refund has been approved and processed.
          </p>
        </div>

        <Button
          type="submit"
          size="lg"
          variant="primary"
          isLoading={isSubmitting}
          className="w-full sm:w-auto"
        >
          Submit Refund Request
        </Button>
      </form>
    </div>
  );
}
