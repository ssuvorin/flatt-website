# 🏠 Flatt - Property Management Website

Modern Next.js 14 website for Flatt property management platform in Dubai. Features mobile-responsive design, WhatsApp support integration, and smooth animations.

## 🚀 Live Demo

- **Production**: [Coming Soon on Vercel]
- **GitHub**: [https://github.com/ssuvorin/flatt-website](https://github.com/ssuvorin/flatt-website)

## ⚡ Features

- 📱 **Mobile-First Responsive Design** - Perfect on all devices
- 🎨 **Modern UI/UX** - Glass morphism effects, smooth animations
- 📞 **WhatsApp Support Integration** - Direct contact via +971 56 311 87 75
- 🏢 **Property Management Focus** - Tailored for Dubai market
- 📄 **Legal Compliance** - Privacy Policy, Terms of Use, GDPR/UAE PDPL compliant
- 🌐 **SEO Optimized** - Meta tags, structured data, sitemap
- ⚡ **Performance Optimized** - Next.js 14, optimized images, lazy loading

## 🛠 Tech Stack

- **Framework**: Next.js 14.2.30 with TypeScript
- **Styling**: TailwindCSS 3.4.0 + Custom CSS
- **Animations**: Framer Motion 11.0.0
- **Icons**: Lucide React 0.294.0
- **Components**: Radix UI components
- **Deployment**: Vercel (recommended)

## 📱 App Store Links

- **iOS**: [App Store](https://apps.apple.com/us/app/flatt-ae/id6742777441)
- **Android**: [Google Play](https://play.google.com/store/apps/details?id=com.flattllcfz.app)

## 🚀 Quick Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ssuvorin/flatt-website)

### Manual Deployment Steps:

1. **Fork this repository**
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your forked repository
   - Vercel will auto-detect Next.js and configure everything

3. **Environment Variables** (if needed):
   ```bash
   # Add these in Vercel dashboard if using analytics/monitoring
   NEXT_PUBLIC_GA_ID=your_google_analytics_id
   NEXT_PUBLIC_HOTJAR_ID=your_hotjar_id
   ```

4. **Deploy**: Click Deploy and your site will be live in minutes!

## 💻 Local Development

### Prerequisites
- Node.js 18.0 or later
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ssuvorin/flatt-website.git
   cd flatt-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open browser**: Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run export   # Export static site (if needed)
```

## 📁 Project Structure

```
flatt-website/
├── app/                 # Next.js 14 App Router
│   ├── faq/            # FAQ page
│   ├── legal/          # Legal pages (Privacy, Terms, etc.)
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/         # Reusable components
│   ├── Hero.tsx        # Hero section with iPhone mockup
│   ├── Features.tsx    # Features showcase
│   ├── HowItWorks.tsx  # Process explanation
│   ├── AppShowcase.tsx # App analytics mockup
│   ├── CTA.tsx         # Call-to-action with floating elements
│   ├── Footer.tsx      # Footer with WhatsApp links
│   └── Navbar.tsx      # Navigation header
├── public/             # Static assets
│   ├── flatt-full-fogo.png  # Logo
│   ├── favicon.svg     # Favicon
│   └── ...            # Other images
├── lib/               # Utility functions
└── vercel.json        # Vercel deployment config
```

## 🎨 Design System

### Brand Colors
- **Primary Blue**: #006AFF
- **Sky Blue**: #A5D8FF  
- **Accent Yellow**: #FFC700
- **Neutral Gray**: #F5F5F5

### Typography
- **Font**: Montserrat (Google Fonts)
- **Sizes**: Responsive scale from mobile to desktop

### Components
- Glass morphism effects with backdrop-blur
- Smooth hover transitions
- Mobile-first responsive breakpoints
- Floating animation elements

## 📞 Support & Contact

- **WhatsApp**: [+971 56 311 87 75](https://wa.me/971563118775)
- **Email**: team@flatt.ae
- **Website**: [flatt.ae](https://flatt.ae)

## 📄 Pages Overview

- **Homepage** (`/`) - Hero, features, how it works, app showcase, CTA
- **FAQ** (`/faq`) - Frequently asked questions with expandable sections
- **Privacy Policy** (`/legal/privacy`) - GDPR/UAE PDPL compliant privacy policy
- **Terms of Use** (`/legal/terms`) - Legal terms and conditions
- **Delete Account** (`/legal/delete-account`) - Account deletion instructions

## 🔧 Configuration

### Tailwind CSS
Custom configuration in `tailwind.config.js` with:
- Brand colors
- Custom shadows and effects
- Glass morphism utilities
- Responsive breakpoints

### Next.js
Optimized configuration in `next.config.js`:
- Image optimization
- Domain whitelisting for external images
- Performance optimizations

## 📈 Performance

- **Core Web Vitals**: Optimized for all metrics
- **Image Optimization**: Next.js automatic optimization
- **Code Splitting**: Automatic with Next.js 14
- **Lazy Loading**: Components and images

## 🔒 Security

- Security headers in `vercel.json`
- XSS protection
- Content Security Policy ready
- No sensitive data exposure

## 📝 License

This project is private and proprietary to Flatt Technologies.

## 🤝 Contributing

This is a private project. For any changes or suggestions, please contact the development team.

---

**Built with ❤️ for Flatt Property Management** 