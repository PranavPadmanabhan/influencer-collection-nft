import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Bubble from "../../components/Bubble";
import NavBar from "../../components/NavBar";
import NFTCard from "../../components/NFTCard";


const Mint:NextPage = () => {
    const [data, setData] = useState([
        '/Assets/images/musk.jpg',
      '/Assets/images/mesh.png',
      '/Assets/images/musk.jpg',
      '/Assets/images/mesh.png',
    ])
    return (
        <div className="relative flex flex-col h-screen w-[100%] items-center justify-start bg-black pt-[15%] box-border sm:pt-[10%] md:pt-[5%]">
            <Head>
                <title>Mint Now</title>
                <meta name="description" content="Mint Now" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Bubble className={"flex sm:hidden md:hidden"} width={200} height={200} left={'25vw'} top={"30vh"} />
            <h1 className="sixed top-[17%] text-white font-light text-[2rem] sm:mb-3">MINT NOW</h1>
            <div className="z-[100] w-[100%] h-auto min-h-[60%] overflow-y-scroll flex flex-col items-center justify-start sm:grid sm:grid-cols-2 sm:place-content-start sm:place-items-center sm:gap-y-3 md:grid md:grid-cols-3 md:place-content-start md:place-items-center md:gap-y-5 snap-y snap-mandatory scroll-pt-9 pb-[10vh]">
                <NFTCard url={data[0]} price={0.88} name={'Elon Musk'}/>
                <NFTCard url={data[1]} price={0.88} name={'Pranav Padmanabhan'}/>
                <NFTCard url={data[2]} price={0.88} name={'Elon Musk'}/>
                <NFTCard url={data[3]} price={0.88} name={'Elon Musk'}/>
                <NFTCard url={data[0]} price={0.88} name={'Elon Musk'}/>
            </div>
        </div>
    )
}

export default Mint