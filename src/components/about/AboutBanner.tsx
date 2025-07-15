"use client";

import Image from "next/image";
import React from "react";

import Navbar from "../home/Navbar";

type ContentItem = {
  type: "text" | "image";
  data: string;
};

interface BannerSectionProps {
  bannerData: ContentItem[];
}

const AboutBanner: React.FC<BannerSectionProps> = ({ bannerData }) => {
  const bannerimage = bannerData?.[0]?.data;
  const poster = bannerData?.[3]?.data;

  return (
    <section
      style={{
        backgroundImage: `url(${bannerimage})`,
      }}
      className="relative bg-black bg-cover bg-no-repeat bg-center border-t-4"
    >
      {/* Top bars */}
      <div className="absolute top-0 left-0 w-full h-[50px] bg-black z-20" />
      <div className="absolute top-[50px] left-0 w-full h-[3px] bg-green-500 z-30" />

      {/* Content Wrapper */}
      <div className="relative z-40 flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-10 lg:px-24 xl:px-36 py-20">
        {/* Navbar */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <Navbar />
        </div>

        {/* Heading Text */}
        <div className="w-full md:w-1/3 text-center md:text-left mt-[25px] sm:mt-[50px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold">
            {bannerData?.[1]?.data}
            <span className="text-[#3ae51d]">{bannerData?.[2]?.data}</span>
          </h1>
        </div>

        {/* Image */}
        {poster && (
          <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 relative">
            <Image
              src={poster}
              alt="bannerimage"
              fill
              className="object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutBanner;
