import Image from "next/image";
import { MdEdit } from "react-icons/md";
import { HiBriefcase } from "react-icons/hi";
import { BsShieldCheck } from "react-icons/bs";
import LaptopImg from '../../../public/images/laptopMen.png';

const Career = () => {
  return (
    <section className="bg-[#06110B] py-10 px-4 md:px-16 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Text & Profile */}
        <div className="flex items-center gap-4">
          <Image
            src={LaptopImg}
            alt="Data Analyst"
            width={100}
            height={100}
            className="w-24 h-24 object-contain"
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold">
              AnalytixLabs for Your Career
            </h1>
            <p className="mt-2 text-lg font-bold">Jane Doe</p>
            <p className="text-sm text-gray-300">Data Analyst</p>
          </div>
        </div>

        {/* Right: Icons */}
        <div className="flex gap-6 justify-center md:justify-end">
          <div className="bg-yellow-400 rounded-full p-3">
            <MdEdit className="text-black" size={28} />
          </div>
          <div className="bg-indigo-400 rounded-full p-3">
            <HiBriefcase className="text-white" size={28} />
          </div>
          <div className="bg-green-400 rounded-full p-3">
            <BsShieldCheck className="text-white" size={28} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
