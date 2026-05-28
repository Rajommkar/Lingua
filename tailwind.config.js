/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./theme/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#6C4EF5",
          deepPurple: "#5B3BF6",
          blue: "#4DB8FF",
          green: "#21C16B",
        },
        semantic: {
          success: "#21C16B",
          warning: "#FFC800",
          streak: "#FF8A00",
          error: "#FF4D4F",
          info: "#4DB8FF",
        },
        text: {
          primary: "#0D132B",
          secondary: "#6B7280",
        },
        border: "#E5E7EB",
        surface: "#F6F7FB",
        background: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Poppins-Regular", "system-ui", "sans-serif"],
      },
      fontSize: {
        h1: ["32px", { lineHeight: "38px", letterSpacing: "-0.02em" }],
        h2: ["24px", { lineHeight: "31px", letterSpacing: "-0.02em" }],
        h3: ["20px", { lineHeight: "26px", letterSpacing: "-0.01em" }],
        h4: ["16px", { lineHeight: "24px", letterSpacing: "-0.01em" }],
        "body-lg": ["16px", { lineHeight: "26px" }],
        "body-md": ["14px", { lineHeight: "22px" }],
        "body-sm": ["13px", { lineHeight: "21px" }],
        caption: ["11px", { lineHeight: "16px" }],
      },
      boxShadow: {
        soft: "0px 16px 40px rgba(13, 19, 43, 0.08)",
        card: "0px 8px 24px rgba(13, 19, 43, 0.08)",
      },
      borderRadius: {
        xl: "20px",
        "2xl": "28px",
      },
    },
  },
  plugins: [],
};
