# 🌐 Flatt Marketing Website

A modern, mobile-first marketing website for **Flatt** - the property management app that streamlines rentals for tenants and property owners in Dubai.

![Flatt Logo](public/logo-blue.svg)

## 🚀 Features

- **Next.js 14** with App Router and React Server Components
- **TypeScript** for type safety
- **Tailwind CSS** with custom brand design system
- **Framer Motion** for smooth animations and interactions
- **Mobile-first** responsive design
- **SEO optimized** with structured data and meta tags
- **Accessibility compliant** (WCAG AA)
- **Performance optimized** with static export capability

## 🎨 Design System

### Colors
```css
Brand Blue: #006AFF
Brand Sky: #A5D8FF  
Brand Yellow: #FFC700
Brand Gray: #F5F5F5
Brand White: #FFFFFF
```

### Typography
- **Font**: Montserrat (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- Glass morphism effects with backdrop blur
- Gradient text and button animations
- 3D tilt cards with react-tilt
- Scroll-snap sections
- Animated cube background

## 📱 Sections

1. **Hero** - App introduction with download CTAs
2. **Features** - 6-card grid showcasing key features
3. **How It Works** - 4-step timeline process
4. **Reviews** - Carousel of user testimonials
5. **CTA** - Final download push with feature summary
6. **Footer** - Links, contact info, and social media

## 🛠 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Lint code
pnpm lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Project Structure

```
flatt-website/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── faq/               # FAQ page
│   └── legal/             # Legal pages (privacy, terms)
├── components/            # React components
│   ├── Hero.tsx          # Hero section
│   ├── Features.tsx      # Features grid
│   ├── HowItWorks.tsx    # Process timeline
│   ├── Reviews.tsx       # Testimonials carousel
│   ├── CTA.tsx           # Call-to-action
│   ├── Navbar.tsx        # Navigation
│   └── Footer.tsx        # Footer
├── lib/                  # Utilities
│   └── utils.ts          # Helper functions
├── public/               # Static assets
└── tailwind.config.js    # Tailwind configuration
```

## 🎯 Key Features

### Animations
- **Framer Motion** for page transitions and scroll animations
- **react-tilt** for 3D card effects
- Custom CSS animations for floating elements
- Scroll-triggered reveals with `whileInView`

### Performance
- Static export for fast loading
- Optimized images and fonts
- Minimal JavaScript bundle
- Progressive enhancement

### SEO & Analytics
- Structured data (JSON-LD) for FAQ and business info
- Open Graph and Twitter Card meta tags
- Smart banner tags for app store integration
- Google Analytics ready (TODO: Add tracking ID)

### Accessibility
- WCAG AA color contrast compliance
- Keyboard navigation support
- Screen reader optimized
- `prefers-reduced-motion` support

## 🔗 Store Links

- **App Store**: https://apps.apple.com/us/app/flatt-ae/id6742777441
- **Google Play**: https://play.google.com/store/apps/details?id=com.flattllcfz.app

## 🌍 Deployment

The site is configured for static export and can be deployed to any static hosting service:

```bash
pnpm build  # Generates static files in 'out' directory
```

### Recommended Hosting
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

## 🔧 Customization

### Brand Colors
Update colors in `tailwind.config.js`:

```js
colors: {
  brand: {
    blue: '#006AFF',
    sky: '#A5D8FF',
    yellow: '#FFC700',
    // ...
  }
}
```

### Content Updates
- Hero copy: `components/Hero.tsx`
- Features: `components/Features.tsx`
- Reviews: `components/Reviews.tsx`
- FAQ: `app/faq/page.tsx`

### Assets
Replace placeholder assets in `public/`:
- `logo-blue.svg` - Main logo
- `hero.jpg` - Hero section image
- `og-image.jpg` - Social sharing image
- `favicon.ico` - Site favicon

## 📋 TODO

- [ ] Add real app screenshots to hero mockup
- [ ] Implement Google Analytics tracking
- [ ] Add blog/news section
- [ ] Integrate with CMS for content management
- [ ] Add multi-language support (Arabic)
- [ ] Implement contact form with backend
- [ ] Add loading states and error boundaries
- [ ] Optimize for Core Web Vitals
- [ ] Add A/B testing framework
- [ ] Implement user authentication for demo

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Flatt Team**
- Website: [flatt.ae](https://flatt.ae)
- Email: hello@flatt.ae
- Location: Dubai, UAE

---

Built with ❤️ for the Dubai property management community. 