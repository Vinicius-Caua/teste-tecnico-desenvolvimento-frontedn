/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-botao": "#FF8A00",
        "blue-background-form": "#668BB1",
        "blue-label": "#557EA9",
        "dark-blue-background": "rgb(2, 3, 129)"
      }
    },
  },
  plugins: [],
}
