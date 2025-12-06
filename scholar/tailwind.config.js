/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'scholar-navy': '#1E3A5F',
        'scholar-cream': '#FAF9F6',
        'scholar-burgundy': '#8B2E2E',
        'scholar-gold': '#C4A962',
      },
      fontFamily: {
        'serif': ['Crimson Text', 'Playfair Display', 'Georgia', 'serif'],
        'sans': ['Source Sans Pro', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      }
    },
  },
  plugins: [],
}
