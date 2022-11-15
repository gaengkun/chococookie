/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm':{'max': '514px'},
      // => @media (min-width: 640px) { ... }

      // 'md': {'max': '1535px'},
      // => @media (min-width: 768px) { ... }

      // 'lg': {'max': '1535px'},
      // => @media (min-width: 1024px) { ... }

      // 'xl': {'max': '1535px'},
      // => @media (min-width: 1280px) { ... }

      // '2xl':{'max': '1535px'},
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
