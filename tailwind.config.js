/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        uRed: "#c33333", 
        footerBg: "#3d4657", 
        accent: "#6e7788", 
        white: "#ffffff", 
        background: "var(--background)", 
        foreground: "var(--foreground)",
        grelish: "#9AA4B4",
        greyCon: "#3E4757"
      },
      fontFamily: {
        chunk: ["ChunkFive", 'serif'], 
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
