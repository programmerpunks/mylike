/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "grid-img": "url('./assets/hero/images/bg-image.png')",
        "step1-img": "url('./assets/playingsteps/images/step1bg.png')",
        "stepx-img": "url('./assets/playingsteps/images/stepxbg.png')",
        "marketplace-img": "url('./assets/marketplace/images/marketplacebg.jpeg')",
      },
    },
  },
  plugins: [],
}