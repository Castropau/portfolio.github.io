import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/apps/**/*.{js,ts,jsx,tsx,mdx}',
    './app/providers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          '950': '#030712',
        },
      },
    },
  },
  // @ts-ignore
  plugins: [require('daisyui')],
};
export default config;
