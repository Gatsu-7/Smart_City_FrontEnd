import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";
import hero2 from "../assets/her2.jpg";

import KeyFeatures from "./KeyFeatures";
import { useState } from "react";
import BenefitsSection from "./Benefits";
import HowItWorksSection from "./Howitworks";
import CaseStudiesSection from "./CaseStudies";
import TestimonialsSection from "./Testimonials";
import InteractiveDataVisualizationSection from "./datavisual";
import NewsAndUpdatesSection from "./news";
import PartnershipsSection from "./Partnerships";
import CommunityEngagementSection from "./Community";
import NewsletterSignup from "./Newsletter";
import FAQsSection from "./Faq";
const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(hero);
  return (
    <>
      <section className="bg-gray-900 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-5 py-24">
          <div className="flex flex-col md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              <span className="text-blue-500"> Smart City</span> Management
            </h1>
            <p className="text-lg md:text-xl mb-8 mr-4">
              Empowering cities with data-driven solutions for efficient and
              sustainable urban management.
            </p>
            <div className="max-sm:flex justify-center   items-center lg:justify-start ">
              <Link
                to="/dashboard"
                className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 w-[10rem] rounded-md transition duration-300 ease-in-out"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="mt-10 md:mt-0 md:w-1/2 ">
            <img
              src={currentImage}
              alt="Smart City"
              className="w-full object-cover rounded-lg hover:scale-105 transition-all  duration-300 ease-in-out"
              onMouseEnter={() => setCurrentImage(hero2)}
              onMouseLeave={() => setCurrentImage(hero)}
            />
          </div>
        </div>
      </section>
      <section>
        <KeyFeatures />
      </section>
      <section>
        <BenefitsSection />
      </section>
      <section>
        <HowItWorksSection />
      </section>
      <section>
        <CaseStudiesSection />
      </section>
      <section>
        <TestimonialsSection />
      </section>
      <section>
        {" "}
        <InteractiveDataVisualizationSection />
      </section>
      <section>
        <NewsAndUpdatesSection />
      </section>
      <section>
        <PartnershipsSection />
      </section>
      <section>
        <CommunityEngagementSection />
      </section>
      <section>{/* <NewsletterSignup /> */}</section>
      <section>
        <FAQsSection />
      </section>
    </>
  );
};

export default HeroSection;
