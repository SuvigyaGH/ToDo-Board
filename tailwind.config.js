/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
      'serif': ['Parisienne', 'ui-serif', 'Georgia'],
      'mono': ['Manrope', 'ui-monospace', 'SFMono-Regular']
    },
    extend: {},
  },
  plugins: [],
};

export default config;