/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#0B0B0B',
        surface: '#111111',
        card: '#151515',
        'card-hover': '#1A1A1A',
        'border-subtle': 'rgba(255, 255, 255, 0.08)',
        'border-medium': 'rgba(255, 255, 255, 0.15)',
        'text-primary': '#F4F4F0',
        'text-secondary': '#8E8E8A',
        'text-muted': '#666663',
        accent: '#D7F000',
        'accent-dim': '#ADC200',
        'accent-glow': 'rgba(215, 240, 0, 0.18)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        widest: '0.18em',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
