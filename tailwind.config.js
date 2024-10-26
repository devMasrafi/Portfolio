/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': ['"Inter", serif']
    },
    extend: {
      colors: {
        'white': '#FFFFFF',
        'sec-color': "#28E98C",
        'bg-main-col': "#1E1E1E"
      },
    },
  },
  plugins: [],
}