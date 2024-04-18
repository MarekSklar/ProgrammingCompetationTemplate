/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./client/**/*.html"
  ],
  theme: {
    colors: {
      "white": "#FFF",
      "black": "#000",
      "transparent": "transparent"
    },
    extend: {
      width: {
        "wfa": "-webkit-fill-available"
      },
      spacing: {
        112: "28rem",
        128: "32rem",
        160: "40rem",
        192: "48rem"
      }
    },
  },
  plugins: [],
}

