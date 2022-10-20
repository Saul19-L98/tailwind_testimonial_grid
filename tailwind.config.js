/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html","./src/**/*.js"],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
    },
    fontFamily:{
      sans:['Barlow Semi Condensed','sans-serif'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
