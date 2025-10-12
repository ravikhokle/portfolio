import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
  const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Ensure email envs are present
    const host = process.env.EMAIL_HOST || 'smtp.gmail.com';
    const port = parseInt(process.env.EMAIL_PORT || '587', 10);
    const secure = port === 465; // SSL for 465, STARTTLS for 587/25
    const userEmail = process.env.EMAIL_USER;
    const userPass = process.env.EMAIL_PASS;
    if (!userEmail || !userPass) {
      return NextResponse.json(
        { error: 'Email is not configured. Please set EMAIL_USER and EMAIL_PASS in the environment.' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user: userEmail,
        pass: userPass,
      },
    });

    // Verify connection early for clearer errors
    try {
      await transporter.verify();
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      console.error('SMTP Connection Error:', msg);
      return NextResponse.json(
        { 
          error: `Email configuration error. Please contact me directly at ${userEmail}`,
          details: 'SMTP authentication failed. The Gmail App Password may be invalid.'
        },
        { status: 500 }
      );
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || userEmail,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `Portfolio Contact: ${subject}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <!-- Profile Header -->
          <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #3b82f6;">
            <img src="https://ravikhokle.site/Images/me/ravikhokle.png" alt="Ravi Khokle" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 3px solid #3b82f6; margin-bottom: 10px;" />
            <h3 style="margin: 0; color: #1f2937;">Ravi Khokle</h3>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Full Stack Developer</p>
          </div>
          
          <h2 style="color: #3b82f6; margin-top: 20px;">New Contact Form Submission</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
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
      from: process.env.EMAIL_FROM || userEmail,
      to: email,
      subject: 'Thank you for contacting Ravi Khokle',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <!-- Profile Header -->
          <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #3b82f6;">
            <img src="https://ravikhokle.site/Images/me/ravikhokle.png" alt="Ravi Khokle" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 3px solid #3b82f6; margin-bottom: 10px;" />
            <h3 style="margin: 0; color: #1f2937;">Ravi Khokle</h3>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Full Stack Developer & UI/UX Designer</p>
          </div>
          
          <h2 style="color: #3b82f6; margin-top: 20px;">Thank You for Your Message!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for reaching out! I've received your message and will get back to you within 24 hours.</p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your Message Summary:</h3>
            <p><strong>Subject:</strong> ${subject}</p>
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
    const [toSelf, toUser] = await Promise.allSettled([
      transporter.sendMail(mailOptions),
      transporter.sendMail(confirmationMailOptions)
    ]);

    if (toSelf.status === 'rejected') {
      const reason = toSelf.reason instanceof Error ? toSelf.reason.message : String(toSelf.reason);
      return NextResponse.json({ error: `Failed to send mail to owner: ${reason}` }, { status: 500 });
    }
    if (toUser.status === 'rejected') {
      // Still succeed overall, but inform client
      console.warn('Failed to send confirmation email to user:', toUser.reason);
    }

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: `Failed to send email: ${msg}` },
      { status: 500 }
    );
  }
}
