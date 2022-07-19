import { NextPage } from "next"
import Head from "next/head"
import { useState } from "react"
import Bubble from "../components/Bubble"
import NavBar from "../components/NavBar"
import CarouselCardItem from "../components/CarouselCardItem"
import Carousel from 'framer-motion-carousel'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { useRouter } from "next/router"

 const Home:NextPage = () => {

  const router = useRouter();
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
    <div className="relative flex flex-col md:flex-row md:items-center md:justify-center bg-[#oooo] sm:bg-mesh md:bg-mesh bg-no-repeat bg-cover bg-center  h-screen w-[100%] items-center justify-center bg-[#000000] md:overflow-hidden box-border md:pt-0 pt-[14%]">
      <Head>
        <title>Influencer Collection NFT</title>
        <meta name="description" content="Influencer Collection NFT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Bubble height={"10vw"} width={'10vw'} left={'20%'} top={'50%'} />
      <Bubble height={"10vw"} width={'10vw'} left={'80%'} top={'85%'} /> */}
      <Bubble className={"flex md:hidden sm:hidden"} height={'20vh'} width={'20vh'} top={250} left={100} right={0} bottom={0} />
      <NavBar />
      <section className=" w-[100%] mb-2 h-[50%] flex flex-col items-center justify-center px-[5%] sm:h-[65%] md:flex-row md:w-[40%] md:h-[100%] md:justify-center">
        <div className="flex items-center w-[100vw] h-[50vh] justify-start md:w-[40vw] md:h-[70vh] md:pl-[15%]">
        <Carousel renderDots={() => null }  renderArrowLeft={() => null} renderArrowRight={() => null}  autoPlay={true} interval={2000} loop={true} >
        {
            data.map((item,index) => (
                <CarouselCardItem name="Elon Musk" price={0.86} url={item} key={index}/>
            ))
          }
        </Carousel>
          
        </div>
      </section>
      <section className="relative w-[100%] mt-0 h-[50%]  flex flex-col items-center justify-start md:w-[60%]  sm:mt-[3%] md:h-[70%] md:items-start md:mt-0 ">
      <h1 className="self-center text-white max-w-[80%] text-[2rem] sm:text-[7vw] sm:max-w-[60%] text-center font-henny-penny my-2 md:self-start md:text-[4.5rem] md:text-left md:max-w-[80%] ">Collectable Makes Me Richer...</h1>
      <h4 className="text-white font-nav text-[1rem] sm:text-[3.7vw] md:text-[1.5rem]">The Popular Influencer NFT Are Here..</h4>
      <div className="flex flex-col md:flex-row w-[100%] mt-0 items-center md:items-center md:justify-start md:mt-[2%]">
        <div onClick={() => router.push('/mint')} className="w-[80%] min-h-[45px] mr-0 h-[10%] my-2 flex items-center justify-center md:w-[30%] md:h-[10%] md:items-center md:mr-[5%] md:justify-start ">
          <span className="text-[#38E793] mr-2 text-[1.3rem] font-nav sm:text-[1.7rem] md:text-[1.4rem] cursor-pointer">Discover Now</span>
          <FaLongArrowAltRight className="cursor-pointer" size={24} color='#38E793' />
        </div>
        <span className=" text-white text-[1.3rem] font-nav sm:text-[1.7rem] md:text-[1.4vw] cursor-pointer">Learn More</span>
      </div>
      </section>
    </div>
  )
}

export default Home