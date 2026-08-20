import type { Config } from "tailwindcss";

/**
 * Shared Tailwind preset used by both the web app and the landing page.
 * Apps can extend this with their own theme overrides.
 */
export const bbrainsTailwindPreset: Partial<Config> = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
      },
    },
  },
};