/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background: '#0A192F',
        bgCard: '#112240',
        buttons:'#64FFDA',
      },
    },
    fontFamily:{
      'robotoMono': ['Roboto Mono', 'monospace'],
    }
  },
  plugins: [],
}