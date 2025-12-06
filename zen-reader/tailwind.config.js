/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zen-bg': '#F5F1E8',
        'zen-text': '#2D2D2D',
        'zen-accent': '#8B9A7E',
      },
      fontFamily: {
        'serif': ['Merriweather', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'reading': '65ch',
      }
    },
  },
  plugins: [],
}
