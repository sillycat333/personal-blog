/** @type {import('tailwindcss').Config} */
//import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        //sans: ["Inter", ...defaultTheme.fontFamily.sans],
        sans: ["Open Sans", "sans"],
        mono: ["JetBrains Mono Variable", "monospace"],
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [],
};
