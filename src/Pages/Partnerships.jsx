import React from "react";

const partnershipsData = [
  "Local Government Agencies",
  "Environmental NGOs",
  "Educational Institutions",
  "Technology Providers",
  "Community Organizations",
];

const PartnershipsSection = () => {
  return (
    <section className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Partnerships
        </h2>
        <ul className="list-disc list-inside space-y-2">
          {partnershipsData.map((partner, index) => (
            <li key={index} className="text-lg md:text-xl">
              {partner}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PartnershipsSection;
