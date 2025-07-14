'use client';

import { FaCheckCircle } from "react-icons/fa";

interface Props {
  data: {
    type: string;
    data: string;
  }[];
}

const Testimonials: React.FC<{ data: Props['data'] }> = ({ data }) => {
  
  const texts = data.filter(item => item.type === 'text').map(item => item.data);

  const sectionTitle = texts[0] || 'Testimonials';

  // Card 1 content
  const card1 = {
    heading: texts[1] || '',
    precentageLabel: texts[2] || '',
    percentage: texts[3] || '',
    highlight: texts[4] || '',
    points: [texts[5], texts[6]].filter(Boolean),
  };

  const arrow = texts[7] || '→';

  // Card 2 content
  const card2 = {
    heading: texts[8] || '',
    percentage: texts[9] || '',
    highlight: texts[10] || '',
    points: [texts[11], texts[12]].filter(Boolean),
  };

  return (
    <section className="bg-[#0B0E0D] text-white py-16 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-green-500 text-2xl font-bold mb-10 text-center">
          {sectionTitle}
        </h2>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Card 1 */}
          <div className="bg-white text-black p-6 rounded-lg shadow-md w-full max-w-xs">
            <h3 className="text-lg font-bold mb-2">{card1.heading}</h3>
            <p className="text-xl font-semibold mb-4">
              <span className="text-black">{card1.precentageLabel} </span>
              <span className="text-green-600">{card1.percentage}</span>
              <br />
              <span className="text-black">{card1.highlight}</span>
            </p>
            <ul className="space-y-2 text-sm">
              {card1.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow */}
          {arrow && (
            <div className="text-green-400 text-3xl hidden md:block">{arrow}</div>
          )}

          {/* Card 2 */}
          <div className="bg-white text-black p-6 rounded-lg shadow-md w-full max-w-xs">
            <h3 className="text-lg font-bold mb-2">{card2.heading}</h3>
            <p className="text-xl font-semibold mb-4">
              <span className="text-green-600">{card2.percentage}</span>
              <br />
              <span className="text-black">{card2.highlight}</span>
            </p>
            <ul className="space-y-2 text-sm">
              {card2.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
