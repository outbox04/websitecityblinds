import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        city: {
          50: "#eaf7f8",
          100: "#cfecef",
          600: "#008c99",
          700: "#00727d",
          900: "#06444b"
        },
        cta: "#f47c20"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(6, 68, 75, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
