/** @type {import('tailwindcss').Config} */
export default {
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`,
  ],
  theme: {
    extend: {},
    colors: {
      bgcmi: "#121212",
      bgcmi2: "#181818",
      text: "#1e1e1e",
      text2: "#EEEDED",
      orangecmi: "#F9A73E",
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
};
