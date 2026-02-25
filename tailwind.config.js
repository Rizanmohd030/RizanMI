/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        hero: ['"Bebas Neue"', 'sans-serif'],
      },
      colors: {
        surface: '#F3F4F6',
        accent: '#FF4500',
        navbg: '#3f436d',
      },
    },
  },
  plugins: [],
}
