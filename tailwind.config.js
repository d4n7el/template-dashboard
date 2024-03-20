const { nextui } = require('@nextui-org/react');
const { addDynamicIconSelectors } = require('@iconify/tailwind');
import animations from '@midudev/tailwind-animations';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'cl-primary': 'rgb(65,0,255)',
      'cl-black': 'rgb(0,0,0)',
      'cl-gray-light': '#DDDDE0',
      'cl-white': 'rgb(255,255,255)',
    },
  },
  plugins: [nextui(), addDynamicIconSelectors(), animations],
};
