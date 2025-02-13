/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/@shadcn/ui/dist/**/*.js'
  ],
  theme: {
    extend: {
      textColor:{
        title: '#12362f',
        description: "#667471",
        subDescription: "#2f715e",
        blackText: "#121212",
        yellowText: "#fbd454",
        textWhite: "#f2f2f2",
        lowGray: "#939d9b"
      },
      backgroundColor:{
        yellowBg: "#f8c146",
        greenBg: "#122f2a",
        subGreen: "#2c6b59"
      },
      backgroundImage: {
        bannerLinear: "url('./src/assets/bannerlinear.png')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}