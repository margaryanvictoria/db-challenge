module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        120: '30rem',
        128: '32rem',
        136: '34rem',
        144: '36rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
