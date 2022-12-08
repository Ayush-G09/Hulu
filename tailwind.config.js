/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  variants: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
    },
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
