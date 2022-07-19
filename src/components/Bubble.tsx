import React from 'react'
import { bubble } from '../constants/types'

function Bubble({ height, width, top, left, bottom,right, className }:bubble) {
  return (
    <div className={`${className} absolute  rounded-[100%] bg-bubble`} style={{height,width,top,left,right,bottom, boxShadow:'0px 4px 138px 105px rgba(255, 127, 63, 0.98)',transform:'rotate(-61.61deg)'}}></div>
  )
}

export default Bubble