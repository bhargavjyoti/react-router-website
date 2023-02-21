/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#56ab2f',
        secondary: '#a8e063',
      }
    },
  },
  plugins: [],
}
