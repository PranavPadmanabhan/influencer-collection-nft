import Head from 'next/head'
import React from 'react'

function NavBar() {
  return (
    <header className={` w-[100%] h-[10%] min-h-[8vh] max-h-[100px] sm:min-h-[10vh] bg-transparent flex items-center justify-end`}>
      <span className="hidden sm:block text-white font-nav font-bold mr-6" >About Us</span>
      <button className={`hidden sm:block w-[12%] rounded-[10px] h-[65%] min-h-[6vh] bg-[#FF7F3F] shadow-button text-black mx-[3%]`}>Connect Wallet</button>
    </header>
  )
}

export default NavBar