import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonialsData = [
  {
    name: "John Doe",
    position: "City Manager, City A",
    rating: 5,
    testimonial:
      "The Smart City Management System has revolutionized our approach to urban planning. We've seen significant improvements in traffic flow and air quality.",
  },
  {
    name: "Jane Smith",
    position: "Urban Planner, City B",
    rating: 4,
    testimonial:
      "Using this platform has allowed us to engage more effectively with our citizens and make data-driven decisions that truly benefit our community.",
  },
  {
    name: "Mike Johnson",
    position: "Public Health Official, City C",
    rating: 4,
    testimonial:
      "The insights provided by the system have been invaluable in tracking pollution levels and ensuring the health of our residents.",
  },
  {
    name: "Emily Davis",
    position: "Data Analyst, City D",
    rating: 5,
    testimonial:
      "This platform has streamlined our data collection and analysis processes, making our jobs easier and our cities smarter.",
  },
  {
    name: "Sarah Lee",
    position: "Environmental Scientist, City E",
    rating: 3,
    testimonial:
      "The Smart City Management System has enabled us to monitor environmental conditions in real time, leading to proactive measures that protect our community.",
  },
  {
    name: "David Kim",
    position: "Chief Technology Officer, City F",
    rating: 4,
    testimonial:
      "This platform has integrated seamlessly with our existing infrastructure, allowing us to leverage data effectively and enhance our city services.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-6xl font-bold text-center mb-12">
            What Our{" "}
            <span className="text-blue-500 border-b-4 rounded-lg text-7xl max-sm:text-3xl border-white">
              Customers{" "}
            </span>
            Say
          </h2>
          <p className="mt-2 text-2xl text-gray-100">
            <span className="text-blue-500"> Real feedback</span> from our happy
            customers!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-lg text-black italic mb-4">
                <FaQuoteLeft className="text-blue-500 mr-2 inline" />
                {testimonial.testimonial}
              </p>
              <div className="flex justify-center items-center">
                {[...Array(testimonial.rating)].map((star, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>
              <h3 className="text-xl text-gray-700 font-semibold mb-1 text-center">
                {testimonial.name}
              </h3>
              <p className="text-center text-gray-700">
                {testimonial.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
