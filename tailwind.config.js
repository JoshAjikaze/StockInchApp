/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Yellow: "#FFCA00",
        Gray: "#373737",
        LightGray: "#B8B8B8"
      },
    },
    backgroundImage: {
      'splash-screen': "url('./src/assets/images/focused-young-man-paying-bill-store.png')",
      'user-screen': "url('./src/assets/images/woman-shopping-vegetables-supermarket.png')",
    },
  },
  plugins: [require('daisyui'),],
}