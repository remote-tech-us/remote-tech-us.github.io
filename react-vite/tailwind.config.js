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
      animation: {
        'fade-in': 'fade-in 2s ease-out',
      },
    },
  },
  plugins: [],
};

