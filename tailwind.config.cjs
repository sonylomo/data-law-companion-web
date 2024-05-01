/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-orange": "#D4802E",
        "pale-orange":"#FFFAED",
        "neutral-red": "#990000",
        "dark-grey":"#3E3E4C",
        "light-grey": "#696A78",
        "neutral-grey": "#F7F7F8"
      },
    },
  },
  plugins: [],
};
