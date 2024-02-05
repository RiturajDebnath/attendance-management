/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "light-primary": "var(--light-primary)",
        "primary-hover": "var(--primary-hover)",
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

