# Alternative Email Solution: Resend.com

## Why Resend?
- ✅ Free tier: 3,000 emails/month
- ✅ No App Password needed
- ✅ Simple API key setup
- ✅ Works with custom domains
- ✅ Better deliverability

## Quick Setup (5 minutes)

### Step 1: Sign up
1. Go to https://resend.com
2. Sign up with GitHub or email
3. Verify your email

### Step 2: Get API Key
1. Go to API Keys section
2. Click "Create API Key"
3. Copy the key (starts with `re_`)

### Step 3: Update .env.local
```env
# Replace Gmail config with:
RESEND_API_KEY=re_your_api_key_here
EMAIL_FROM=onboarding@resend.dev  # or your custom domain
```

### Step 4: Install Resend
```bash
npm install resend
```

### Step 5: Update API Route
I'll help you modify `src/app/api/contact/route.ts` to use Resend instead of Nodemailer.

## Benefits Over Gmail
- No 2FA or App Password headaches
- Better for production
- Proper email logs and analytics
- Custom domain support (contact@ravikhokle.site)
- Webhook support for tracking

---

**Want me to set this up for you? Just say "use resend" and I'll make all the changes!**
