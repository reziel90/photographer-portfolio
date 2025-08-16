/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primaryAccent: '#A0522D', // Sienna
        lightBg: '#F8F8F8',
        lightText: '#333333',
        darkBg: '#121212',
        darkSurface: '#1E1E1E',
        darkText: '#C0C0C0',
        // Keep pastel colors if they are used elsewhere or as secondary accents
        pastelPink: '#F9E5E5',
        pastelBlue: '#E5F0F9',
        pastelGreen: '#E5F9E7',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      }
    }
  },
  plugins: []
};