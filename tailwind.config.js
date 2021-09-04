module.exports = {
  theme: {
    extend: {
      colors: {
        purple: {
          100: '#f0eff2',
          200: '#d3d0d8',
          300: '#a7a2b2',
          400: '#7b748b',
          500: '#5e5672',
          600: '#453f53',
          700: '#342f3f',
          800: '#23202a',
          900: '#121015'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}
