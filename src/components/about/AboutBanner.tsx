'use client';
import Navbar from "../home/Navbar";
import Image from "next/image"
import React from "react";
import { useEffect } from "react";

type ContentItem = {
  type: 'text' | 'image';
  data: string;
};

interface BannerSectionProps {
  bannerData: ContentItem[];
}
const AboutBanner:React.FC<BannerSectionProps> = ({bannerData})=>{
   
  const bannerimage = bannerData?.[0]?.data
  const poster = bannerData?.[3]?.data
    return(
        <section style={{ backgroundImage: `url(${bannerimage})` }} className="flex flex-col md:flex-row flex-wrap items-center justify-between bg-black mt p-20 md:pr-72 md:pl-96  bg-cover bg-no-repeat bg-center border-t-4">
            <div className="absolute top-0 left-0 w-full h-[50px] bg-black z-20" />

            <div className="absolute top-[50px] left-0 w-full h-[3px] bg-green-500 z-30" />

            {/* <div className="w-full md:w-1/3 flex justify-start md:justify-start pt-6 md:pt-0"> */}
            <Navbar />
           {/* </div> */}

            <div className="text-center md:text-left mb-6 md:mb-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold ">{bannerData?.[1]?.data }<span className="text-[#3ae51d]">{bannerData?.[2]?.data}</span></h1></div>
            <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 relative">
             {poster && (
            <Image
            src={poster}
            alt="bannerimage"
            fill
            className="object-contain"
            />
             )}
            
            </div>

            
        </section>

    );
};

export default AboutBanner;