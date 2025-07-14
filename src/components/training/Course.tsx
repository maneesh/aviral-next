import React from 'react';
import Image from 'next/image';
import learnRobotImg from '../../../public/images/learnRobotImg.png';
import { FaCheckCircle } from "react-icons/fa";

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-20 py-10 relative overflow-hidden">
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="hidden md:block absolute left-0 top-0 h-full w-1/4 bg-[url('/grid-left.png')] bg-no-repeat bg-contain"></div>
        <div className="hidden md:block absolute right-0 top-0 h-full w-1/4 bg-[url('/grid-right.png')] bg-no-repeat bg-contain"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* What You Will Learn Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image src={learnRobotImg} alt="robot" width={300} height={300} className="object-contain" />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-6">What You will Learn</h2>
            <ul className="space-y-4">
              {Array(4).fill(0).map((_, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="text-green-400 mt-0.5 mr-2"><FaCheckCircle /></span>
                  <span>Create advanced projects under guidance by the top 1%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Course Overview */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-4">Course Overview</h3>
          <p className="text-gray-300 max-w-3xl">
            Create advanced projects under guidance by the top 1%. Gain expertise in the latest technologies through hands-on experience. Secure your desired position at premier tech companies.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-8">Key Benefits</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="border border-green-400 p-6 rounded-lg hover:shadow-lg transition"
              >
                <div className="flex justify-center text-white text-3xl mb-4">{benefit.icon}</div>
                <h4 className="text-xl font-semibold text-green-400 mb-2 text-center">{benefit.title}</h4>
                <p className="text-gray-300 text-sm text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}

const benefits = [
  {
    icon: '🤖',
    title: 'Expert Instruction',
    description: 'Create advanced projects under guidance by the top 1% in the latest technologies.'
  },
  {
    icon: '🚀',
    title: 'Career Growth',
    description: 'Create advanced projects under guidance by the top 1% in the latest technologies.'
  },
  {
    icon: '🛠️',
    title: 'Hands-On Projects',
    description: 'Create advanced projects under guidance by the top 1% in the latest technologies.'
  }
];
