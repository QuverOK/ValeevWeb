/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      "boxShadow": {
        "Drop Shadow": "0px 4px 31px 0px rgba(42,67,113,0.15)"
       },
       "borderRadius": {
        "none": "0",
        "xs": "0.375rem",
        "sm": "0.5rem",
        "default": "1rem",
        "lg": "1.25rem",
        "xl": "1.8125rem",
        "2xl": "3.5rem",
        "3xl": "4.6875rem"
       },
       "colors": {
        "main": "#1A1A1A"
       }
    },
  },
  plugins: [],
};
