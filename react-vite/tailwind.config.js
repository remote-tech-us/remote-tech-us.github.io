/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'corporate-blue': '#0070f3',
      },
      // tailwind automatically appends animation-<name> i.e. animation-spin-slow
      animation: {
        'fade-in': 'fade-in 2s ease-out',
        'spin-slow': 'spin 3s linear infinite',  
      },
    },
  },
  plugins: [],
};

