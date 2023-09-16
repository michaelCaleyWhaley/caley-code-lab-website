/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#50808E',
        'custom-blue-1': '#69A297',
        'custom-brown': '#DDD8C4',
        'custom-light-green': '#A3C9A8',
        'code-gray': '#1d1e22e6',
        'html-gold': '#a7925a',
        'html-action-yellow': '#ddca7e',
      },
      maxWidth: {
        'width-xxs': '12rem',
      },
      gridTemplateColumns: {
        'auto/1fr': 'auto 1fr',
      },
    },
  },
  plugins: [],
};
