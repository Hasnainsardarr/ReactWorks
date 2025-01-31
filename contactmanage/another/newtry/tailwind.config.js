/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all your React files
  ],
  theme: {
    extend: {
      colors: {
        gray: "#5A5959",
        yellow: "#FFEAAE",
        "dark-yellow": "#FCCA3F",
        orange: "#F6820C",
      },
    },
  },
  plugins: [],
};


 