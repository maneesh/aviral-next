'use client';

import Image from 'next/image';
import React from 'react';
import { BiSolidPlaneAlt } from 'react-icons/bi';
import { FaCheckCircle } from 'react-icons/fa';
import { IoSettings } from 'react-icons/io5';

interface CourseContentItem {
  type: 'text' | 'image';
  data: string;
  name?: string;
}

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function CoursePage({ data }: { data: CourseContentItem[] }) {
  // Updated: fall back to first image if named one is missing
  const leftSideImg =
    data.find(item => item.type === 'image' && item.name === 'left')?.data ?? '';
  const rightSideImg =
    data.find(item => item.type === 'image' && item.name === 'right')?.data ?? '';
  const learnImage =
    data.find(item => item.type === 'image' && item.name === 'learn')?.data ??
    data.find(item => item.type === 'image')?.data ?? '';

  // Helper to validate image source
  const isValidImageSrc = (src: string): boolean =>
    typeof src === 'string' && (src.startsWith('/') || src.startsWith('http'));

  // Get icon based on benefit title
  const getIconByTitle = (title: string): React.ReactNode => {
    const lower = title.toLowerCase();
    if (lower.includes('career') || lower.includes('growth')) return <BiSolidPlaneAlt />;
    if (lower.includes('instruction') || lower.includes('settings')) return <IoSettings />;
    if (lower.includes('hands-on') || lower.includes('project')) return <IoSettings />;
    return <IoSettings />;
  };

  // Extract heading by text match
  const getHeading = (title: string): string =>
    data.find(item => item.type === 'text' && item.data === title)?.data ?? title;

  const headingLearn = getHeading('What You will Learn');
  const headingOverview = getHeading('Course Overview');
  const headingBenefits = getHeading('Key Benefits');

  // Extract learn points
  const learnPoints: string[] = data
    .filter(item => item.type === 'text' && !item.name)
    .filter(
      item =>
        ![headingLearn, headingOverview, headingBenefits].includes(item.data) &&
        !item.data.includes('Gain expertise')
    )
    .map(item => item.data);

  // Course overview paragraph
  const courseOverview =
    data.find(
      item =>
        item.type === 'text' &&
        !item.name &&
        item.data?.includes('Gain expertise')
    )?.data ?? '';

  // Extract benefits
  const benefits: Benefit[] = data
    .filter(item => item.type === 'text' && item.name)
    .map(item => {
      if (!item.name) return null;
      const icon = getIconByTitle(item.name);
      return {
        icon,
        title: item.name,
        description: item.data,
      };
    })
    .filter((b): b is Benefit => b !== null);

  return (
    <div className="min-h-screen bg-black text-white py-10 relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute left-0 bottom-0 z-0 hidden lg:block">
        {isValidImageSrc(leftSideImg) && (
          <Image src={leftSideImg} alt="left glow" width={100} height={100} />
        )}
      </div>
      <div className="absolute right-0 bottom-0 z-0 hidden lg:block">
        {isValidImageSrc(rightSideImg) && (
          <Image src={rightSideImg} alt="right glow" width={100} height={100} />
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-20">
        {/* Learn Section */}
        <div className="flex flex-col md:flex-row items-start gap-10">
          {isValidImageSrc(learnImage) && (
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <Image
                src={learnImage}
                alt="Robot learning illustration"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          )}

          {headingLearn && learnPoints.length > 0 && (
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-6">
                {headingLearn}
              </h2>
              <ul className="space-y-4 mb-8">
                {learnPoints.slice(0, 4).map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="text-green-400 mt-1">
                      <FaCheckCircle />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Overview Section */}
        {headingOverview && courseOverview && (
          <div className="w-full">
            <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-4">
              {headingOverview}
            </h3>
            <p className="text-gray-300">{courseOverview}</p>
          </div>
        )}

        {/* Benefits Section */}
        {headingBenefits && benefits.length > 0 && (
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
        )}
      </div>
    </div>
  );
}
