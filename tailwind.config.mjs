/** tailwind.config.mjs */
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#e9fbf5",
          100: "#d3f6ea",
          200: "#a8ecd5",
          300: "#7de3c0",
          400: "#41d4a4",
          500: "#10b981",
          600: "#0d9468",
          700: "#0b7654",
          800: "#075941",
          900: "#053f2f"
        },
        ink: {
          900: "#0f172a",
          700: "#334155",
          500: "#64748b"
        },
        panel: "#f8fafc"
      },
      borderRadius: {
        xl2: "1.25rem"
      },
      boxShadow: {
        soft: "0 8px 30px rgba(2, 6, 23, 0.06)"
      },
      maxWidth: {
        wrap: "1120px"
      }
    }
  },
  plugins: []
}
