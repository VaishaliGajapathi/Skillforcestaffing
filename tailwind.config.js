/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef2f9",
          100: "#d7e0f0",
          200: "#b0c1e1",
          300: "#7f98cb",
          400: "#4f6db1",
          500: "#2f4d94",
          600: "#1f3a75",
          700: "#1a2f5e",
          800: "#16264b",
          900: "#122040",
          950: "#0b1428",
        },
        brand: {
          DEFAULT: "#F26522",
          50: "#fff4ed",
          100: "#ffe5d4",
          200: "#ffc7a8",
          300: "#ffa070",
          400: "#fd7c3e",
          500: "#F26522",
          600: "#dc4c0d",
          700: "#b6390d",
          800: "#912f13",
          900: "#752913",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        display: ["Sora", "Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
