/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  themes: [
    {
      mytheme: {
      
"primary": "#efb086",
      
"secondary": "#218c0c",
      
"accent": "#306ca8",
      
"neutral": "#1C1F27",
      
"base-100": "#40424F",
      
"info": "#2A55D5",
      
"success": "#106557",
      
"warning": "#F09E24",
      
"error": "#F05951",
      },
    },
  ],
  plugins: [require("daisyui")],
}
