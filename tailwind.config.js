/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      colors: {
        'Red': '#F40404',
        'Gray': '#282828',
        'White': '#FFFFFF',
        'Black': '#000000',
      },
      fontFamily: {
        'pops': ['Poppins', 'sans-serif'],
      },
        maxWidth: {
          'container': '1144px',
        },
    },
  },
  plugins: [],
}
