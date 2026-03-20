/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fffaf2',
          100: '#fff2dd',
          200: '#f8deb2',
          300: '#efc57f',
          400: '#dfaa53',
          500: '#c98f33',
          600: '#a87022',
          700: '#7c511b',
          800: '#523618',
          900: '#2e1e0f',
        },
        sunset: {
          100: '#fff0ea',
          200: '#ffd8bf',
          300: '#ffb595',
          400: '#fb8c70',
          500: '#f46c5b',
          600: '#d64f4f',
        },
      },
      boxShadow: {
        glow: '0 18px 45px rgba(111, 72, 25, 0.14)',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
