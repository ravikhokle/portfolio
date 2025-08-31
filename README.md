# Ravi Khokle - Portfolio Website

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Features smooth animations, dark mode support, and a professional design that converts visitors into clients.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Mobile-First**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Contact Form**: Working contact form with email integration
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Fast Loading**: Optimized images and code splitting

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes for dark mode
- **TypeScript**: Full type safety
- **Deployment**: Vercel ready

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/ravikhokle/portfolio.git

3. Run the development server:
```bash
### Personal Information
Update your personal details in the following components:
- `src/components/Hero.tsx` - Main hero section
- `src/components/About.tsx` - About me section
- `src/components/Contact.tsx` - Contact information
- `src/app/layout.tsx` - Meta tags and SEO

### Projects
Edit your projects in `src/components/Projects.tsx`

### Services
Modify your services in `src/components/Services.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically


### Environment variables

Copy the example file and fill your secrets:

1. Duplicate `.env.example` as `.env.local` in the project root.
2. Provide your PhonePe credentials (Standard Checkout OAuth):
	- `PHONEPE_CLIENT_ID`
	- `PHONEPE_CLIENT_SECRET`
	- `PHONEPE_CLIENT_VERSION` (optional, default `1`)
	- `PHONEPE_CHECKOUT_BASE_URL` (sandbox default included in example)
	- `PHONEPE_AUTH_BASE_URL` (optional; sandbox default included)
3. Restart the dev server to apply changes.
## 📱 Built By

Built with ❤️ by [Ravi Khokle](https://github.com/ravikhokle)

---

**Your portfolio is now ready!** 🎉

Visit: http://localhost:3001 to see your live portfolio website.
