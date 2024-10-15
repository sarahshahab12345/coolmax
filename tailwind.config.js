/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue1: '#22498C', 
        customBlue2: '#009FE3', 
        customBlue3: '#2B388F', 
        customBlue4: '#142e5a', 
        customGrey4: '#565656', 
        customGrey3: '#ededed', 
      },
      fontFamily: {
        inter: ['Inter', 'sans'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
