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
        primary: {
          "50": "#E1F9F9",  // Lightest shade
          "100": "#B3F2F2", // Very light shade
          "200": "#80EAE9", // Light shade
          "300": "#4DE2DF", // Light-medium shade
          "400": "#26D9D6", // Medium shade
          "500": "#1AC8C3", // Base color
          "600": "#17B3AF", // Medium-dark shade
          "700": "#129C9A", // Darker shade
          "800": "#0D8585", // Dark shade
          "900": "#076F6F", // Darkest shade
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
