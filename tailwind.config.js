/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      main:'#078169',
      sub:'#6F6C90',
    },      
    fontFamily: {
      prata: ['Prata', 'serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "cupcake"],
  },
}