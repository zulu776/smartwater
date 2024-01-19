/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [
  //   './pages/**/*.{js,ts,jsx,tsx}',
  //   './components/**/*.{js,ts,jsx,tsx}',
  //   './public/index.html',
  // ],
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'base-blue': '#1a3d7d',
        'light-blue': '#52a5f5',
        'base-green': '#209709',
        'light-green': '#d5fed4',
      },
    },
  },
  plugins: [],
};
