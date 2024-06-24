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
    },
  },
  plugins: [
    'postcss-import': {}
  ],
}

