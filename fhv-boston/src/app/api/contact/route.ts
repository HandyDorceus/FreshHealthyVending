import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail, sendConfirmationEmail } from '@/lib/email';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().min(2),
  serviceInterest: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactSchema.parse(body);

    // Send email to business owner
    const emailResult = await sendContactEmail(validatedData);

    if (!emailResult.success) {
      throw new Error('Failed to send email');
    }

    // Send confirmation email to customer
    await sendConfirmationEmail(validatedData.email, 'contact');

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
}
