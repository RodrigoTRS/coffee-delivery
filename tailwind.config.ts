import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1200px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "background": "rgb(var(--background))",
        "muted": "rgb(var(--muted))",
        "foreground": "rgb(var(--foreground))",
        "muted-foreground": "rgb(var(--muted-foreground))",
        "yellow-light": "rgb(var(--yellow-light))",
        "yellow": "rgb(var(--yellow))",
        "yellow-dark": "rgb(var(--yellow-dark))",
        "purple-light": "rgb(var(--purple-light))",
        "purple": "rgb(var(--purple))",
        "purple-dark": "rgb(var(--purple-dark))"
      }
    },
  },
  plugins: [],
};
export default config;
