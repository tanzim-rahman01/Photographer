/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        'Container': '1600px',
      },
      colors: {
        'Color': '#FF0000',
        'blck':"#2F4F4F"
      },
    },
  },
  plugins: [],
}

