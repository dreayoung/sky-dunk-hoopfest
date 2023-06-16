/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bigy: '#fef1c7',
      },
      fontFamily: {
        right: 'Righteous',
        cooke: 'Cookie'
      },
    },
  },
  plugins: [require('daisyui')],
};
