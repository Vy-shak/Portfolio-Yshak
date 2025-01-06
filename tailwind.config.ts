import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          100: '#E8E8E8',
          200: '#B9B9B9',
          300: '#979797',
          400: '#686868',
          500: '#4A4A4A',
          600: '#1D1D1D',
          700: '#1A1A1A',
          800: '#151515',
          900: '#101010',
          1000: '#0C0C0C',
        },
        greenPrimary: {
          100: '#F9FFE5',
          200: '#F0FFC7',
          300: '#E0FF95',
          400: '#D0FF71',
          500: '#AEF625',
          600: '#8FDD05',
          700: '#6DB100',
          800: '#538605',
          900: '#43690B',
          1000: '#39590E',
          1100: '#1C3201',
        },
        gradient: {
          base: '#858080'
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
