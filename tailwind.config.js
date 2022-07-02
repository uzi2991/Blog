/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        primaryLight: '#dbeafe',
        primaryDark: '#1e40af',
        gray: '#9ca3af',
        grayLight: '#f3f4f6'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
