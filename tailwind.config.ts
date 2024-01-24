import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "400px",
      },
      colors: {
        white: "#FFFFFF",
        black: "#171725",
        primary: "#0BAB7C",
        secondary: {
          1: "#C7F4C2",
          2: "#D7D0FF",
          3: "#FDDD8C",
          4: "#FFBBD7",
        },
        natural: {
          1: "#F4F4F4",
          2: "#F1F1F5",
          3: "#FAFAFB",
          4: "#F5F5F8",
          5: "#E2E2EA",
          6: "#92929D",
          7: "#696974",
          8: "#44444F",
        },
        darkBG: {
          1: "#13131A",
          2: "#1C1C24",
          3: "#21212B",
        },
      },
    },
  },
  plugins: [],
};
export default config;
