/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-accent": "#F2B66D",
        "custom-primary": "#da42a5",
        "custom-primary-shade": "#611d49",
        "custom-primary-hover": "#a93380",
        "custom-primary-ring": "#912c6e",
        "custom-secondary": "#191026",
        "custom-secondary-shade": "#33204c",
        "custom-secondary-hover": "#b296d9",
        "custom-bg": "#242540",
        "custom-error-primary": "#D9734E",
        "custom-error-secondary": "#191026",
        "custom-error-text": "#F5F5F5",
        "custom-text-normal": "#F8F8F8",
        "custom-text-subtle": "#fab6e2",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
