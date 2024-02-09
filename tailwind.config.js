/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        patrick: ["Patrick Hand", "sans-serif"],
        quick: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
