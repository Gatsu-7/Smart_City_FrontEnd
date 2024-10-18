import React from "react";

const stepsData = [
  {
    number: 1,
    title: "Data Collection",
    description:
      "Gather data from various sources, including sensors, citizen reports, and public databases to create a comprehensive overview of city operations.",
  },
  {
    number: 2,
    title: "Data Integration",
    description:
      "Integrate data from multiple sources to create a unified platform, enabling real-time access and analysis for city officials and decision-makers.",
  },
  {
    number: 3,
    title: "Data Analysis",
    description:
      "Utilize AI models and analytics tools to analyze the collected data, identifying trends, patterns, and insights that can drive urban management decisions.",
  },
  {
    number: 4,
    title: "Predictive Modeling",
    description:
      "Leverage predictive analytics to forecast potential urban challenges, such as traffic congestion or pollution spikes, allowing proactive measures to be implemented.",
  },
  {
    number: 5,
    title: "Decision Making",
    description:
      "Empower city officials with data-driven insights to make informed decisions regarding resource allocation, infrastructure development, and public services.",
  },
  {
    number: 6,
    title: "Feedback Loop",
    description:
      "Encourage citizen engagement and feedback to continuously refine urban management strategies, ensuring that the system evolves with community needs and priorities.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-6xl font-bold text-center mb-20 ">
          How It{" "}
          <span className="text-blue-500 border-b-4 rounded-lg text-7xl border-white">
            {" "}
            Works{" "}
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stepsData.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl font-bold text-center text-blue-500 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black text-center">
                {step.title}
              </h3>
              <p className="text-center text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
