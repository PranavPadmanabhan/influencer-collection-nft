import { NextPage } from "next"
import Head from "next/head"
import { useState } from "react"
import Bubble from "../components/Bubble"
import NavBar from "../components/NavBar"
import {  CarouselItems} from '../components/Carousel'
import CarouselCardItem from "../components/CarouselCardItem"
import Carousel from 'framer-motion-carousel'
import { FaLongArrowAltRight } from 'react-icons/fa'

 const Home:NextPage = () => {

  const [data, setData] = useState([
                '/Assets/images/musk.jpg',
              '/Assets/images/mesh.png',
              '/Assets/images/musk.jpg',
              '/Assets/images/mesh.png',
            ])
  const [currentIndex, setcurrentIndex] = useState<number>(0)   
  
  setInterval(() => {
    if(currentIndex == data.length - 1){
      setcurrentIndex(0)
    }
    else {
      setcurrentIndex(currentIndex + 1)
    }
  },3000)

  return (
    <div className="relative flex flex-col sm:flex-row bg-[#oooo] sm:bg-mesh bg-no-repeat bg-cover bg-center  h-screen w-[100%] items-center justify-center bg-[#000000] sm:overflow-hidden box-border">
      <Head>
        
      </Head>
      {/* <Bubble height={"10vw"} width={'10vw'} left={'20%'} top={'50%'} />
      <Bubble height={"10vw"} width={'10vw'} left={'80%'} top={'85%'} /> */}
      <Bubble height={'20vh'} width={'20vh'} top={250} left={100} right={0} bottom={0} />
      <NavBar />
      <section className=" w-[100%] h-[50%] flex flex-col items-center justify-center px-[5%]">
        <div className="flex items-center w-[100vw] h-[50vh] justify-start ">
        <Carousel renderDots={() => null } renderArrowLeft={() => null} renderArrowRight={() => null}  autoPlay={true} interval={2000} loop={true} >
        {
            data.map((item,index) => (
              <CarouselItems width={'100%'} key={index}>
                <CarouselCardItem url={item} />
              </CarouselItems>
            ))
          }
        </Carousel>
          
        </div>
      </section>
      <section className="w-[100%] h-[50%] flex flex-col items-center justify-start">
      <h1 className=" self-center text-white max-w-[80%] text-[2rem] text-center font-henny-penny my-2 ">Collectable Makes Me Richer...</h1>
      <h4 className="text-white font-nav text-[1rem]">The Popular Influencer NFT Are Here..</h4>
      <div className="w-[80%] h-[10%] my-3 flex items-center justify-center">
        <span className="text-[#38E793] mr-2 text-[1.3rem]">Discover Now</span>
        <FaLongArrowAltRight size={24} color='#38E793' />
      </div>
          <span className="text-white text-[1.3rem]">Learn More</span>
      </section>
    </div>
  )
}

export default Home