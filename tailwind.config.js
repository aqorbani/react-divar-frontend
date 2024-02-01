/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [forms],
};
