import React from "react";
import { Link } from "react-router-dom";
import traffic from "../assets/traffic-lights.gif";
import pollution from "../assets/air-pollution.gif";
import water from "../assets/water-saving.gif";
import forest from "../assets/forest.gif";
import disease from "../assets/disease.gif";
import engage from "../assets/engage.gif";

const KeyFeatures = () => {
  const features = [
    {
      title: "Traffic Management",
      img: traffic,
      description: "Optimize traffic flow and reduce congestion in real-time.",
      link: "/traffic-management",
    },
    {
      title: "Pollution Monitoring",
      img: pollution,
      description: "Monitor air quality and pollution levels across the city.",
      link: "/pollution-monitoring",
    },
    {
      title: "Water Management",
      img: water,
      description:
        "Ensure efficient water usage and management for sustainable resources.",
      link: "/water-management",
    },
    {
      title: "Disaster Management",
      img: forest,
      description:
        "Provide timely alerts and coordination during natural disasters.",
      link: "/disaster-management",
    },
    {
      title: "Disease Outbreak Tracker",
      img: disease,
      description:
        "Track disease spread and provide health alerts to citizens.",
      link: "/disease-outbreak-tracker",
    },
    {
      title: "Citizen Engagement Platform",
      img: engage,
      description:
        "A user-friendly interface for citizens to report issues, provide feedback, and access city services and information.",
      link: "/citizen-engagement",
    },
  ];

  return (
    <section className="bg-gray-900 py-6">
      <div className="container mx-auto px-4 py-2 text-center">
        <h2 className="text-4xl md:text-6xl text-gray-100 font-bold mb-16">
          Key{" "}
          <span className="text-blue-500 border-b-4 rounded-lg text-7xl border-white">
            Features{" "}
          </span>{" "}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={feature.img}
                  alt={`${feature.title}`}
                  className="rounded-lg w-[100px] h-[100px]"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700 mb-4">{feature.description}</p>
              <Link
                to={feature.link}
                className="text-blue-500 hover:text-blue-600 font-bold transition duration-300"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
