/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gradient-start': '#FF416C',
        'gradient-end': '#FF4B2B',
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          'from': { boxShadow: '0 0 10px rgba(255, 65, 108, 0.2)' },
          'to': { boxShadow: '0 0 20px rgba(255, 75, 43, 0.4)' },
        },
      },
    },
  },
  plugins: [],
}