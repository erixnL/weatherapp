const { reduceEachLeadingCommentRange } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        summerBlue: '#004e98',
        skyBlue: '#3a6ea5',
        deepGrey: '#c0c0c0',
        lightGrey: '#ebebeb',
        brightOrange:'#ff6700',
        errorRed: '#d62828',
      }
    },
  },
  plugins: [],
}
