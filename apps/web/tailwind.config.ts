import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#6366f1",
          foreground: "#ffffff",
        },
      },
      borderRadius: {
        lg: "0.75rem",
      },
    },
  },
  plugins: [],
};

export default config;