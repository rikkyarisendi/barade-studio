import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-lime': '#DCF900',
        'brand-dark': '#3f3f3f',
        'brand-gray': '#d9d9d9',
        'brand-cream': '#f9f9ed',
      },
      fontFamily: {
        'display': ['var(--font-display)'],
        'body': ['var(--font-body)'],
      },
    },
  },
  plugins: [],
};
export default config;
