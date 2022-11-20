/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: "radial-gradient(87.12% 98.73% at 55.07% 1.27%, #3E75A8 0%, #031732 99.96%)",
        button:
          "radial-gradient(91.27% 423.98% at 19.31% 26.59%, #199DE7 0%, #1957CF 100%)",
        hero: "linear-gradient(111.48deg, #3E75A8 -8.09%, #031732 124.12%)",
        media: "radial-gradient(303.79% 344.29% at 55.07% -222.73%, #3E75A8 0%, #031732 99.96%)"
      },
      borderColor: {
        primary: "#196DD6",
      },
      backgroundColor: {
        footer: "#031731",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
