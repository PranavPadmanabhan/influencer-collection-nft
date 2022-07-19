import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

type Item = {
    url?:string,
    style?:React.CSSProperties
}

function CarouselCardItem({ url, style }:Item) {
  return (
    <div className='relative flex flex-col items-center justify-center w-[100%] h-[100%]  min-h-[49vh] min-w-[90vw] mx-5 ' style={style}>
        <img src={url} alt="" className='absolute z-[100] top-0 left-[8vw] w-[60%] h-[65%] rounded-[6%] shadow-carousel-card' />
        <div className='absolute top-[26vh] left-[20vw] w-[70%] h-[40%] shadow-carousel-card bg-gradient-to-r from-gradient-1 to-gradient-2 rounded-[5%] '>
            <div className="relative h-[100%] w-[100%] flex flex-col items-start justify-center">
                <h1 className=' ml-2 mt-4 text-[2rem] font-card text-white '>Elon Musk</h1>
                <span className=' ml-2 text-white text-[0.9rem] font-nav'>Current : <strong className='text-[1.2rem]'>0.88 ETH</strong></span>
                <div className="absolute -bottom-[20px] right-5 w-[20%] h-[10%] min-w-[120px] min-h-[40px] rounded-[30px] bg-[#0E3C66] flex items-center justify-between">
                    <span className=" ml-2 text-white text-[0.8rem]">Place a Bid</span>
                    <div className="w-[40px] h-[40px] rounded-[100%] flex items-center justify-center bg-white">
                        <FaChevronRight size={25} color={'#0E3C66'}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CarouselCardItem