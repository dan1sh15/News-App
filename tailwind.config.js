/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueBg: '#1F5EFF',
        darkBg: '#23242A',
        cardBg: '#656A78',
      },
      screens: {
        phone: "350px",
        ipad: "1110px"
      }
    },
  },
  plugins: [],
}

