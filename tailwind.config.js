/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('./images/trans-bg')", 
      },
      fontFamily: {
        segoe: ['Segoe UI', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

