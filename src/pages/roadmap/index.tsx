import { NextPage } from "next";
import Head from "next/head";
import NavBar from "../../components/NavBar";

const RoadMap:NextPage = () => {
    return (
        <div className="relative h-screen w-[100%] flex flex-col items-center justify-start bg-mesh-mobile sm:bg-mesh md:bg-mesh bg-no-repeat bg-center bg-cover pt-[14%] md:pt-[5%]">
            <Head>
                <title>RoadMap</title>
                <meta name="description" content="RoadMap" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <h1 className="text-white text-[2rem] font-julius mb-4 md:text-[3rem] sm:mb-3">ROADMAP</h1>
                <div className='absolute z-[100] top-[15%] md:left-[10%]  w-[75%] h-[12%] rounded-[10px] flex items-center justify-center bg-gradient-to-r from-[#583A8B] to-[#183B73] my-[5%] shadow-roadmap '>
                    <span className="text-white text-[0.7rem] font-joti-one text-center sm:text-[1rem]">Phase 1: LAUNCH OF SOCIAL MEDIA , DISCORD SERVER AND BEGINNING OF COMMUNITY CURATION </span>
                </div>
                <img src="/Assets/images/Vector-arc-right.png" alt="" className="absolute z-[10]  w-[70px] h-[100px] sm:h-[150px] md:h-[200px] top-[26%] sm:top-[27%] md:top-[25%] right-[5%] sm:right-[10%] md:right-[10%] transform md:rotate-[-24deg]"  />
                <div className='absolute z-[100] top-[32%] md:right-[10%] w-[75%] h-[12%] rounded-[10px] flex items-center justify-center bg-gradient-to-l from-[#583A8B] to-[#183B73] my-[5%] shadow-roadmap'>
                    <span className="text-white text-[0.7rem] font-joti-one text-center sm:text-[1rem]">Phase 2:IN DEPTH PROMOTION OF THE PROJECT WATERING DOWN OF COMMINITY TO ENSURE 
                        THE SIGNIFICANCE OF THE TOKEN </span>
                </div>
                <img src="/Assets/images/Vector-arc-left.png" alt="" className="absolute  w-[70px] h-[100px] sm:h-[150px] md:h-[200px] top-[43%] sm:top-[44%] md:top-[42%] left-[6%] sm:left-[10%] md:left-[11%] transform rotate-[-20deg] md:rotate-[30deg]"  />
                <div className=' absolute z-[100] top-[49%] md:left-[10%] w-[75%] h-[12%] rounded-[10px] flex items-center justify-center bg-gradient-to-r from-[#583A8B] to-[#183B73] my-[5%] shadow-roadmap'>
                    <span className="text-white text-[0.7rem] font-joti-one text-center sm:text-[1rem]">Phase 3: TOKEN STAKING AND PUBLIC MINT OF THE 100 INFLUENCER NFT </span>
                </div>
                <img src="/Assets/images/Vector-arc-right.png" alt="" className="absolute  w-[70px] h-[100px] sm:h-[150px] top-[61%] sm:top-[61%] md:top-[63%] right-[5%] sm:right-[10%] md:right-[10%] transform md:rotate-[-24deg]"  />
                <div className=' absolute z-[100] top-[66%] md:right-[10%] w-[75%] h-[12%] rounded-[10px] flex items-center justify-center bg-gradient-to-l from-[#583A8B] to-[#183B73] my-[5%] shadow-roadmap'>
                    <span className="text-white text-[0.7rem] font-joti-one text-center sm:text-[1rem]">Phase 4: CONTINUATION OF MEDIA AND COMMUNITY, LAUNCH OF MERCHANDISE AND SISTER NFT
                        COLLECTIONS REVOLVING AROUND THE GREATEST PEOPLE IN HISTORY </span>
                </div>
        </div>
    )
}

export default RoadMap