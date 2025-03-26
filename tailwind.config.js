/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A2463", // Deep blue
        secondary: "#3E92CC", // Light blue
        accent: "#D8315B", // Vibrant red/pink for accents
        neutral: "#1E1B18", // Almost black for text
        "neutral-light": "#FFFAFF", // Off-white
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
}; 