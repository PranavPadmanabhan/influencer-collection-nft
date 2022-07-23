import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { BsXLg } from 'react-icons/bs'
import { useRouter } from 'next/router';

function NavBar() {
  
  const router = useRouter()
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const navigate = () => {
    if(router.pathname == '/'){
      router.push('/about')
    }
    else {
      router.push('/')
    }
  }

  return (
    <header className={`fixed z-[1000] top-0 w-[100%] h-[10%] min-h-[8vh] max-h-[100px] sm:min-h-[10vh] bg-transparent flex items-center justify-end`}>
      <span onClick={navigate}  className="hidden sm:block text-white font-nav font-bold mr-6 cursor-pointer" >{router.pathname == '/'?'About Us':'Home'}</span>
      <button className={`hidden sm:block w-[12%] rounded-[10px]  h-[65%] min-w-[150px] min-h-[40px] max-h-[50px] bg-[#FF7F3F] shadow-button sm:text-[2vw] md:text-[1rem] text-black mx-[3%]`}>Connect Wallet</button>
      <FaBars onClick={() => setDrawerIsOpen(true)} className='flex sm:hidden m-[5%]' size={35} color={'#FF7F3F'}/>
      {
        drawerIsOpen && (
          <div className="fixed z-[1000] w-[65%] min-h-[20%] rounded-[15px] top-2 right-0 bg-gradient-to-r from-[#BF5F2F] to-[#B7AEAE] flex flex-col">
            <BsXLg onClick={() => setDrawerIsOpen(false)}  className='self-end m-[5%]' size={35} color={'#FF7F3F'}/>
            <div className="flex flex-col items-start pl-[5%] mt-[3%] justify-start w-[100%] h-[100%]">
              <span onClick={() => router.push('/')} className="text-gray-900 ml-1 text-[1.5rem] mt-[2%] font-nav ">HOME</span>
              <span onClick={() => router.push('/about')} className="text-gray-900 ml-1 text-[1.5rem] mt-[2%] font-nav ">ABOUT US</span>
              <button className={` mt-3 w-[75%] rounded-[10px] h-[20%] min-h-[6vh] bg-[#FF7F3F] shadow-button text-black my-5`}>Connect Wallet</button>
            </div>
          </div>
        )
      }
    </header>
  )
}

export default NavBar
