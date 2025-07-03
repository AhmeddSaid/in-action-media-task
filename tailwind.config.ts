import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "440px",
      },
      fontFamily: {
        sarmady: ["var(--font-sarmady)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        nav: "var(--nav-bg)",
        main: "var(--color-main)",
        secondary: "var(--color-secondary)",
        "dark-green": "var(--color-dark-green)",
        "light-green": "var(--color-light-green)",
        "dark-gray": "var(--color-dark-gray)",
        "light-gray": "var(--color-light-gray)",
        "sec-blue": "var(--color-sec-blue)",
        "sec-red": "var(--color-sec-red)",
        "sec-orange": "var(--color-sec-orange)",
        "sec-gray": "var(--color-sec-gray)",
        "sec-purple": "var(--color-sec-purple)",
      },
    },
  },
  plugins: [],
};

export default config;
