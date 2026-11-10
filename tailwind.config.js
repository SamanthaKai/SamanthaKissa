/** @type {import('tailwindcss').Config} */
// Palette taken from the hero photo: warm linen walls, a black blazer,
// amber lamp light (brass) and the office plants (leaf).
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brass: {
          50: '#FBF5EC',
          100: '#F4E6CF',
          200: '#E8CB9E',
          300: '#D9AA6B',
          400: '#C98F48',
          500: '#B07535',
          600: '#8A5A26',
          700: '#6F471F',
          800: '#52351A',
          900: '#3A2614',
        },
        leaf: {
          300: '#A9BE8C',
          500: '#5E7A45',
          700: '#33452A',
          900: '#1C2618',
        },
        paper: '#F6F1EA',
        night: '#13110F',
        cream: '#EFE8DE',
        charcoal: '#1B1714',
        espresso: '#221D19',
      },
      fontFamily: {
        heading: ['Newsreader', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
