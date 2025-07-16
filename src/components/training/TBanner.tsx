"use client";

import Image from "next/image";

import robotBannerImgAbout from "../../../public/images/aboutRobotImageBanner.png";

interface ContentItem {
  type: 'text' | 'image';
  data: string;
  name?: string;
}

const TBanner = ({ data }: { data: ContentItem[] }) => {
  if (!Array.isArray(data)) return null;

  return (
    <section className="relative bg-black bg-cover bg-no-repeat bg-center border-t-4">
      <div
        className="absolute top-0 left-0 w-full h-[50px] bg-black z-20"
        style={{
          background: "linear-gradient(to bottom right, rgba(3, 3, 3, 0.8), rgba(28,31,31,0.8))",
        }}
      />

      <Image
        src={data[0]?.data || "/images/bannerImg.png"}
        alt="Hero Background"
        fill
        className="object-cover z-10 opacity-60"
        priority
      />

      <div className="absolute top-0 left-0 w-full h-[50px] bg-black z-20" />
      <div className="absolute top-[50px] left-0 w-full h-[3px] bg-green-500 z-30" />

      <div className="relative z-40 flex flex-col md:flex-row items-center justify-center gap-6 max-w-5xl mx-auto h-full px-4 py-10">
        <div className="w-full md:w-1/4 flex justify-center md:justify-start mt-[50px] md:mt-[50px]">

      
        </div>

        {/* Hero Text */}
        <div className="w-full md:w-2/4 text-center md:text-left mt-[70px]">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            <span className="text-white">{data[1]?.data}</span>
            <span className="text-green-500">{data[2]?.data}</span>{" "}
            <span className="text-white">{data[3]?.data}</span>
          </h1>
          <p className="text-gray-300 mt-4 max-w-md text-sm md:text-base mx-auto md:mx-0">
            {data[4]?.data}<br />
            {data[5]?.data}
          </p>
        </div>

        {/* Robot Image */}
        <div className="w-full md:w-1/4 flex justify-center mt-6 md:mt-[70px]">
          <Image
            src={data[6]?.data || robotBannerImgAbout}
            alt="Top Robot"
            width={220}
            height={220}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default TBanner;
