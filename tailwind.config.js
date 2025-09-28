/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f9f7f4',
        secondary: '#e6ddd5',
        'accent-1': '#c97b63',
        'accent-2': '#8b9b8a',
        text: '#2d2d2d',
      },
    },
  },
  plugins: [],
}