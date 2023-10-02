/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [require("daisyui")],
  daisyUi: {
    themes: [
      "night",
      "dark",
      "emerald",
      "forest",
      "halloween",
      "bumblebee",
      "lofi",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "luxury",
      "dracula",
    ],
  },
};
