"use client";

import Image from "next/image";
import robotBannerImgAbout from '../../../public/images/aboutRobotImageBanner.png';

const TBanner = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden z-10">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom right, rgba(3, 3, 3, 0.8), rgba(28,31,31,0.8))",
        }}
      />

      {/* Background image */}
      <Image
        src="/images/bannerImg.png"
        alt="Hero Background"
        fill
        className="object-cover z-10 opacity-60"
        priority
      />

      {/* Green line */}
      <div className="absolute top-[50px] left-0 w-full h-[3px] bg-green-500 z-30" />

      {/* Top Robot and Branding */}
      <div className="relative z-20 flex flex-col md:flex-row mx-auto items-center justify-center gap-12 max-w-7xl px-12 mx-auto py-8 h-full">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold">
            aviral<span className="text-green-500">ai</span>{" "}
            <span className="text-white">Traning</span>
          </h1>
          <p className="text-gray-300 mt-2 max-w-md text-sm md:text-base">
            Create advanced projects under guidance by the top 1%.<br />
            Gain technologies through hands-on learning. Secure your desired future.
          </p>
        </div>
        <div className="md:mt-0 md:w-1/2 flex justify-center">
          <Image
            src={robotBannerImgAbout}
            alt="Top Robot"
            width={150}
            height={150}
            className="mx-auto"
          />
        </div>
      </div>


    </section>
  );
};

export default TBanner;
