import { type Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"], 
  },
};

export default config;
