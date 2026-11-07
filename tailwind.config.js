/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: "#0B0F17", card: "#131A26", hover: "#182233", card2: "#0F1622" },
        brd: { DEFAULT: "#1E2B3E", bright: "#2C4160" },
        mint: { DEFAULT: "#00E8A7", soft: "#85d4ae" },
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
