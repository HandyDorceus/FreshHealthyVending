import { Resend } from 'resend';

// Initialize Resend with API key or empty string for build time
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company: string;
  serviceInterest: string;
  message: string;
}

export interface RefundFormData {
  name: string;
  email: string;
  phone: string;
  machineLocation: string;
  transactionDate: string;
  amount: string;
  reason: string;
}

export async function sendContactEmail(data: ContactFormData) {
  const timestamp = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'long',
  });

  const emailHtml = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Submitter Name:</strong> ${data.name}</p>
    <p><strong>Submitter Email:</strong> ${data.email}</p>
    ${data.phone ? `<p><strong>Submitter Phone:</strong> ${data.phone}</p>` : ''}
    <p><strong>Company/Organization:</strong> ${data.company}</p>
    <p><strong>Service Interest:</strong> ${data.serviceInterest}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message.replace(/\n/g, '<br>')}</p>
    <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
    <p><strong>Timestamp:</strong> ${timestamp}</p>
  `;

  try {
    const result = await resend.emails.send({
      from: 'FHV Boston Website <noreply@fhvboston.com>',
      to: 'john@fhvboston.com',
      replyTo: data.email,
      subject: `[Contact Request] – ${data.name}`,
      html: emailHtml,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending contact email:', error);
    return { success: false, error };
  }
}

export async function sendRefundEmail(data: RefundFormData) {
  const timestamp = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'long',
  });

  const emailHtml = `
    <h2>New Refund Request Submission</h2>
    <p><strong>Submitter Name:</strong> ${data.name}</p>
    <p><strong>Submitter Email:</strong> ${data.email}</p>
    <p><strong>Submitter Phone:</strong> ${data.phone}</p>
    <p><strong>Location/Machine ID:</strong> ${data.machineLocation}</p>
    <p><strong>Purchase Date:</strong> ${data.transactionDate}</p>
    <p><strong>Amount Requested:</strong> $${data.amount}</p>
    <p><strong>Description of Issue:</strong></p>
    <p>${data.reason.replace(/\n/g, '<br>')}</p>
    <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
    <p><strong>Timestamp:</strong> ${timestamp}</p>
  `;

  try {
    const result = await resend.emails.send({
      from: 'FHV Boston Website <noreply@fhvboston.com>',
      to: 'john@fhvboston.com',
      replyTo: data.email,
      subject: `[Refund Request] – ${data.name}`,
      html: emailHtml,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending refund email:', error);
    return { success: false, error };
  }
}

export async function sendConfirmationEmail(to: string, type: 'contact' | 'refund') {
  const subject = type === 'contact'
    ? 'Thank you for contacting Fresh Healthy Vending Boston'
    : 'Your refund request has been received';

  const message = type === 'contact'
    ? 'Thank you for reaching out to Fresh Healthy Vending Boston. We have received your inquiry and will respond within 1-2 business days.'
    : 'Thank you for submitting your refund request. We have received your request and will process it within 3-5 business days. You will receive an email confirmation once your refund has been processed.';

  const emailHtml = `
    <h2>${subject}</h2>
    <p>${message}</p>
    <br>
    <p>Best regards,<br>
    Fresh Healthy Vending Boston<br>
    John@fhvboston.com</p>
  `;

  try {
    const result = await resend.emails.send({
      from: 'FHV Boston <noreply@fhvboston.com>',
      to,
      subject,
      html: emailHtml,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return { success: false, error };
  }
}
