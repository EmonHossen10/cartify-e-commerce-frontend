/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // all React files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5", // custom color example
        secondary: "#ec4899",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // optional, if you want animations
  ],
};
