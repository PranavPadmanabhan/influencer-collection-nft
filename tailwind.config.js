module.exports = {
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}', 
    './src/pages/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors:{
        'bubble':"rgba(255, 127, 63, 0.9)",
        'gradient-1':'rgba(183, 174, 174, 0.72)',
        'gradient-2':'rgba(181, 181, 181, 0)'
      },
      fontFamily:{
        'nav':[ 'Play', 'sans-serif'],
        'card':[ 'Happy Monkey', 'cursive'],
        'henny-penny':['Henny Penny', 'cursive']
      
      },
      boxShadow:{
        'button':'0px 19px 56px #FF8300',
        'carousel-card':'14px 0px 25px 4px rgba(0, 0, 0, 0.46)'
      },
      backgroundImage:{
        'mesh':'url(/Assets/images/mesh.png)'
      },
      screens: {
        'sm': '576px',  
        'md': '960px',  
        'lg': '1440px',
      },
    },
  },
  variants: {},
  plugins: [],
}
