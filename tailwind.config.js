/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',       // App Router files
    './pages/**/*.{js,ts,jsx,tsx}',     // If using Pages Router too
    './components/**/*.{js,ts,jsx,tsx}', // Your components
  ],
  darkMode: 'class', // 👈 enables class-based dark mode (required for toggle)
  theme: {
    extend: {},
  },
  plugins: [],
}
