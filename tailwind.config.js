const { reduceEachLeadingCommentRange } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
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
