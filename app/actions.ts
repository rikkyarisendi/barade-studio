// app/actions.ts
'use server';

import { Resend } from 'resend';

export type ContactFormResponse = {
  success: boolean;
  error?: string;
};

export async function submitContactForm(
  prevState: unknown,
  formData: FormData
): Promise<ContactFormResponse> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const service = formData.get('service') as string;
  const message = formData.get('message') as string;

  // ✅ Required fields validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return { success: false, error: 'Please fill in all required fields.' };
  }

  // ✅ Name validation
  if (name.trim().length < 2 || name.trim().length > 100) {
    return { success: false, error: 'Name must be between 2 and 100 characters.' };
  }

  // ✅ Email validation
  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!EMAIL_REGEX.test(email.trim())) {
    return { success: false, error: 'Please enter a valid email address.' };
  }

  // ✅ Phone validation (optional but strict if provided)
  if (phone?.trim()) {
    const cleaned = phone.replace(/[\s\-\(\)]/g, '');
    if (!/^\+[0-9]{10,15}$/.test(cleaned)) {
      return { success: false, error: 'Please enter a valid international phone number.' };
    }
  }

  // ✅ Message validation
  if (message.trim().length < 10 || message.trim().length > 2000) {
    return { success: false, error: 'Message must be between 10 and 2000 characters.' };
  }

  // ✅ Anti-spam keyword filter
  const spamKeywords = ['viagra', 'casino', 'lottery', 'winner', 'click here', 'http://', 'https://'];
  const combinedText = `${name} ${email} ${phone} ${message}`.toLowerCase();
  
  if (spamKeywords.some(keyword => combinedText.includes(keyword))) {
    console.warn('🚫 Potential spam detected:', { email, name });
    return { success: true }; // Silent success (honeypot)
  }

  // ✅ Send email via Resend
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'BARADE Contact <onboarding@resend.dev>',
      to: ['rikkyarisendi@gmail.com'],
      subject: `📩 New Contact: ${name.trim()} - ${service}`,
      text: `
New Contact Submission
======================

Name: ${name.trim()}
Email: ${email.trim()}
Phone: ${phone?.trim() || 'N/A'}
Service: ${service}

Message:
${message.trim()}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #DCF900;">📩 New Contact Submission</h2>
          <div style="background: #f9f9ed; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name.trim()}</p>
            <p><strong>Email:</strong> ${email.trim()}</p>
            <p><strong>Phone:</strong> ${phone?.trim() || 'N/A'}</p>
            <p><strong>Service:</strong> ${service}</p>
          </div>
          <div style="background: #202020; color: #e5e5e5; padding: 20px; border-radius: 8px;">
            <h3 style="color: #DCF900; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6;">${message.trim().replace(/\n/g, '<br>')}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Sent from BARADE STUDIO Website
          </p>
        </div>
      `,
    });

    console.log('✅ Email sent successfully:', email.trim());
  } catch (error) {
    console.error('❌ Resend error:', error);
    return { success: false, error: 'Failed to send email. Please try again later.' };
  }

  return { success: true };
}