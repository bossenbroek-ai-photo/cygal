/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      iphone: { min: '375px', max: '667px' },
      ipad: { min: '820px', max: '1180px' },
      laptop: '1024px',
      large: '1600px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
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
    }
  },
  plugins: []
};
