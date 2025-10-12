// Quick test to send a sample email with profile picture
// Run with: node test-profile-email.mjs

import nodemailer from 'nodemailer';

async function sendTestEmail() {
  console.log('Sending test email with profile picture...\n');

  const EMAIL_USER = 'ravikhokle1@gmail.com';
  const EMAIL_PASS = 'gouiaozvsmbvcafu';

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    console.log('Sending confirmation email with profile picture...');
    await transporter.sendMail({
      from: 'contact@ravikhokle.site',
      to: EMAIL_USER,
      subject: 'Test: New Email Template with Profile Picture',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <!-- Profile Header -->
          <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #3b82f6;">
            <img src="https://ravikhokle.site/Images/me/ravikhokle.png" alt="Ravi Khokle" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 3px solid #3b82f6; margin-bottom: 10px;" />
            <h3 style="margin: 0; color: #1f2937;">Ravi Khokle</h3>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Full Stack Developer & UI/UX Designer</p>
          </div>
          
          <h2 style="color: #3b82f6; margin-top: 20px;">Thank You for Your Message!</h2>
          <p>Hi Test User,</p>
          <p>Thank you for reaching out! I've received your message and will get back to you within 24 hours.</p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your Message Summary:</h3>
            <p><strong>Subject:</strong> Testing New Email Template</p>
            <p><strong>Message:</strong> This is a test of the new email template with profile picture at the top!</p>
          </div>
          
          <p>In the meantime, feel free to check out my latest work on <a href="https://github.com/ravikhokle" style="color: #3b82f6;">GitHub</a> or connect with me on <a href="https://linkedin.com/in/ravikhokle" style="color: #3b82f6;">LinkedIn</a>.</p>
          
          <p>Best regards,<br>
          <strong>Ravi Khokle</strong><br>
          Full Stack Developer & UI/UX Designer</p>
        </div>
      `,
    });

    console.log('✅ Test email sent successfully!');
    console.log('📧 Check your inbox:', EMAIL_USER);
    console.log('\n✨ Your email now includes:');
    console.log('   • Profile picture at the top');
    console.log('   • Your name and title');
    console.log('   • Professional branding');
    console.log('   • Clean, modern design');
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

sendTestEmail();
