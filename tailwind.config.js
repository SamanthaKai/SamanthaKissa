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
        paper: '#FAF9F6',
        night: '#141513',
        cream: '#EDEBE6',
        charcoal: '#1F201D',
      },
      fontFamily: {
        heading: ['Newsreader', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
