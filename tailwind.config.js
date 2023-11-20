/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'brand-700': '#d24115',
        'brand-600': '#ea580c',
        'brand-100': '#fed7aa',
        'brand-200': '#fed7aa',

      },
      colors: {
        'brand-text': '#c22d01',
        'brand-700': '#c64115',

      },
      fontFamily: {
        // Your existing font families...
        en: ['sans-serif','Kalam'],
        hi: ['Noto Sans Devanagari', 'sans-serif'],
       
      },
      
    },
  },
  plugins: [],
}

