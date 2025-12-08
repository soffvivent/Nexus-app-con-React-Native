/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#7C3AED',
        accent: '#F59E0B',
      },
      fontFamily: {
        'poppins': ['Poppins_400Regular'],
        'poppins-bold': ['Poppins_700Bold'],
        'montserrat': ['Montserrat_400Regular'],
        'montserrat-bold': ['Montserrat_700Bold'],
      },
    },
  },
  plugins: [],
};

