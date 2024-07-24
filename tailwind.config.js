/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        normal: 300,
        medium: 400,
        semibold: 500,
        bold: 600,
      },
      fontSize: {
        'h1': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3': ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        'h4': ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        'h5': ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        'h6': ['0.875rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        'xs': '0.75rem', // 12px
        'sm': '0.875rem', // 14px
        'base': '1rem', // 16px
        'lg': '1.125rem', // 18px
        'xl': '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': '3.75rem', // 60px
        '7xl': '4.5rem', // 72px
        '8xl': '6rem', // 96px
        '9xl': '8rem', // 128px
      }
    },
  },
  plugins: [
    
  ],
}

