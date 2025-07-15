'use client';

import Image from 'next/image';
import React from 'react';
import { BiSolidPlaneAlt } from 'react-icons/bi';
import { FaCheckCircle } from 'react-icons/fa';
import { IoSettings } from 'react-icons/io5';

import leftSideImg from '../../../public/images/trainingLeft.png';
import rightSideImg from '../../../public/images/trainingRightImg.png';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function CoursePage({ data }: { data: any[] }) {

  // Auto-pick icon based on title
  const getIconByTitle = (title: string): React.ReactNode => {
    const lower = title.toLowerCase();
    if (lower.includes('career') || lower.includes('growth')) return <BiSolidPlaneAlt />;
    if (lower.includes('instruction') || lower.includes('settings')) return <IoSettings />;
    if (lower.includes('hands-on') || lower.includes('project')) return <IoSettings />;
    return <IoSettings />; // default
  };

  // Get section headings
  const getHeading = (title: string): string =>
    data.find(item => item.type === 'text' && item.data === title)?.data ?? title;

  const headingLearn = getHeading('What You will Learn');
  const headingOverview = getHeading('Course Overview');
  const headingBenefits = getHeading('Key Benefits');

  // Get image
  const learnImage =
    data.find(item => item.type === 'image')?.data ?? '/images/learnRobotImg.png';
  // Learn points (exclude headings)
  const learnPoints: string[] = data
    .filter(item => item.type === 'text' && !item.name)
    .filter(
      item =>
        ![headingLearn, headingOverview, headingBenefits].includes(item.data) &&
        !item.data.includes('Gain expertise')
    )
    .map(item => item.data);

  // Course overview text
  const courseOverview =
    data.find(
      item =>
        item.type === 'text' &&
        !item.name &&
        item.data?.includes('Gain expertise')
    )?.data ?? '';

  // Key benefits
  const benefits: Benefit[] = data
    .filter(item => item.type === 'text' && item.name)
    .map(item => {
      const icon = getIconByTitle(item.name);
      return {
        icon,
        title: item.name,
        description: item.data,
      };
    });

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
              src={learnImage}
              alt="Robot learning illustration"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-6">
              {headingLearn}
            </h2>
            <ul className="space-y-4">
              {learnPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="text-green-400 mt-1">
                    <FaCheckCircle />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Course Overview Section */}
        <div className="w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-4">
            {headingOverview}
          </h3>
          <p className="text-gray-300">{courseOverview}</p>
        </div>

        {/* Key Benefits Section */}
        <div className="w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-8">
            {headingBenefits}
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
