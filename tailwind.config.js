/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#615BF1",
        primary: "#4338CA",
        secondary: '#yourSecondaryColorValue',
        accentBg: '#D1FAB3',
        accentText: '#CEF1BA',
        bgPrimary: '#b2b1e636',
        redAccent:"#FD274E",
        blueAccent:"#00A7F5",
        bgGray:'#FFFFFF'
        // Add more custom colors if needed
      },
    },
  },
  plugins: [require('daisyui')],
}