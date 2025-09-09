import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accentGreen: "#A1E039",
        accentRose: "#FF8673",
        accentLavender: "#E5A6FF",
        accentAqua: "#99FFD1",
        accentPurple: "#E5A6FF",
      },
      boxShadow: {
        'custom': '0 4px 4px rgba(0, 0, 0, 0.1)',
        'neuro': '8px 8px 15px rgba(0, 0, 0, 0.1), -8px -8px 15px rgba(255, 255, 255, 0.7)',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        redressed: ['Redressed'],
      },
      screens: {
        '4xl': '1900px',
      }
    },
  },
  plugins: [],
};
export default config;
