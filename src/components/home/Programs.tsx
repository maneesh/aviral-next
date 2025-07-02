"use client";

import ProgramCard from "./ProgramCard";
import {
  FaDatabase,
  FaChartBar,
  FaRobot,
  FaChalkboardTeacher,
} from "react-icons/fa";

export default function Program() {
  return (
    <section className="relative bg-black w-full pt-40 pb-12 px-6 md:px-20 overflow-visible z-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('/images/backgroundImg.png')" }}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Floating Green Box */}
        <div className="border-2 border-green-500 rounded-lg p-6 bg-black bg-opacity-90 relative -mt-60 z-30 shadow-2xl">
          <h2 className="text-white text-3xl font-bold mb-10">Our Programs</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <ProgramCard
              icon={<FaDatabase />}
              title="Data Science"
              description="Create advanced projects under guidance by top 1% experts in modern tools."
              styleType="top"
              iconColor="text-green-500"
            />

            <ProgramCard
              icon={<FaChartBar />}
              title="Data Analytics"
              description="Get mentored on data storytelling and insights-driven strategy."
              styleType="bottom"
              iconColor="text-white"
              textColor="text-green-500"
            />

            <ProgramCard
              icon={<FaRobot />}
              title="Machine Learning"
              description="Explore ML workflows with real datasets and cutting-edge tools."
              styleType="top"
              iconColor="text-green-500"
            />

            <ProgramCard
              icon={<FaChalkboardTeacher />}
              title="Training"
              description="Get hands-on with curated content and mentor support."
              styleType="bottom"
              iconColor="text-white"
              textColor="text-green-500"
            />

          </div>
        </div>
      </div>
    </section>
  );
}
