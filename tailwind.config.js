/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig } */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        SFPro: ['SFPro', ...fontFamily.sans],
        Gotham: ['Gotham', ...fontFamily.sans],
        Fira: ['Fira', ...fontFamily.sans],
      },
      colors: {
        main: 'var(--bn-main-kingfisher-daisy)',
      },
      fontWeight: {
        book: 350,
      },
    },
    keyframes: {
      flicker: {
        '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
          opacity: 0.99,
          filter:
            'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
        },
        '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
          opacity: 0.4,
          filter: 'none',
        },
      },
      shimmer: {
        '0%': {
          backgroundPosition: '-700px 0',
        },
        '100%': {
          backgroundPosition: '700px 0',
        },
      },
      growDown: {
        '0%': {
          transform: 'scaleY(0)'
        },
        '80%': {
          transform: 'scaleY(1.1)'
        },
        '100%': {
          transform: 'scaleY(1)'
        }
      },
    },
    animation: {
      flicker: 'flicker 3s linear infinite',
      shimmer: 'shimmer 1.3s linear infinite',
      growDown: 'growDown 3000ms ease-in-out forwards',
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
};
