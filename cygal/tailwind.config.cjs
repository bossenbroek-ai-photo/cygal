const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      iphone: { min: '375px', max: '667px' },
      ipad: { min: '820px', max: '1180px' },
      laptop: '1024px',
      large: '1400px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      blue: {
        DEFAULT: '#3e3b6a'
      },
      fuschsia: {
        DEFAULT: '#63455d'
      },
      gray: {
        DEFAULT: '#18152a'
      },
      yellow: {
        DEFAULT: '#ffa502'
      },
      orange: {
        DEFAULT: '#ff892a'
      }
    },
    fontFamily: {
      macho: ['macho', 'sans-serif'],
      sans: ['ratio', 'sans-serif']
    },
    extend: {
      backgroundImage: (theme) => ({
        pyrenees:
          "url('https://images.squarespace-cdn.com/content/v1/60c7a48c6d0b97331ff59d21/1630405323998-C87UE2IORNBKOQ4E82D0/pyrenees-gavarnie_cirque.jpg?format=2500w')"
      })
    }
  },
  plugins: []
};
