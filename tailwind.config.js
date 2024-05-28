/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        figtree: ["Figtree", "sans-serif"],
        signika: ["Signika", "sans-serif"],
      },
      backgroundImage: {
        header: "url('src/assets/furniture.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
