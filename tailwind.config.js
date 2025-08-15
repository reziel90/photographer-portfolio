/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        pastelPink: '#F9E5E5',
        pastelBlue: '#E5F0F9',
        pastelGreen: '#E5F9E7',
        darkBg: '#0d0d0d',
        darkSurface: '#1a1a1a',
      }
    }
  },
  plugins: []
};
