import { NextRequest, NextResponse } from 'next/server';
import { getPlanById } from '@/lib/plans';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
  const { name, email, subject, message, budget, planId } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Resolve plan details server-side if provided
    const plan = planId ? getPlanById(String(planId)) : undefined;
    const budgetDisplay = plan?.price
      ? new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(plan.price)
      : budget;

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            ${budgetDisplay ? `<p><strong>Budget:</strong> ${budgetDisplay}</p>` : ''}
            ${plan ? `<p><strong>Plan:</strong> ${plan.name} (${budgetDisplay})</p>` : ''}
          </div>
          <div style="background: #ffffff; padding: 20px; border-left: 4px solid #3b82f6;">
            <h3>Message:</h3>
            <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <div style="margin-top: 20px; padding: 15px; background: #ecfdf5; border-radius: 8px;">
            <p style="margin: 0; color: #065f46;">
              <strong>Reply to:</strong> ${email}
            </p>
          </div>
        </div>
      `,
    };

    // Send confirmation email to the user
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Ravi Khokle',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">Thank You for Your Message!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for reaching out! I've received your message and will get back to you within 24 hours.</p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your Message Summary:</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            ${budgetDisplay ? `<p><strong>Budget:</strong> ${budgetDisplay}</p>` : ''}
            ${plan ? `<p><strong>Plan:</strong> ${plan.name}</p>` : ''}
            <p><strong>Message:</strong> ${message}</p>
          </div>
          
          <p>In the meantime, feel free to check out my latest work on <a href="https://github.com/ravikhokle" style="color: #3b82f6;">GitHub</a> or connect with me on <a href="https://linkedin.com/in/ravikhokle" style="color: #3b82f6;">LinkedIn</a>.</p>
          
          <p>Best regards,<br>
          <strong>Ravi Khokle</strong><br>
          Full Stack Developer & UI/UX Designer</p>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(confirmationMailOptions)
    ]);

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}
