/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },

    extend: {
      animation: {
        goyang: "goyang 1s ease-in-out infinite",
      },
      keyframes: {
        goyang: {
          "0%, 100%": { transform: "translateX(35%)" },
          "50%": { transform: "translateX(-35%)" },
        },
      },
      colors: {
        heading: "#88ed00",
        dark: "#334155",
        secondary: "#64748b",
        discord: "#5865F2",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
