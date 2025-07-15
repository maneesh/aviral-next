"use client";

import ProgramCard from "./ProgramCard";
import {
  FaDatabase,
  FaChartBar,
  FaRobot,
  FaChalkboardTeacher,
} from "react-icons/fa";

const ICON_MAP: Record<string, JSX.Element> = {
  "Data Science": <FaDatabase />,
  "Data Analytics": <FaChartBar />,
  "Machine Learning": <FaRobot />,
  "Training": <FaChalkboardTeacher />,
};

export default function Program({ data }: { data: any[] }) {
  
  // Extract background and heading
  const background = data.find((item) => item.type === "image")?.data || "";
  const heading = data.find((item) => item.type === "text")?.data || "Our Programs";

  // Extract text items and pair them (title + description)
  const textItems = data.filter((item) => item.type === "text").slice(1); 

  const programs = [];
  for (let i = 0; i < textItems.length; i += 2) {
    programs.push({
      title: textItems[i]?.data,
      description: textItems[i + 1]?.data,
      icon: ICON_MAP[textItems[i]?.data] || <FaDatabase />,
    });
  }

  return (
    <section className="relative bg-black w-full pt-40 pb-12 px-6 md:px-20 overflow-visible z-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url('${background}')` }}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Floating Green Box */}
        <div className="border-2 border-green-500 rounded-lg p-6 bg-black bg-opacity-90 relative -mt-60 z-30 shadow-2xl">
          <h2 className="text-white text-3xl font-bold mb-10">{heading}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <ProgramCard
                key={index}
                icon={program.icon}
                title={program.title}
                description={program.description}
                styleType={index % 2 === 0 ? "top" : "bottom"}
                iconColor={index % 2 === 0 ? "text-green-500" : "text-white"}
                textColor={index % 2 === 0 ? undefined : "text-green-500"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
