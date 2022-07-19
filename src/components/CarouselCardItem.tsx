import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { nftCard } from '../constants/types'


function CarouselCardItem({ url, name, price  }:nftCard) {
  return (
    <div className='relative self-center flex flex-col items-center justify-center w-[100%] md:w-[50%] h-[100%] md:h-[70%]  min-h-[49vh]  md:min-h-[50vh] min-w-[90vw] min-w-[35vw] mx-5 '>
        <img src={url} alt="" className='absolute z-[100] top-0 md:top-[7%] left-[13%] sm:left-[25vw] md:left-[2vw] w-[50%] min-w-[200px] max-w-[200px] sm:max-w-[250px] h-[65%] sm:h-[60%] md:h-[85%]  rounded-[6%] shadow-carousel-card ' />
        <div className='absolute top-[26vh] md:top-[37vh] left-[25%]  sm:left-[31vw] md:left-[6vw] min-h-[100px] w-[65%] md:w-[55%]  max-w-[210px] sm:max-w-[300px]  h-[40%] sm:h-[35%] md:h-[50%] shadow-carousel-card bg-gradient-to-r from-gradient-1 to-gradient-2 rounded-[5%] '>
            <div className="relative h-[100%] w-[100%] flex flex-col items-start justify-center">
                <h1 className={` ml-2 mt-4 sm:text-[5vw] md:text-[2.5vw] font-card text-white ${name.length > 10?'text-[1.6rem]':'text-[2rem]'}`}>{name}</h1>
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