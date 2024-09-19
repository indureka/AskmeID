/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('./images/about.jpg')", 
      },
      fontFamily: {
        segoe: ['Segoe UI', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

