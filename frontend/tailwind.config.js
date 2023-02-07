/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        mobile: { 'max': "600px" },
        // => @media (min-width: 640px) { ... }

        tablet: "600px",
        // => @media (min-width: 600px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },

  plugins: [],
};
