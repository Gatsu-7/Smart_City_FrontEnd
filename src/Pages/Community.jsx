import React from "react";

const CommunityEngagementSection = () => {
  return (
    <section className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Community Engagement
        </h2>
        <p className="text-lg md:text-xl text-center mb-8">
          We believe in the power of community participation. Join us in making
          our city a better place!
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md transition duration-300">
            Get Involved
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunityEngagementSection;
