import React from "react";

const faqsData = [
  {
    question: "How can I report an issue in my neighborhood?",
    answer:
      "You can report issues through our mobile app or website. We encourage citizen engagement.",
  },
  {
    question: "How does the traffic management system work?",
    answer:
      "Our system uses real-time data to monitor traffic conditions and optimize signal timings.",
  },
  {
    question: "What data is collected by the air quality monitors?",
    answer:
      "We monitor various pollutants, including PM2.5, PM10, CO2, and more, to assess air quality.",
  },
];

const FAQsSection = () => {
  return (
    <section className="bg-gray-800 text-white py-24">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqsData.map((faq, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <p className="mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
