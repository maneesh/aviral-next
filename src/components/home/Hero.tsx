"use client";

import Navbar from "./Navbar";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden z-10">
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

      {/* Content */}
      <div className="relative z-40 w-full flex flex-col items-center justify-center text-center max-w-2xl mx-auto px-6 pt-10 pb-40 min-h-screen text-white">
        <Navbar />
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          aviral<span className="text-green-500">ai</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-green-500 mb-4">
          Your Learning Hub
        </h2>
        <p className="text-sm md:text-base text-gray-300 mb-6">
          Create advanced projects under guidance by the top 1% <br />
          Gain expertise in the latest technologies through hands-on training.
          <br /> Secure your desired position at...
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-2 rounded-full transition">
          Lorem
        </button>
      </div>
    </section>
  );
};

export default Hero;
