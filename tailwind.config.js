module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        flex: {
          navigation: '0 0 40px'
        },
        boxShadow: {
            navigation: '8px 4px 8px 0 rgba(0,0,0,0.2)'
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
