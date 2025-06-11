/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/bg2.svg')",
      },
      colors: {
        'primary': '#212529',
      },
    },
  },
  plugins: [],
}

