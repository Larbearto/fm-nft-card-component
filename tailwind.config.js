/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      Softblue: 'hsl(215, 51%, 70%)',
      Cyan: 'hsl(178, 100%, 50%)',
      Verydarkblue: 'hsl(217, 54%, 11%)',
      darkblue: 'hsl(216, 50%, 16%)',
      fadeddarkblue: 'hsl(215, 32%, 27%)',
      White: 'hsl(0, 0%, 100%)'
    },
    fontFamily: {
      Outfit: ['Outfit']
    }
  },
  plugins: []
}
