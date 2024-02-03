/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Vazir"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [forms],
};
