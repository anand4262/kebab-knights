import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
         primary: '#D9A300',
        grey: "#363636",
         black: '#000000',
        offwhite: '#FAF9F6',
        charcoal: '#1C1C1C',
        accent: '#E0E0E0',
      },
      spacing: {
        "60%": "60%",
        "70%": "70%",
      },
      letterSpacing: {
        widest: '0.515em',
      },
      borderRadius: {
        "Newsletter": "30px 400px 30px 30px"
      },
    },
  },
  plugins: [],
};
export default config;
