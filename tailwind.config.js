/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      colors: {
        'c_dark': '#111827',
        'c_dark-middle': '#1B2F46',
        'c_dark-light': '#2F4056',
        'c_gray': '#9DA5AF',
        'c_green-dark': '#819400',
        'c_green-middle': '#97AB0D',
        'c_green': '#A5BB0C',
        'c_green-light': '#B1C909',
        'c_white': '#FFFFFF',
        'c_red': '#FF7461'
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'],
      },
    },
    screens: {
      xl: { max: "1920px" },
      lg: { max: "1366px" },
      md: { max: "960px" },
      sm: { max: "530px" },
    },
  },
  plugins: [],
}

