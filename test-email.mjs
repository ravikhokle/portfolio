// Test script to verify email configuration
// Run with: node test-email.mjs

import nodemailer from 'nodemailer';

async function testEmail() {
  console.log('Testing email configuration...\n');

  // Check environment variables
  const EMAIL_USER = 'ravikhokle1@gmail.com';
  const EMAIL_PASS = 'gouiaozvsmbvcafu';
  const EMAIL_HOST = 'smtp.gmail.com';
  const EMAIL_PORT = 465; // Try SSL port instead of 587

  console.log('Configuration:');
  console.log('- Host:', EMAIL_HOST);
  console.log('- Port:', EMAIL_PORT);
  console.log('- User:', EMAIL_USER);
  console.log('- Pass:', EMAIL_PASS ? '***configured***' : '❌ NOT SET');
  console.log('');

  if (!EMAIL_USER || !EMAIL_PASS) {
    console.error('❌ Email credentials not configured in .env.local');
    process.exit(1);
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      secure: true, // SSL for port 465
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    console.log('Testing SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection successful!\n');

    console.log('Sending test email...');
    const info = await transporter.sendMail({
      from: EMAIL_USER,
      to: EMAIL_USER, // Send to yourself
      subject: 'Contact Form Test - Portfolio',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">✅ Email Configuration Test</h2>
          <p>Your contact form email configuration is working correctly!</p>
          <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 14px;">
            This is a test email from your portfolio contact form setup.
          </p>
        </div>
      `,
    });

    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('\n📧 Check your inbox:', EMAIL_USER);
    console.log('\n✨ Your contact form should now work correctly!');
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.error('\nCommon fixes:');
    console.error('1. Verify your Gmail App Password is correct (16 chars, no spaces)');
    console.error('2. Ensure 2-Factor Authentication is enabled on your Google account');
    console.error('3. Generate a new App Password at: https://myaccount.google.com/apppasswords');
    console.error('4. Make sure "Less secure app access" is NOT needed (App Passwords are secure)');
    process.exit(1);
  }
}

testEmail();
