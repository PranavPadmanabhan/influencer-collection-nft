import React from 'react'
import { profileCard } from '../constants/types'


function ProfileCard({ url, name, position }:profileCard) {
  return (
    <div className={`w-[100%] h-[100%] bg-gradient-to-b from-[#5F3A8E] to-[#00386C] p-[5%] flex flex-col items-center  justify-start shadow-profile-card overflow-hidden`}>
        <img src={url} className={`max-h-[80%] rounded-[4px]`}/>
        <span className="my-[2%] text-white text-[1.5rem] font-bold font-nav">{name}</span>
        <span className="text-white text-[1rem]">{position}</span>
    </div>
  )
}

export default ProfileCard