/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'burgundy-900': '#370617',
      },
      backgroundImage: {
        'bg-hero': "url('./assets/hero_bg.jpeg')",
      }
    },
  },
  plugins: [],
}
