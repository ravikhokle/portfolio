# Email Setup Guide for Contact Form

## Quick Setup Options

### Option 1: Gmail (Recommended)
1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Generate an App Password:
   - Go to Security → 2-Step Verification → App passwords
   - Select "Mail" and your device
   - Copy the generated password

4. Update `.env.local`:
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password-here
```

### Option 2: Outlook/Hotmail
1. Update `.env.local`:
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

### Option 3: Using SendGrid (Professional)
1. Sign up at sendgrid.com
2. Get your API key
3. Install SendGrid: `npm install @sendgrid/mail`
4. Use SendGrid instead of Nodemailer (more reliable for production)

## Testing the Contact Form

1. Update your email credentials in `.env.local`
2. Restart the development server: `npm run dev`
3. Fill out the contact form on your website
4. Check your email for both:
   - The message you received
   - The confirmation email sent to the user

## Security Notes

- Never commit `.env.local` to Git (it's already in .gitignore)
- Use App Passwords instead of your main password
- For production, consider using professional email services like SendGrid, Mailgun, or AWS SES

## Troubleshooting

**Error: "Invalid login"**
- Make sure you're using an App Password (not your regular password)
- Check that 2FA is enabled on your Google account

**Error: "Connection timeout"**
- Check your EMAIL_HOST and EMAIL_PORT settings
- Try using port 465 with secure: true for Gmail

**Emails not arriving**
- Check spam folder
- Verify EMAIL_USER is correct
- Test with a simple email client first
