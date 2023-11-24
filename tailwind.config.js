/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#615BF1",
        secondary: '#yourSecondaryColorValue',
        accent: '#yourAccentColorValue',
        // Add more custom colors if needed
      },
    },
  },
  plugins: [require('daisyui')],
}