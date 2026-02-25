/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'system-ui', 'sans-serif'],
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
