// import React from "react";

// const faqsData = [
//   {
//     question: "How can I report an issue in my neighborhood?",
//     answer:
//       "You can report issues through our mobile app or website. We encourage citizen engagement.",
//   },
//   {
//     question: "How does the traffic management system work?",
//     answer:
//       "Our system uses real-time data to monitor traffic conditions and optimize signal timings.",
//   },
//   {
//     question: "What data is collected by the air quality monitors?",
//     answer:
//       "We monitor various pollutants, including PM2.5, PM10, CO2, and more, to assess air quality.",
//   },
// ];

// const FAQsSection = () => {
//   return (
//     <section className="bg-gray-800 text-white py-24">
//       <div className="container mx-auto px-5">
//         <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
//           Frequently Asked Questions
//         </h2>
//         <div className="space-y-6">
//           {faqsData.map((faq, index) => (
//             <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold">{faq.question}</h3>
//               <p className="mt-2">{faq.answer}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQsSection;
import React, { useState } from "react";

const FAQ = () => {
  const faqData = [
    {
      question: "What is the Smart City Management platform?",
      answer:
        "The Smart City Management platform is an open platform designed to help cities optimize urban management by using data, AI, and citizen reports to address challenges such as traffic, pollution, water management, and more.",
    },
    {
      question: "How does the platform improve traffic management?",
      answer:
        "The platform collects real-time traffic data from various sources, including public databases and citizen reports, to provide insights that help optimize traffic flow, reduce congestion, and assist city planners in managing infrastructure.",
    },
    {
      question: "How can citizens contribute to the platform?",
      answer:
        "Citizens can contribute by submitting reports on traffic conditions, pollution levels, or other urban challenges through the platform's interface. Their input helps provide more accurate data and improve city services.",
    },
    {
      question: "What kind of data is used to monitor pollution levels?",
      answer:
        "The platform gathers pollution data from public and governmental sources, including air quality monitoring stations and environmental reports. It provides real-time alerts when pollution levels exceed safety thresholds.",
    },
    {
      question: "How does the system help in disaster management?",
      answer:
        "The platform integrates with local emergency services to issue real-time alerts for natural disasters such as floods, fires, or earthquakes. It guides citizens on safety measures and helps authorities coordinate emergency responses.",
    },
    {
      question: "Is the platform secure and private?",
      answer:
        "Yes, the platform follows strict security protocols to protect user data and ensure privacy. It complies with local and international data protection laws to maintain the confidentiality and integrity of all collected data.",
    },

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

  // State to track the currently open FAQ item
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function to open/close the clicked FAQ
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex mx-auto px-24 py-8 max-md:flex-col max-md:px-4   bg-gray-900">
      <div className="md:w-1/3 p-4 text-sm">
        <div className="sticky top-0 py-12 max-md:py-4">
          <h2 className="text-6xl text-white mb-16 font-bold max-md:text-4xl">
            Frequently Asked{" "}
            <span className="text-blue-500 border-b-4 border-white rounded-lg">
              Questions{" "}
            </span>
          </h2>
          <input
            type="search"
            placeholder="Search"
            className="bg-white w-[80%] h-10 px-5 rounded-full text-sm focus:outline-none max-md:w-full"
          />
          <div className="mt-8 flex flex-col max-md:justify-center max-md:items-center">
            <h3 className="text-3xl font-semibold text-white mb-4">
              Related Topics
            </h3>
            <ul className="mt-4">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 text-xl  "
                >
                  Traffic Management
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 text-xl "
                >
                  Water Management
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 text-xl "
                >
                  Pollution Management
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="md:w-2/3 py-12 max-md:py-2">
        {faqData.map((item, index) => (
          <div key={index} className="item px-6 py-6">
            <a
              href="#"
              className="flex items-center justify-between"
              onClick={(e) => {
                e.preventDefault();
                toggleFAQ(index);
              }}
            >
              <h4
                className={
                  openIndex === index
                    ? "text-blue-500 font-bold text-3xl max-md:text-2xl"
                    : " text-blue-300 font-semibold text-2xl max-md:text-xl"
                }
              >
                {item.question}
              </h4>
              <svg
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  openIndex === index ? "transform rotate-180" : ""
                }`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
            {openIndex === index && (
              <div className="mt-3 text-gray-100">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
