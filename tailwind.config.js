/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-text-normal": "#FFFFFF",
        "custom-accent": "#2E9CCA",
        "custom-secondary": "#AAABB8",
        "custom-primary": "#29648A",
        "custom-bg": "#25274D",
        "custom-error-text": "#FF0000",
        "custom-error-primary": "#FF0000",
        "custom-error-secondary": "#FF1000",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
