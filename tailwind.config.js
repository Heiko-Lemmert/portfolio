/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["nord", "night",
      {
        portodark: {

          "primary": "#34d29b",

          "secondary": "#3b82f6",

          "accent": "#472f4c",

          "neutral": "#211b1a",

          "base-100": "#18212f",

          "info": "#009dff",

          "success": "#517600",

          "warning": "#f08c00",

          "error": "#f55a78",
        }
      }
    ],
  }
};
