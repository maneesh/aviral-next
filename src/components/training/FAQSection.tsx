import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

export default function FAQSection() {
  const faqs = [
    {
      question: 'What is the duration of the course ?',
      answer:
        'Create advanced projects under guidance by the top 1% Gain expertise in the latest technologies through hands-on. Secure your desired position at premier tech companies. Create advanced projects under guidance by the top 1% Gain expertise in the latest technologies through hands-on. Secure your desired position at premier tech companies.'
    },
    {
      question: 'Do I need prior exprince in AI',
      answer:
        'Create advanced projects under guidance by the top 1% Gain expertise in the latest technologies through hands-on. Secure your desired position at premier tech companies. Create advanced projects under guidance by the top 1% Gain expertise in the latest technologies through hands-on. Secure your desired position at premier tech companies.'
    }
  ];

  return (
    <div className="bg-black text-white px-4 md:px-20 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        <div className="space-y-10">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <div className="flex items-start gap-4">
                <span className="text-green-400 mt-0.5 mr-2"><FaCheckCircle /></span>
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
