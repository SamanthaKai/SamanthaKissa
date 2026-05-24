/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f7f8f2',
          100: '#edf0e0',
          200: '#d8dec0',
          300: '#b8c494',
          400: '#93a463',
          500: '#556B2F',
          600: '#4a5e28',
          700: '#3d4e22',
          800: '#323f1d',
          900: '#2b3519',
        },
        sage: {
          400: '#8a9478',
          500: '#6B705C',
          600: '#5a5f4d',
          700: '#4a4f3f',
        },
        cream: '#FAF7F2',
        beige: '#F5E6D3',
        gold: '#C2A878',
        terracotta: '#A2674A',
        charcoal: '#222222',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        shimmer: 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        card: '0 4px 24px rgba(85,107,47,0.08)',
        'card-hover': '0 8px 40px rgba(85,107,47,0.16)',
        glow: '0 0 30px rgba(85,107,47,0.25)',
      },
      backgroundImage: {
        'grid-pattern':
          "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3Cpath d='M0 0h1v40H0zM40 0h1v40h-1zM0 0h40v1H0zM0 40h40v1H0z' fill='%23556B2F' fill-opacity='0.06'/%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
