import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    nextui({
      themes: {
        "light-green": {
          extend: "light", // Inherit default values from light theme
          colors: {
            background: "#F5F8F9", // Light green background
            foreground: "#333333", // Darker text for contrast

            primary: {
              '50': '#edfcf4',
              '100': '#d4f7e3',
              '200': '#adedcc',
              '300': '#78ddaf',
              '400': '#36b37e',
              '500': '#1eab74',
              '600': '#118a5d',
              '700': '#0e6e4d',
              '800': '#0d583f',
              '900': '#0c4834',
              '950': '#05291e',
              DEFAULT: "#1eab74",
              foreground: "#333333",
            },
            focus: "#29D98B", // Slightly darker green for focus
          },
          layout: {
            // Inherit layout values from dark theme (or light, depending on your preference)
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
};
export default config;
