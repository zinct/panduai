/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#4E62FF",
        accent: "#EAECFF",
      },
      secondary: {
        DEFAULT: "#03BEFF",
        accent: "#E6F8FF",
      },
      neutral: {
        1: "#1C1C1C",
        2: "#202232",
        3: "#2D3045",
        4: "#474A60",
        5: "#74778D",
        6: "#D2D3DF",
      },
      blue: {
        DEFAULT: "#E5F3FF",
        10: "#D5E9FE",
        20: "#ABD3FD",
        30: "#82BCFC",
        40: "#58A6FB",
        50: "#0085FF",
        60: "#2982E1",
        70: "#2573C8",
        80: "#2065AF",
        90: "#1C5696",
        100: "#17487D",
      },
      purple: {
        DEFAULT: "#EFECFF",
        10: "#C3B7FF",
        20: "#A593FF",
        30: "#886EFF",
        40: "#6A4AFF",
        50: "#4F46E5",
        60: "#3F20D5",
        70: "#3319AA",
        80: "#261380",
        90: "#190D55",
        100: "#0F0833",
      },
      purple: {
        DEFAULT: "#FFCCF3",
        10: "#FEAAEC",
        20: "#FE80E2",
        30: "#FE55D8",
        40: "#FD2ACF",
        50: "#FD00C5",
        60: "#D300A4",
        70: "#A90083",
        80: "#7F0062",
        90: "#540042",
        100: "#330027",
      },
    },
    extend: {},
  },
  plugins: [],
};
