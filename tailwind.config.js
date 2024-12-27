/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cloudDancer: '#F0EEE9',
        nordicBreeze: '#D3DDE7',
        durantaYellow: '#D8E63C',
        lightViolet: '#D6B4FC',
        intergalacticHighway: '#273287',
        tesuoBlue: '#17174B',
      },
      fontFamily: {
        splineSansMono: ['"Spline Sans Mono"', 'serif']
      },
      screens: {
        'xs': '320px',
      },
    },
  },
  plugins: [],
}

