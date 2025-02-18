/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': "#5f6FFF"
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill, minmax(200px, 1fr))'
      },
      screens: {
        'md': '1080px', // Điều chỉnh điểm dừng md thành 1080px
      },
      fontFamily: {
        sans: ['Onest', 'sans-serif'],
      },
    },
  },
  plugins: [],
}