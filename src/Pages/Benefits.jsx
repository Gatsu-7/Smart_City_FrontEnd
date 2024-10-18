import React from "react";
import eco from "../assets/eco-earth.gif";
import citizen from "../assets/citizen.gif";
import monitor from "../assets/monitor.gif";
import effe from "../assets/efficiency.gif";

const benefitsData = [
  {
    title: "Improved Efficiency",
    description:
      "Utilize data-driven insights to optimize city operations and services.",
    img: effe,
  },
  {
    title: "Enhanced Sustainability",
    description:
      "Implement solutions that promote sustainable practices and reduce waste.",
    img: eco,
  },
  {
    title: "Citizen Engagement",
    description:
      "Empower citizens to participate in urban management through feedback and reporting.",
    img: citizen,
  },
  {
    title: "Real-time Monitoring",
    description:
      "Access real-time data for effective decision-making and timely responses.",
    img: monitor,
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-gray-900 text-white py-24">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-6xl font-bold text-center mb-20">
          <span className="text-blue-500 mb-2 border-b-4 rounded-lg text-7xl border-white max-sm:text-4xl">
            Benefits
          </span>{" "}
          We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={benefit.img}
                  alt={`${benefit.title}`}
                  className="rounded-lg w-[100px] h-[100px]"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-black">
                {benefit.title}
              </h3>
              <p className="text-center text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
