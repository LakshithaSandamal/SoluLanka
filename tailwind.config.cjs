/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#0D1033",
        secondary:"#00FFFF",
        darkPrimary:"#010329",
        serviceBtn:"#000441"
      },
      backgroundImage: {
        'logo': "url('/src/assets/logo.svg')"
      }

    },
    screens:{
      xs:"200px",
      ss:"520px",
      sm:"768px",
      md:"1060px",
      lg:"1200px",
      xl:"1700px"
    }
  },
  plugins: [],
}
