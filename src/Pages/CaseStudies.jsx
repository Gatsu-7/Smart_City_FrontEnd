import React from "react";

const caseStudiesData = [
  {
    title: "Traffic Management in City A",
    description:
      "Implemented data-driven solutions that reduced traffic congestion by 30%.",
    link: "/case-studies/city-a",
  },
  {
    title: "Pollution Monitoring in City B",
    description:
      "Developed an air quality monitoring system that improved public awareness and health outcomes.",
    link: "/case-studies/city-b",
  },
  {
    title: "Water Conservation in City C",
    description:
      "Introduced smart water management systems that decreased water wastage by 25%.",
    link: "/case-studies/city-c",
  },
  {
    title: "Disaster Management in City D",
    description:
      "Established an emergency response system that enhanced preparedness during natural disasters.",
    link: "/case-studies/city-d",
  },
  {
    title: "Waste Management in City E",
    description:
      "Implemented a smart waste management system that increased recycling rates by 40% and reduced landfill waste.",
    link: "/case-studies/city-e",
  },
  {
    title: "Smart Energy Solutions in City F",
    description:
      "Launched a smart energy management initiative that reduced energy consumption by 20% and promoted renewable energy use.",
    link: "/case-studies/city-f",
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-6xl font-bold text-center mb-12">
          Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl text-black font-semibold mb-2 text-center">
                {caseStudy.title}
              </h3>
              <p className="text-center mb-4 text-gray-700">
                {caseStudy.description}
              </p>
              <div className="text-center">
                <a
                  href={caseStudy.link}
                  className="text-blue-500 font-bold hover:text-blue-600 transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
