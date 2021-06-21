module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        flex: {
          navigation: '0 0 40px'
        },
        boxShadow: {
            navigation: '8px 4px 8px 0 rgba(0,0,0,0.2)'
        },
        backgroundColor: theme => ({
            ...theme('colors'),
            unranked : '#CD7F32',
            silver : '#C0C0C0',
            gold: '#FFD700',
            platinum: '#008B8B',
            diamond: '#B9F2FF',
            max: '#B9F2FF'
        })
    },
    variants: {
        extend: {},
    },
    plugins: [],
}