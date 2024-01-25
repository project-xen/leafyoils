/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        head: ["Geologica", "system-ui", "sans-serif"],
        body: ["Lora", "Vollkorn", "Cambria"],
      },
    },
  },
  plugins: [],
};
