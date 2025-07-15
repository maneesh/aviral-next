import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

interface RawItem {
  type: string;
  data: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  data: RawItem[];
}

export default function FAQSection({ data }: FAQSectionProps) {
  const heading = data.find(item => item.data === 'Frequently Asked Questions')?.data || 'FAQs';
  const contentData = data.filter(item => item.data !== heading);
  const faqs: FAQ[] = [];
  for (let i = 0; i < contentData.length; i += 2) {
    const question = contentData[i]?.data;
    const answer = contentData[i + 1]?.data;

    if (question && answer) {
      faqs.push({ question, answer });
    }
  }

  return (
    <div className="bg-black text-white px-4 md:px-20 py-16">
      <div className="max-w-5xl mx-auto">
        {/* ✅ Dynamic Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {heading}
        </h2>

        <div className="space-y-10">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <div className="flex items-start gap-4">
                <span className="text-green-400 mt-0.5 mr-2">
                  <FaCheckCircle />
                </span>
                <h3 className="text-xl md:text-2xl text-green-400 font-semibold">
                  {faq.question}
                </h3>
              </div>
              <p className="ml-8 mt-2 text-gray-300 text-sm">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
