import { NextPage } from "next";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import { useState } from "react";
import ProfileCard from "../../components/ProfileCard";

import { Slider3D } from 'react-slider-3d';



const AboutUs:NextPage = () => {


    const [data, setData] = useState([
        '/Assets/images/musk.jpg',
        '/Assets/images/musk.jpg',
        '/Assets/images/musk.jpg',
        '/Assets/images/musk.jpg',
        '/Assets/images/musk.jpg',
    ])
    

    return (
        <div className="w-[100%] h-screen flex flex-col items-center justify-center bg-mesh-mobile sm:bg-mesh md:bg-mesh bg-no-repeat bg-center bg-cover ">
            <Head>
                <title>About Us</title>
                <meta name="description" content="About Us" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <h1 className="text-white font-julius text-[2rem] md:text-[3rem] sm:mb-3">MEET OUR TEAM</h1>
            <Slider3D  
            className={'bg-transparent '} 
            clickable 
            border={0} 
            perspective={10} 
            controlsVisible={true} 
            height={400} 
            width={300} 
            items={
              data.map((item,index) => (
                <ProfileCard 
                key={index} 
                url={item} 
                name={"Name"} 
                position={"Developer"} />
                ))} 
            />
                
        </div>
    )
}

export default AboutUs