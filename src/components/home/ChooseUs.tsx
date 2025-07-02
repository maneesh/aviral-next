'use client';

import React from 'react';
import Image from 'next/image';
import SecondRobotImg from '../../../public/images/secondRobot.png';
import glowLeftImg from '../../../public/images/glowLeftImg.png';
import { SiTicktick } from "react-icons/si";

const ChooseUs: React.FC = () => {
  return (
    <section className="relative bg-black w-full pt-40 pb-12 px-4 md:px-10 overflow-visible z-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('/images/backgroundImg.png')" }}
        />
      </div>

      {/* Glow Image - Right Side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 opacity-80">
        <Image
          src={glowLeftImg}
          alt="Glow Effect"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 max-w-5xl mx-auto bg-opacity-50 backdrop-blur-md rounded-lg px-6 md:px-10 py-6 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-lg">

        {/* Content Section - Now Left Side */}
        <div className="text-white max-w-md w-full md:w-2/3 space-y-3 order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-400 leading-tight">
            Why Choose Us ?
          </h2>

          <p className="flex items-start text-sm text-gray-300 leading-snug">
            <span className="text-green-400 mt-0.5 mr-2"><SiTicktick /></span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.
          </p>

          <p className="flex items-start text-sm text-gray-200 leading-snug">
            <span className="text-green-400 mt-0.5 mr-2"><SiTicktick /></span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque maxime.
          </p>

          <p className="flex items-start text-sm text-gray-200 leading-snug">
            <span className="text-green-400 mt-0.5 mr-2"><SiTicktick /></span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ullam minus.
          </p>
        </div>

        {/* Image Section - Now Right Side */}
        <div className="relative flex items-center justify-center w-full md:w-1/3 order-1 md:order-2">
          <Image
            src={SecondRobotImg}
            alt="Industry Expert"
            width={150}
            height={150}
            className="object-cover z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
