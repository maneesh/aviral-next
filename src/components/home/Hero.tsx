"use client";

import Image from "next/image";

import Navbar from "./Navbar";

interface HeroProps {
  data: { type: string; data: string }[];
}

const Hero = ({ data }: HeroProps) => {
  const image = data.find((item) => item.type === "image")?.data || "";
  const texts = data.filter((item) => item.type === "text").map((item) => item.data);

  const [title1, title2, subtitle, para1, para2, para3, buttonText] = texts;

  return (
    <section className="relative w-full min-h-screen overflow-hidden overflow-x-hidden z-10">
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
        src={image || "/images/bannerImg.png"}
        alt="Hero Background"
        fill
        className="object-cover z-10 opacity-60"
        priority
      />

      {/* Black top section above green line */}
      <div className="absolute top-0 left-0 w-full h-[50px] bg-black z-20" />

      {/* Green line */}
      <div className="absolute top-[50px] left-0 w-full h-[3px] bg-green-500 z-30" />

      {/* Content */}
      <div className="relative z-40 flex flex-col md:flex-row items-center justify-center gap-8 px-4 sm:px-6 pt-10 min-h-screen text-white max-w-6xl mx-auto">
        {/* Navbar */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start pt-6 md:pt-0">
          <Navbar />
        </div>

        {/* Hero text */}
        <div className="w-full md:w-2/3 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            {title1}
            <span className="text-green-500">{title2}</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-green-500 mb-4">
            {subtitle}
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-6">
            {para1} <br />
            {para2}
            <br />
            {para3}
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-2 rounded-full transition">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
