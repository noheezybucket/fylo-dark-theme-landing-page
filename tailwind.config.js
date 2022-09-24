/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        intromail: "hsl(217, 28%, 15%)",
        main: "hsl(218, 28%, 13%)",
        footer: "hsl(216, 53%, 9%)",
        testimonials: "hsl(219, 30%, 18%)",
        callto1: "hsl(176, 68%, 64%)",
        callto2: "hsl(198, 60%, 50%)",
        error: "hsl(0, 100%, 63%)",
      },
      fontFamily: {
        headings: ["Raleway"],
        body: ["Open Sans"],
      },
      backgroundImage: {
        curvyDesktop: "url(/src/assets/bg-curvy-desktop.svg)",
      },
    },
  },
  plugins: [],
};
