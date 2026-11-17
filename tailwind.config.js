/** @type {import('tailwindcss').Config} */
// "Case file" system: paper and ink, one signal colour, hairline rules.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F3F2EE',
        sheet: '#FAFAF8',
        ink: {
          DEFAULT: '#0E1013',
          soft: '#2A2E34',
          muted: '#5B6068',
          faint: '#8A8F96',
        },
        rule: '#D6D4CD',
        signal: {
          DEFAULT: '#D63A15', // markers, bars, large type
          text: '#B3300F', // small text on paper (AA)
          bright: '#FF6B45', // on ink backgrounds
        },
      },
      fontFamily: {
        display: ['Archivo', 'Arial Narrow', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: { frame: '84rem' },
      letterSpacing: { label: '0.08em' },
    },
  },
  plugins: [],
}
