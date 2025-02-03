/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-botao": "#FF8A00",
        "blue-background-form": "#668BB1",
        "blue-label": "#547DA8E3",
        "dark-blue-background": "rgb(2, 3, 129)"
      }
    },
  },
  plugins: [],
}
