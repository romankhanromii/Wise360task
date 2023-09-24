/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      'sm': { 'max': '768px', 'min': '360px' }, // Added min width of 320px
      'md': '768px',
      'ipad': { 'max': '1000px', 'min': '700px' },
      
      'my': { 'max': '1288px', 'min': '1000px' },
      
     
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1536px',
      'custom': '1600px', // Your custom breakpoint
    },
  },
  plugins: [],
}