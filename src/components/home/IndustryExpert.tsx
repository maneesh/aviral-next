'use client';

import Image from 'next/image';
import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

import glowLeftImg from '../../../public/images/glowLeftImg.png';

interface Props {
  title: string;
  points: string[];
  background: string;
  robotImage: string;
}

const IndustryExpert: React.FC<Props> = ({ title, points, background, robotImage }) => {
  return (
    <section className="relative bg-black w-full pt-40 pb-12 px-4 md:px-10 overflow-visible z-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url('${background}')` }}
        />
      </div>

      {/* Glow Image */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 opacity-80">
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
        {/* Robot Image */}
        <div className="relative flex items-center justify-center w-full md:w-1/3">
          {robotImage && (
            <Image
              src={robotImage}
              alt="Industry Expert"
              width={150}
              height={150}
              className="object-cover z-10"
            />
          )}
        </div>

        {/* Text Content */}
        <div className="text-white max-w-md w-full md:w-2/3 space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-400 leading-tight">
            {title}
          </h2>

          {points.map((point, i) => (
            <p key={i} className="flex items-start text-sm text-gray-300 leading-snug">
              <span className="text-green-400 mt-0.5 mr-2"><FaCheckCircle /></span>
              {point}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryExpert;
