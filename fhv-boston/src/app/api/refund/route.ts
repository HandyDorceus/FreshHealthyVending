import { NextRequest, NextResponse } from 'next/server';
import { sendRefundEmail, sendConfirmationEmail } from '@/lib/email';
import { z } from 'zod';

const refundSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  machineLocation: z.string().min(2),
  transactionDate: z.string().min(1),
  amount: z.string().min(1),
  reason: z.string().min(20),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = refundSchema.parse(body);

    // Send email to business owner
    const emailResult = await sendRefundEmail(validatedData);

    if (!emailResult.success) {
      throw new Error('Failed to send email');
    }

    // Send confirmation email to customer
    await sendConfirmationEmail(validatedData.email, 'refund');

    return NextResponse.json(
      { message: 'Refund request submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Refund form error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to process refund request' },
      { status: 500 }
    );
  }
}
