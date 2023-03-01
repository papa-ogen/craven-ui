/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "logo-dark":
          "url('../public/assets/Cstudio_logo_BW_positive_CMYK_web-01.svg')",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        orange: "#FE5000",
        "dark-gray": "#25282A",
      },
      social: {
        "facebook-blue": "#3b5998",
        "twitter-blue": "#0084b4",
        "google-red": "#db4a39",
        "github-blue": "#4078c0",
      },
    },
  },
  fontFamily: {
    uniwars: ["uniwars", "sans-serif"],
    zonapro: ["Zona\\ Pro"],
  },
  keyframes: {
    slideUpAndFade: {
      "0%": { opacity: 0, transform: "translateY(2px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
    slideRightAndFade: {
      "0%": { opacity: 0, transform: "translateX(-2px)" },
      "100%": { opacity: 1, transform: "translateX(0)" },
    },
    slideDownAndFade: {
      "0%": { opacity: 0, transform: "translateY(-2px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
    slideLeftAndFade: {
      "0%": { opacity: 0, transform: "translateX(2px)" },
      "100%": { opacity: 1, transform: "translateX(0)" },
    },
  },
  animation: {
    slideUpAndFade: "slideUpAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
    slideDownAndFade: "slideDownAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
    slideRightAndFade: "slideRightAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
    slideLeftAndFade: "slideLeftAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
  },
  plugins: [require("@tailwindcss/forms"), require("windy-radix-palette")],
};
