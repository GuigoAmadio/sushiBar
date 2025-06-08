/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0d0d0d',
        light: '#f5f5f5',
      },
    },
  },
  plugins: [],
};
