const colors = require('tailwindcss/colors')
  
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de colores personalizada
         'azul':'#173554',
         'celeste':'#33CCCC',
        }
    },
    
  },
  
  plugins: [],
  
}

