/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        app_bg: "#202024",
        app_text: "#c4c4cc",
        app_green_300: "#00837e",
        app_green_500: "#00875f",
      },
    },
  },
  plugins: [],
};
