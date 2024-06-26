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
      colors: {
        overlay: {
          "dark-10": "rgba(0, 0, 0, 0.1)",
          "dark-20": "rgba(0, 0, 0, 0.2)",
          "dark-30": "rgba(0, 0, 0, 0.3)",
          "dark-40": "rgba(0, 0, 0, 0.4)",
          "dark-50": "rgba(0, 0, 0, 0.5)",
          "dark-60": "rgba(0, 0, 0, 0.6)",
          "dark-70": "rgba(0, 0, 0, 0.7)",
          "dark-80": "rgba(0, 0, 0, 0.8)",
          "dark-90": "rgba(0, 0, 0, 0.9)",
        },
        primary: {
          "50": "#F9F5FF",  // Lightest shade
          "100": "#C5B9EF", // Very light shade
          "200": "#A18EE6", // Light shade
          "300": "#7D63DE", // Light-medium shade
          "400": "#6243D4", // Medium shade
          "500": "#6941C6", // Base color
          "600": "#5E3AB3", // Medium-dark shade
          "700": "#5333A0", // Darker shade
          "800": "#472B8D", // Dark shade
          "900": "#3C247A", // Darkest shade
        },

        secondary: {
          "50": "#E1F3FA",  // Lightest shade
          "100": "#B3E0F4", // Very light shade
          "200": "#80CBEE", // Light shade
          "300": "#4DB6E7", // Light-medium shade
          "400": "#26A5E0", // Medium shade
          "500": "#0BA5D6", // Base color
          "600": "#0892BF", // Medium-dark shade
          "700": "#067EA8", // Darker shade
          "800": "#056B91", // Dark shade
          "900": "#03587A", // Darkest shade
        },
        tertiary: {
          "100": "#F5FDCB",
          "200": "#E8FC97",
          "300": "#D5F863",
          "400": "#C1F13C",
          "500": "#A4E900",
          "600": "#86C800",
          "700": "#6BA700",
          "800": "#528700",
          "900": "#416F00",
        },
        success: {
          "100": "#DAFBD3",
          "200": "#AFF7A9",
          "300": "#7AE97B",
          "400": "#55D363",
          "500": "#26B743",
          "600": "#1B9D42",
          "700": "#13833F",
          "800": "#0C6A39",
          "900": "#075736",
        },
        info: {
          "100": "#D6E3FE",
          "200": "#AEC6FE",
          "300": "#85A7FE",
          "400": "#678DFD",
          "500": "#3563FC",
          "600": "#264BD8",
          "700": "#1A37B5",
          "800": "#102592",
          "900": "#0A1978",
        },
        warning: {
          "100": "#FFF5CD",
          "200": "#FFE89B",
          "300": "#FFD869",
          "400": "#FFC943",
          "500": "#FFAF05",
          "600": "#DB8F03",
          "700": "#B77102",
          "800": "#935601",
          "900": "#7A4300",
        },
        danger: {
          "100": "#FDDBD2",
          "200": "#FBB1A5",
          "300": "#F57C77",
          "400": "#EC555E",
          "500": "#E0213E",
          "600": "#C01841",
          "700": "#A11041",
          "800": "#810A3E",
          "900": "#6B063B"
        }
      }
    },
  },
  plugins: [],
};
export default config;
