'use client';

import React from 'react';
import Image from 'next/image';
import learnRobotImg from '../../../public/images/learnRobotImg.png';
import leftSideImg from '../../../public/images/trainingLeft.png';
import rightSideImg from '../../../public/images/trainingRightImg.png';
import { FaCheckCircle } from 'react-icons/fa';

const benefits = [
  {
    icon: '🤖',
    title: 'Expert Instruction',
    description: 'Create advanced projects under guidance by the top 1% in the latest technologies.',
  },
  {
    icon: '🚀',
    title: 'Career Growth',
    description: 'Boost your career prospects with real-world skills and strong mentorship.',
  },
  {
    icon: '🛠️',
    title: 'Hands-On Projects',
    description: 'Work on practical projects that mirror industry needs and challenges.',
  },
];

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-black text-white py-10 relative overflow-hidden">
      {/* Decorative Background Grids */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="hidden md:block absolute left-0 top-0 h-full w-1/4 bg-[url('/grid-left.png')] bg-no-repeat bg-contain" />
        <div className="hidden md:block absolute right-0 top-0 h-full w-1/4 bg-[url('/grid-right.png')] bg-no-repeat bg-contain" />
      </div>

      {/* Side Glow Images */}
      <div className="absolute left-0 bottom-0 z-0">
        <Image src={leftSideImg} alt="left glow" width={100} height={100} />
      </div>
      <div className="absolute right-0 bottom-0 z-0">
        <Image src={rightSideImg} alt="right glow" width={100} height={100} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-20">
        {/* What You Will Learn Section */}
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <Image
              src={learnRobotImg}
              alt="Robot learning illustration"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-6">
              What You Will Learn
            </h2>
            <ul className="space-y-4">
              {Array(4)
                .fill(0)
                .map((_, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="text-green-400 mt-1">
                      <FaCheckCircle />
                    </span>
                    <span>
                      Create advanced projects under guidance by the top 1%.
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Course Overview Section */}
        <div className="w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-4">
            Course Overview
          </h3>
          <p className="text-gray-300">
            Create advanced projects under guidance by the top 1%. Gain expertise
            in the latest technologies through hands-on experience. Secure your
            desired position at premier tech companies.
          </p>
        </div>

        {/* Key Benefits Section */}
        <div className="w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-8">
            Key Benefits
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="border border-green-400 p-6 rounded-lg hover:shadow-lg transition"
              >
                <div className="flex justify-center text-white text-3xl mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-semibold text-green-400 mb-2 text-center">
                  {benefit.title}
                </h4>
                <p className="text-gray-300 text-sm text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
