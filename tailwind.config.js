/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "light-secondary": "var(--light-secondary)",
        "accent": "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "text": "var(--text)",
        "shadow": "var(--shadow)",
      },
    },
  },
  plugins: [],
}

