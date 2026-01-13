export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        font: ["var(--font)"],
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        textPrimary: "var(--text-color)",
      },
    },
  },
  plugins: [],
};
