/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    "src/**/*.tsx",
    "src/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          700: '#FAD201',
          800: '#F4CB01'
        },
        textGray: '#A1A1A1',
        description: '#00000080'
      },
      screens: {
        ux: '380px'
      },
      height: {
        download: 'calc(20rem + 100%)'
      }
    },
  },
  plugins: [],
}

