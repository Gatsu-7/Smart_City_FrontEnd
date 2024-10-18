import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="bg-blue-800 text-white shadow-lg"
      style={{
        backgroundColor: "#2234ae",
        backgroundImage: "linear-gradient(150deg, #2234ae 0%, #211f1c 74%)",
      }}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-4xl font-bold">Smart City </div>

        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="relative p-2  text-white text-xl transition duration-150 ease-in-out before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-white  before:transition-all before:duration-300 before:ease-in-out hover:before:left-0 hover:before:w-full"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="relative p-2  text-white text-xl transition duration-150 ease-in-out before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-white  before:transition-all before:duration-300 before:ease-in-out hover:before:left-0 hover:before:w-full"
          >
            About
          </Link>
          <Link
            to="/features"
            className="relative p-2  text-white text-xl transition duration-150 ease-in-out before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-white  before:transition-all before:duration-300 before:ease-in-out hover:before:left-0 hover:before:w-full"
          >
            Features
          </Link>
          <Link
            to="/dashboard"
            className="relative p-2  text-white text-xl transition duration-150 ease-in-out before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-white  before:transition-all before:duration-300 before:ease-in-out hover:before:left-0 hover:before:w-full"
          >
            Dashboard
          </Link>
          <Link
            to="/contact"
            className="relative p-2  text-white text-xl transition duration-150 ease-in-out before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-white  before:transition-all before:duration-300 before:ease-in-out hover:before:left-0 hover:before:w-full"
          >
            Contact
          </Link>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <nav
          className="md:hidden "
          style={{
            backgroundColor: "#2234ae",
            backgroundImage: "linear-gradient(150deg, #2234ae 0%, #211f1c 74%)",
          }}
        >
          <ul className="flex justify-center items-center flex-col space-y-2 p-4">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/features" className="hover:text-gray-300">
                Features
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-gray-300">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
