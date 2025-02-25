/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure this path is correct
  theme: {
    extend: {
      fontFamily: {
        redhat: ["Red Hat Display", "sans-serif","Manrope"],
      },
    },
  },
  plugins: [],
};
