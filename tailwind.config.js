module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        '30-70': '2fr 8fr'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
