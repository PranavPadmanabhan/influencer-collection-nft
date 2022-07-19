import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

type Item = {
    url?:string,
    style?:React.CSSProperties
}

function CarouselCardItem({ url, style }:Item) {
  return (
    <div className='relative self-center flex flex-col items-center justify-center w-[100%] h-[100%]  min-h-[49vh] min-w-[90vw] mx-5 md:w-[50%] md:h-[70%] md:min-h-[50vh] min-w-[35vw]' style={style}>
        <img src={url} alt="" className='absolute z-[100] top-0 left-[13%] sm:left-[25vw] w-[50%] min-w-[200px] max-w-[200px] sm:max-w-[250px] h-[65%] sm:h-[60%] md:h-[85%] md:top-[7%] rounded-[6%] shadow-carousel-card md:left-[2vw]' />
        <div className='absolute top-[26vh] left-[25%] md:top-[37vh] sm:left-[31vw] md:left-[6vw] min-h-[100px] w-[65%] max-w-[210px] sm:max-w-[300px] md:w-[55%]  h-[40%] sm:h-[35%] md:h-[50%] shadow-carousel-card bg-gradient-to-r from-gradient-1 to-gradient-2 rounded-[5%] '>
            <div className="relative h-[100%] w-[100%] flex flex-col items-start justify-center">
                <h1 className=' ml-2 mt-4 sm:text-[5vw] md:text-[2.5vw] font-card text-white text-[8vw]'>Elon Musk</h1>
                <span className=' ml-2 -mt-2 text-white sm:text-[2.5vw] md:text-[1vw] font-nav text-[3vw]'>Current : <strong className=' sm:text-[2.7vw] md:text-[1.2vw] text-[4vw]'>0.88 ETH</strong></span>
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