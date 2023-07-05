/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f5e0dc",

          secondary: "#89dceb",

          accent: "#94e2d5",

          neutral: "#cdd6f4",

          "base-100": "#1e1e2e",

          info: "#cba6f7",

          success: "#a6e3a1",

          warning: "#f9e2af",

          error: "#f38ba8",
        },
      },
    ],
  },
};
