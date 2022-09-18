/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        bgGalaxy: "url('./src/assets/background-galaxy.png')",
      },
    },
  },
  plugins: [],
};
