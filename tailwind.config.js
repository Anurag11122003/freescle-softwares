/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      animation: {
        'matrix-fall': 'fall 5s linear infinite',
      },
      keyframes: {
        fall: {
          '0%': {transform: 'translateY(-100%)', opacity: 0},
          '50%': {opacity: 1},
          '100%': {transform: 'translateY(100%)', opacity: 0},
        },
      },
    },
  },
  plugins: [
    // Existing custom plugins
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
    // Tailwind Forms plugin
    require('@tailwindcss/forms'), // Add this line to include the forms plugin
  ],
};
