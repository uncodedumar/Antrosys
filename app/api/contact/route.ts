import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// Helper function to sanitize HTML content
function escapeHtml(text: string): string {
  if (!text) return '';
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Helper function to validate email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey.trim() === '') {
      console.error('RESEND_API_KEY is not configured in environment variables');
      return NextResponse.json(
        { error: 'Email service is not configured. Please check your environment variables.' },
        { status: 500 }
      );
    }

    // Check if recipient email is configured
    const toEmail = process.env.RESEND_TO_EMAIL?.trim();
    if (!toEmail || toEmail === '' || toEmail === 'your-email@example.com') {
      console.error('RESEND_TO_EMAIL is not configured in environment variables');
      return NextResponse.json(
        { error: 'Email recipient is not configured. Please set RESEND_TO_EMAIL in your environment variables.' },
        { status: 500 }
      );
    }

    // Validate recipient email format
    if (!isValidEmail(toEmail)) {
      console.error('RESEND_TO_EMAIL is not a valid email address:', toEmail);
      return NextResponse.json(
        { error: 'Invalid recipient email configuration.' },
        { status: 500 }
      );
    }

    // Parse and validate request body
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }

    const { fullName, email, phone, company, website, service } = body;

    // Validate required fields
    if (!fullName || typeof fullName !== 'string' || fullName.trim() === '') {
      return NextResponse.json(
        { error: 'Full name is required' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || email.trim() === '') {
      return NextResponse.json(
        { error: 'Email address is required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Sanitize input data
    const sanitizedData = {
      fullName: escapeHtml(fullName.trim()),
      email: escapeHtml(email.trim()),
      phone: phone ? escapeHtml(phone.trim()) : 'Not provided',
      company: company ? escapeHtml(company.trim()) : 'Not provided',
      website: website ? escapeHtml(website.trim()) : 'Not provided',
      service: service ? escapeHtml(service.trim()) : 'Not provided',
    };

    // Initialize Resend client
    const resend = new Resend(apiKey);

    // Get from email (with fallback)
    const fromEmail = process.env.RESEND_FROM_EMAIL?.trim() || 'onboarding@resend.dev';

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: sanitizedData.email,
      subject: `New Contact Form Submission from ${sanitizedData.fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              h2 { color: #F15A29; border-bottom: 2px solid #F15A29; padding-bottom: 10px; }
              .field { margin: 15px 0; }
              .label { font-weight: bold; color: #555; }
              .value { margin-top: 5px; color: #333; }
            </style>
          </head>
          <body>
            <div class="container">
              <h2>New Contact Form Submission</h2>
              <div class="field">
                <div class="label">Full Name:</div>
                <div class="value">${sanitizedData.fullName}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${sanitizedData.email}</div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${sanitizedData.phone}</div>
              </div>
              <div class="field">
                <div class="label">Company:</div>
                <div class="value">${sanitizedData.company}</div>
              </div>
              <div class="field">
                <div class="label">Website:</div>
                <div class="value">${sanitizedData.website}</div>
              </div>
              <div class="field">
                <div class="label">Service Needed:</div>
                <div class="value">${sanitizedData.service}</div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend API error:', JSON.stringify(error, null, 2));
      
      // Provide user-friendly error messages
      let errorMessage = 'Failed to send email. ';
      if (error.message) {
        if (error.message.includes('API key')) {
          errorMessage += 'Invalid API key. Please check your RESEND_API_KEY.';
        } else if (error.message.includes('domain') || error.message.includes('from')) {
          errorMessage += 'Email domain not verified. Please check your RESEND_FROM_EMAIL.';
        } else {
          errorMessage += error.message;
        }
      } else {
        errorMessage += 'Please check your Resend configuration.';
      }

      return NextResponse.json(
        { error: errorMessage },
        { status: 500 }
      );
    }

    if (!data || !data.id) {
      console.error('Resend returned no data or ID');
      return NextResponse.json(
        { error: 'Email service returned an unexpected response.' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully. Resend ID:', data.id);

    return NextResponse.json(
      { 
        message: 'Email sent successfully', 
        id: data.id 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('API route error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json(
      { error: `An unexpected error occurred: ${errorMessage}` },
      { status: 500 }
    );
  }
}
