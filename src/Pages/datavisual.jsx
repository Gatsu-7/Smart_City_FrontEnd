import React from "react";

const InteractiveDataVisualizationSection = () => {
  return (
    <section className="bg-gray-800 text-white py-24">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Interactive Data Visualization
        </h2>
        <p className="text-lg md:text-xl text-center mb-8">
          Explore our interactive data visualizations to gain insights into
          urban challenges and trends.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md transition duration-300">
            View Visualizations
          </button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDataVisualizationSection;
