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
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkBlue: "rgb(32, 35, 68)",
        mediumBlue: "rgb(44, 49, 89)",
        lightBlue: "#4c7cfc",
        purple: "#6b31f6",
        pink: "#f44e64",
      },
    },
  }
};
export default config;
