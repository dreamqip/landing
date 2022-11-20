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
        main: "radial-gradient(87.06% 100% at 50% 100%, #466C96 0%, #031732 100%);",
        button:
          "radial-gradient(91.27% 423.98% at 19.31% 26.59%, #199DE7 0%, #1957CF 100%)",
        hero: "linear-gradient(111.48deg, #3E75A8 -8.09%, #031732 124.12%)",
        media: "radial-gradient(88.24% 100% at 55.07% 0%, #18385B 0%, #071D39 97.88%)",
        team: "radial-gradient(88.24% 100% at 55.07% 0%, #264F78 0%, #0E2848 100%)",
        footer: "radial-gradient(87.91% 99.63% at 55.07% 0.37%, #0D2746 0%, #031732 62.28%, #031732 100%)"
      },
      borderColor: {
        primary: "#196DD6",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
