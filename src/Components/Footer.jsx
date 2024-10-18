import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Smart City Management</h2>
            <p className="text-gray-400">
              Empowering cities with data-driven solutions for efficient and
              sustainable urban management.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/faq"
                  className="text-base text-gray-400 hover:text-white transition"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-base text-gray-400 hover:text-white transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/termsofservice"
                  className="text-base text-gray-400 hover:text-white transition"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/cancellation"
                  className="text-base text-gray-400 hover:text-white transition"
                >
                  Cancellation Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold mb-2 text-blue-500 ">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-blue-500"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-blue-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2 text-blue-500 ">
              Contact Us
            </h3>
            <p className="text-gray-400 mb-2">Email: support@smartcity.com</p>
            <p className="text-gray-400">Phone: +919667016338</p>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FaFacebook
              className="text-gray-400 hover:text-blue-600"
              size={24}
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FaTwitter
              className="text-gray-400 hover:text-blue-400"
              size={24}
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FaLinkedin
              className="text-gray-400 hover:text-blue-700"
              size={24}
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FaInstagram
              className="text-gray-400 hover:text-pink-500"
              size={24}
            />
          </a>
        </div>

        <div className="text-center text-gray-400 mt-6">
          <p>
            &copy; {new Date().getFullYear()} Smart City Management. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
