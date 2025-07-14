import { FaCheckCircle } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="bg-[#0B0E0D] text-white py-16 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-green-500 text-2xl font-bold mb-10 text-center">
          Testimonials
        </h2>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Card 1 */}
          <div className="bg-white text-black p-6 rounded-lg shadow-md w-full max-w-xs">
            <h3 className="text-lg font-bold mb-2">Lorem Ipsum</h3>
            <p className="text-xl font-semibold mb-4">
              <span className="text-black">Up to </span>
              <span className="text-green-600">00%</span>
              <br />
              <span className="text-black">Placement Assured</span>
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2 text-gray-700">
                <FaCheckCircle className="text-green-600 mt-1" />
                Create advanced projects under guidance
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <FaCheckCircle className="text-green-600 mt-1" />
                by the Calm expertise in the latest technologies
              </li>
            </ul>
          </div>

          {/* Arrow */}
          <div className="text-green-400 text-3xl hidden md:block">→</div>

          {/* Card 2 */}
          <div className="bg-white text-black p-6 rounded-lg shadow-md w-full max-w-xs">
            <h3 className="text-lg font-bold mb-2">Lorem Ipsum</h3>
            <p className="text-xl font-semibold mb-4">
              <span className="text-green-600">00%</span>
              <br />
              <span className="text-black">Hike</span>
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2 text-gray-700">
                <FaCheckCircle className="text-green-600 mt-1" />
                Create advanced projects under guidance
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <FaCheckCircle className="text-green-600 mt-1" />
                by the Calm expertise in the latest technologies
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
