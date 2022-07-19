import React from 'react'
import { FaChevronRight } from 'react-icons/fa';
import { nftCard } from '../constants/types';


function NFTCard({ url, name, price}:nftCard) {
  return (
    <div className='relative flex flex-col items-center justify-start w-[70%] min-w-[250px] sm:w-[55%] md:w-[55%] md:min-w-[220px] h-[50%] min-h-[350px] bg-gradient-to-b from-[#5F3A8E] to-[#00386C] my-5 snap-start rounded-[5%] p-[4%] md:p-[3.2%]'>
        <img src={url} alt="" className='w-[100%] h-[70%] rounded-[5%]' />
        <h1 className={`self-start text-white ${name.length > 10?'text-[1.4rem]':'text-[1.5rem]'} my-[2%] font-semibold`}>{name}</h1>
        <span className="self-start text-white text-[1rem]">current : <strong className='text-[1.2rem]'>{price} ETH</strong></span>
        <div className="absolute -bottom-[20px] right-3 w-[20%] h-[10%] min-w-[120px] min-h-[40px] rounded-[30px] bg-gradient-to-b from-[#5D3A8D] to-[#02386D] flex items-center justify-between">
            <span className=" ml-2 text-white text-[0.8rem]">Place a Bid</span>
            <div className="w-[40px] h-[40px] rounded-[100%] flex items-center justify-center bg-white">
                <FaChevronRight size={25} color={'#0E3C66'}/>
            </div>
         </div>
    </div>
  )
}

export default NFTCard