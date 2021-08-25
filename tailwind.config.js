module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'lexio': ["LEIXO DEMO"],
        'proza': ["Proza Libre"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
