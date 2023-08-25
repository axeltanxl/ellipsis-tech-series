/** @type {import('tailwindcss').Config} */
import { generateColors } from "./src/initialSettings";
const colors = generateColors();

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        tertiary: colors.tertiary,
        text: colors.text,
        bg: colors.bg,
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "light_orange": "#FFE3C5",
        "light_purple": "#D9D9FF",
        "light_green": "#C8F1E0",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "320px",
      },
    },
  },
  corePlugins: {
    // Remove the Tailwind CSS preflight styles so it can use Material UI's preflight instead (CssBaseline).
    preflight: false,
  },
  plugins: [],
};
