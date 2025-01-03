const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
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
  plugins: [flowbite.plugin()],
};
