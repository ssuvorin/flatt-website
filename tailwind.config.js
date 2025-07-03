/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      colors: {
        brand: {
          white: '#FFFFFF',
          gray: '#F5F5F5',
          yellow: '#FFC700',
          sky: '#A5D8FF',
          blue: '#006AFF',
        },
        accent: '#FFC700',
      },
      boxShadow: {
        'brand': '0 6px 20px rgba(0,106,255,0.12)',
        'brand-lg': '0 10px 30px rgba(0,106,255,0.2)',
      },
      animation: {
        'cube-float': 'cubeFloat 18s ease-in-out infinite',
        'gradient-pulse': 'gradientPulse 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        cubeFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)', opacity: '0.3' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)', opacity: '0.6' },
        },
        gradientPulse: {
          '0%, 100%': { backgroundSize: '100% 100%' },
          '50%': { backgroundSize: '120% 120%' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(165, 216, 255, 0.3) 0%, transparent 50%)',
        'hero-gradient': 'radial-gradient(ellipse at center, rgba(0, 106, 255, 0.1) 0%, rgba(165, 216, 255, 0.05) 50%, transparent 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 