const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    screens: {
      'mobile': '375px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      fontFamily: {
        'sans': ['"Poppins"'],
        'poppins': ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        'primary': '0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)',
        'secondary': 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        vue: {
          100: '#42b883',
          200: '#3ba676',
          300: '#359369',
          400: '#2e815c',
          500: '#286e4f',
        },
        angular: {
          100: '#feb4c4',
          200: '#fd829d',
          300: '#fc5075',
          400: '#e10434',
          500: '#af0329',
        },
        react: {
          100: '#b9e9f8',
          200: '#8adbf4',
          300: '#5cccf0',
          400: '#14a4d2',
          500: '#0f80a3',
        },
        next: {
          100: '#b3c6ff',
          200: '#4d7aff',
          300: '#1a54ff',
          400: '#002180',
          500: '#000c2f',
        },
        white: '#dad8d2',
        'primary': {
          100: '#42b883',
          200: '#3ba676',
          300: '#359369',
          400: '#2e815c',
          500: '#286e4f',
        },
        'accent': {
          100: '#f07178',
          200: '#d8666c',
          300: '#c05a60',
          400: '#c05a60',
          500: '#a84f54',
        },
        'dark': {
          100: '#bababa',
          200: '#8d8d8d',
          300: '#484848',
          400: '#313131',
          500: '#1a1a1a',
        },
      }
    },
  },
  plugins: [],
};
