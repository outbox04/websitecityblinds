import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        city: {
          50: "#f2fae8",
          100: "#dff4c2",
          600: "#76c817",
          700: "#5fa80f",
          900: "#1c2b12"
        },
        cta: "#f6a400"
      },
      fontFamily: {
        sans: ["var(--font-be-vietnam)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(28, 43, 18, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
