"use client";

import Image from "next/image";

import Navbar from "../home/Navbar";

interface HowItWorksItem {
  type: "text" | "image";
  data: string;
}

interface HowItWorksBannerProps {
  howItWorks: HowItWorksItem[];
}

const HowItWorksBanner = ({ howItWorks }: HowItWorksBannerProps) => {
  const howWorkBackground = howItWorks?.[0]?.data || "";
  const howWorkBrainLogo = howItWorks?.[6]?.data || "";

  return (
    <section className="relative bg-black bg-cover bg-no-repeat bg-center border-t-4">
      {/* Gradient Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-[50px] bg-black z-20"
        style={{
          background: "linear-gradient(to bottom right, rgba(3, 3, 3, 0.8), rgba(28, 31, 31, 0.8))",
        }}
      />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center z-0"
        style={{ backgroundImage: `url(${howWorkBackground})` }}
      />

      {/* Top Black Strip */}
      <div className="absolute top-0 left-0 w-full h-[50px] bg-black z-20" />
      {/* Green Border Below Black Strip */}
      <div className="absolute top-[50px] left-0 w-full h-[3px] bg-green-500 z-30" />

      {/* Content Container */}
      <div className="relative z-40 flex flex-col md:flex-row items-center justify-center gap-6 max-w-5xl mx-auto h-full px-4 py-10">
        {/* Optional Navbar (same as TBanner) */}
        <div className="w-full md:w-1/4 flex justify-center md:justify-start mt-[50px]">
          <Navbar />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/4 text-center md:text-left mt-[50px]">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            <span>{howItWorks?.[1]?.data}</span>
            <span className="text-green-500"> {howItWorks?.[2]?.data}</span>{" "}
            <span>{howItWorks?.[3]?.data}</span>
          </h1>
          <p className="text-gray-300 mt-4 max-w-md text-sm md:text-base mx-auto md:mx-0">
            {howItWorks?.[4]?.data}
            <br />
            {howItWorks?.[5]?.data}
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/4 flex justify-center mt-6 md:mt-0">
          <Image
            src={howWorkBrainLogo}
            alt="How It Works"
            width={220}
            height={220}
            className="mx-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksBanner;
