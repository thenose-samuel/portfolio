/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        fontFamily: {
        'mont' : ['Montserrat', 'sans-serif']
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
