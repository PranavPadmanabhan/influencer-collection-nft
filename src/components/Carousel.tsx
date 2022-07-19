import React, { useEffect, useState } from "react";

type carousel = {
  children: any;
  length:number,
  index:number
};

type carouselItem = {
  children: React.ReactNode;
  width: number | string;
};

export const Carousel = ({ children, length, index }: carousel) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  

  return (
    <div className="overflow-hidden h-[70%] min-h-[50vh] w-[100%] min-w-[100vw] bg-transparent">
      <div
        className="whitespace-nowrap duration-700"
        style={{ transform: currentIndex == 0?`translateX(0%)`:`translateX(-${currentIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
        
      </div>
     
    </div>
  );
};

export const CarouselItems = ({ children, width }: carouselItem) => {
  return (
    <div className="inline-flex flex-col items-center justify-start min-h-[50vh] w-[100%] min-w-[90vw] snap-center " style={{ width }}>
      {children}
    </div>
  );
};
