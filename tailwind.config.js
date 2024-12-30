/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/src/images/mountain.png')",
      },
      fontFamily: {
        sora: ["Sora", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
