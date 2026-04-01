/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gaming: {
          900: '#0B0B0E', // main dark background
          800: '#141419', // secondary dark
          700: '#1E1E26', // lighter dark
          neon: '#00F0FF', // cyan neon
          neonPurple: '#B026FF', // purple neon
          accent: '#FF0055', // pink/red accent
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
