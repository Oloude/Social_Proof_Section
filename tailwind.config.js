/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       "League_Spartan": ['"League Spartan"', ...defaultTheme.fontFamily.sans],
      },
      colors : {
        "darkMagenta" : "#502050",
        "softPink" : "#ee68a4",
        "darkGrayMagenta" : "#937b92",
        "lightGrayMagenta" : "#f7f2f7",
      },
      backgroundImage : {
        'bgMobile' : "url('src/assets/bg-pattern-top-mobile.svg'), url('src/assets/bg-pattern-bottom-mobile.svg')",
        'bgDesktop' : "url('src/assets/bg-pattern-top-desktop.svg'), url('src/assets/bg-pattern-bottom-desktop.svg')"
      },
      backgroundPosition : {
        'bgPosition' : "top left, bottom right"
      }
    },
  },
  plugins: [],
}