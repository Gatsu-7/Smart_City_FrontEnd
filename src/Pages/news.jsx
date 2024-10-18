import React from "react";

const newsData = [
  {
    title: "New Traffic Management Initiative Launched",
    date: "October 10, 2024",
    description:
      "City officials have introduced a new initiative to improve traffic flow and reduce congestion across major routes.",
  },
  {
    title: "Air Quality Report Released",
    date: "October 5, 2024",
    description:
      "The latest report shows significant improvements in air quality due to recent policies and community efforts.",
  },
  {
    title: "Community Meeting on Water Conservation",
    date: "September 30, 2024",
    description:
      "Join us for a community meeting to discuss strategies for water conservation and sustainable practices.",
  },
];

const NewsAndUpdatesSection = () => {
  return (
    <section className="bg-gray-800 text-white py-14">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          News and Updates
        </h2>
        <div className="space-y-6">
          {newsData.map((news, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{news.title}</h3>
              <p className="text-gray-400">{news.date}</p>
              <p className="mt-2">{news.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsAndUpdatesSection;
