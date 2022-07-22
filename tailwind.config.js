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
        'henny-penny':['Henny Penny', 'cursive'],
        'julius':[ 'Julius Sans One', 'sans-serif'],
        'joti-one':['Joti One', 'cursive']
      
      },
      boxShadow:{
        'button':'0px 19px 56px #FF8300',
        'carousel-card':'14px 0px 25px 4px rgba(0, 0, 0, 0.46)',
        'roadmap':'0px 4px 81px -12px #FF7F3F, inset 0px 4px 73px #000000',
        'profile-card':'0px 11px 249px -9px rgba(255, 127, 63, 0.89)'
      },
      backgroundImage:{
        'mesh':'url(/Assets/images/mesh.png)',
        'mesh-mobile':'url(/Assets/images/mesh-mobile.png)'
      },
      screens: {
        'sm': '576px',  
        'md': '960px',  
        'lg': '1440px',
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
