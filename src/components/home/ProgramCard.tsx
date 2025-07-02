"use client";

import { FC, ReactNode } from "react";

interface ProgramCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  styleType?: "top" | "bottom";
  iconColor?: string;
  textColor?: string;
}

const ProgramCard: FC<ProgramCardProps> = ({
  icon,
  title,
  description,
  styleType = "top",
  iconColor = "text-white",
  textColor = "text-white",
}) => {
  const paddingTop = styleType === "top" ? "pt-6" : "pt-4";
  const paddingBottom = styleType === "bottom" ? "pb-6" : "pb-4";

  return (
    <div
      className={`relative bg-black rounded-lg text-center px-4 ${paddingTop} ${paddingBottom}`}
    >
      {/* Border styles */}
      {styleType === "top" ? (
        <>
          <div className="absolute top-0 left-0 w-full h-1 bg-green-500 rounded-t-lg shadow-md" />
          <div className="absolute top-0 left-0 h-1/2 w-1 bg-green-500 rounded-tl-lg shadow-md translate-y-1" />
          <div className="absolute top-0 right-0 h-1/2 w-1 bg-green-500 rounded-tr-lg shadow-md translate-y-1" />
        </>
      ) : (
        <>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 rounded-b-lg shadow-md" />
          <div className="absolute bottom-0 left-0 h-1/2 w-1 bg-green-500 rounded-bl-lg shadow-md -translate-y-1" />
          <div className="absolute bottom-0 right-0 h-1/2 w-1 bg-green-500 rounded-br-lg shadow-md -translate-y-1" />
        </>
      )}

      {/* Card content */}
      <div className={`text-3xl mb-2 flex justify-center ${iconColor}`}>{icon}</div>
      <h3 className={`font-bold ${textColor}`}>{title}</h3>
      <p className={`text-sm mt-1 ${textColor}`}>{description}</p>
    </div>
  );
};

export default ProgramCard;
