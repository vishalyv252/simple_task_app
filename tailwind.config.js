/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Roboto": ["Roboto", "sans-serif"],
        "Poppins": ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

