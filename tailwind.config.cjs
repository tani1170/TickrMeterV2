/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      green: "#0EB663",
      beige: "#ECE8E4",
      graylight: "#DCE2E4",
      graydark: "#2B2E37",
      bluedark: "#414559",
      red: "#D84E4E",
    },

    screens: {
      sm: "390px",
      // => @media (min-width: 640px) { ... }

      hmd: "810px",
      // => @media (min-width: 810px) { ... }

      md: "1024px",
      // => @media (min-width: 1024px) { ... }

      lg: "1440px",
    },

    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
