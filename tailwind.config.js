/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      main: "#6e1414",
      white: "#f0f0f0",
      secondary: "#991C1C",
      title: "#FFA500",
      blueHover: "#0054D4"
    },
    extend: {},
  },
  plugins: [],
}

