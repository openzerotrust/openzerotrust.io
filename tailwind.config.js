module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        primary: '#30BA78',
        'primary-light': '#90EBCD',
        'primary-dark': '#0C322C',
        'secondary-dark': '#0C0D0D',
        'secondary-light': '#30BA78',
        'secondary-lighter': '#AFEACD',
        'suse-blue': '#2251F5',
        'suse-gray': '#f7f7f7',
        'suse-pine_green': '#0C322C',
        'suse-jungle_green': '#30BA78',
        'suse-midnight_blue': '#192072',
        'suse-waterhole_blue': '#2453FF',
        'suse-mint': '#90EBCD',
        'suse-persimmon': '#FE7C3F',
        'suse-fog': '#EFEFEF',
        'black': '#000000',
        'white': '#ffffff',
      },
    },
    fontFamily: {
      body: ['"Poppins"', 'Arial', 'Helvetica'],
      display: ['"Poppins"', 'Arial', 'Helvetica'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  options: {
    // not working?
    safelist: ['bg-purple-500', 'bg-yellow-500', `bg-gray-500`],
  },
}
