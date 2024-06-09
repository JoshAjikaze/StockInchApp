/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Yellow: "#FFCA00",
        Gray: "#2E2F34"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}