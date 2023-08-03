/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        mbl: { max: "630px" }, // mbl == mobile
        // => @media (max-width: 630px) { ... }
      },
      backgroundImage: {
        bgHeroSection: "url(../../src/assets/bg-hero-section.png)",
        vectorHowWillLearn: "url(../../src/assets/svg/vectorHowWillLearn.svg)",
        vectorOurSolutions: "url(../../src/assets/svg/vectorOurSolutions.svg)",
        vectorIntellionExperience:
          "url(../../src/assets/svg/vectorIntellionExperience.svg)",
        vectorTryForFree: "url(../../src/assets/svg/vectorTryForFree.svg)",
      },
      fontFamily: {
        inter: "Inter, sans-serif",
      },
      colors: {
        product: {
          lightPurple: "#3D3A6C",
          purple: "#381571",
          mediumPurple: "#242145",
          darkPurple: "#1B1834",
          lightPink: "#F05695",
          pink: "#e7005e",
          darkPink: "#76174E",
        },
        pink: {
          100: "#faccdf",
          200: "#f599bf",
          300: "#f1669e",
          400: "#ec337e",
          500: "#e7005e",
          600: "#b9004b",
          700: "#8b0038",
          800: "#5c0026",
          900: "#2e0013",
        },
      },
    },
  },
  plugins: [],
};
