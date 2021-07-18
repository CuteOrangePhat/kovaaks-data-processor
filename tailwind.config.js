module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        navigation: '0 0 40px'
      },
      boxShadow: {
        navigation: '8px 4px 8px 0 rgba(0,0,0,0.2)'
      },
      colors: {
        unranked: '#CD7F32',
        silver: '#C0C0C0',
        gold: '#FFD700',
        platinum: '#008B8B',
        diamond: '#B9F2FF',
        max: '#B9F2FF',
        close: 'hsl(359,calc(1*82.6%),59.4%)'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
