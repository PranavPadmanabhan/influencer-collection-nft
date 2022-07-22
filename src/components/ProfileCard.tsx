import React from 'react'
 type card = {
    url:string,

 }

function ProfileCard({ url }:card) {
  return (
    <div className={`w-[100%] h-[100%] bg-gradient-to-b from-[#5F3A8E] to-[#00386C] p-[5%] flex flex-col items-center  justify-start shadow-profile-card overflow-hidden`}>
        <img src={url} className={`max-h-[80%] rounded-[4px]`}/>
        <span className="my-[2%] text-white text-[1.5rem] font-bold font-nav">Name</span>
        <span className="text-white text-[1rem]">Developer</span>
    </div>
  )
}

export default ProfileCard