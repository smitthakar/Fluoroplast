import { useState } from "react";
import logo from "../../assets/logo.jpeg";
import { IoCaretDownOutline, IoClose } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSectionClick = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? null : section));
    setMenuOpen(false); // Close menu when a navbar section is selected
  };

  const toggleMenu = () => {
    setMenuOpen((prevMenu) => !prevMenu);
    setActiveSection(null); // Close navbar dropdown when menu is opened
  };

  return (
    <div className="w-full relative">
      <nav className="bg-white  w-full h-22 border-b border-gray-200 pt-3 relative">
        <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between relative">
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-10 font-medium text-gray-700 flex-grow justify-start">
            {["Products", "Industries Served", "Resources"].map((section) => (
              <button
                key={section}
                className={`relative pb-3 transition-all flex items-center space-x-1 ${
                  activeSection === section
                    ? "text-black-600 font-semibold after:absolute after:left-0 after:bottom-[-17px] after:w-full after:h-[3px] after:bg-red-600"
                    : "hover:text-black-600"
                }`}
                onClick={() => handleSectionClick(section)}
              >
                <span>{section}</span>
                <IoCaretDownOutline />
              </button>
            ))}
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <img
              src={logo}
              alt="Fluoroplast Engineers Pvt. Ltd."
              className="h-12"
            />
            <p className="text-xs text-gray-500 mt-1 mb-4 text-center">
              welcome to the world of possibilities
            </p>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6 flex-grow justify-end">
            <select className="bg-transparent text-gray-700 border-none focus:outline-none cursor-pointer">
              <option>English</option>
            </select>

            <a
              href="#"
              className="relative bg-gradient-to-r from-red-700 to-orange-500 text-white px-6 py-3 rounded-full flex items-center justify-center font-medium transition-all duration-300 group overflow-hidden"
            >
              <span className="absolute inset-0 bg-black opacity-0 transition-all duration-300 group-hover:opacity-100 rounded-full"></span>
              <span className="relative flex items-center z-10 text-white transition-all duration-300">
                <FaPhoneAlt className="mr-2" />
                Contact us
                <span className="ml-2 relative w-5 h-5 flex items-center justify-center overflow-hidden">
                  <FaArrowRight className="absolute left-[-10px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100" />
                </span>
              </span>
            </a>

            {/* ☰ Menu Button */}
            <button className="text-gray-700 text-2xl" onClick={toggleMenu}>
              {menuOpen ? <IoClose /> : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* Red Underline when Navbar Section or Menu is Open */}
      {(activeSection || menuOpen) && <div className="w-full h-[3px] bg-red-600"></div>}

      {/* Dropdown and Menu Overlay */}
      {(activeSection || menuOpen) && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg z-40 transition-all duration-300 py-10 px-6">
          <div className="max-w-screen-xl mx-auto">
            {/* Dropdown Content */}
            {activeSection === "Products" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900">Our Products</h2>
                  <p className="text-gray-600 mt-2 text-lg">
                    We offer high-quality, precision-engineered products, designed to meet the demanding needs of modern manufacturing across a range of applications.
                  </p>
                </div>
                <div>
                  <ul className="space-y-4 text-lg text-gray-800 font-medium">
                    {[
                      "Engineering Plastics",
                      "Hydraulic Seals",
                      "Compressor Replacement Parts",
                      "Hydraulic Cylinders",
                      "FEP and PFA Lined Valves & Fittings",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <span className="text-black-600">
                          <SlArrowRight />
                        </span>
                        <span className="hover:text-red-900">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {activeSection === "Industries Served" && (
              <div className="grid grid-cols-4 gap-6 text-lg text-gray-800 font-medium">
                {[
                  "Hydraulic & Pneumatic Cylinders",
                  "Valve Industry",
                  "Steel Industry",
                  "Food & Pharma Industry",
                  "Press Forming Industry",
                  "Pump Motor & Gear Boxes",
                  "Oil & Gas Industry",
                  "Earthmoving Industry",
                  "Tyre Industry",
                  "Engineering & Fabrication Industry",
                  "Automobile Industry",
                  "Aluminum Industry",
                  "Textile Industry",
                  "Wind Mill Industry",
                  "Cement Industry",
                  "Pulp & Paper Industry",
                  "Sugar Industry",
                  "Chemical & Fertilizer Industry",
                  "Gems and Jewellery Industry",
                  "Plastic Industry",
                  "Pharmaceutical Industry",
                  "Chemical Industry",
                  "Marine Industry",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-black-600">
                      <SlArrowRight />
                    </span>
                    <span className="hover:text-red-900">{item}</span>
                  </div>
                ))}
              </div>
            )}

            {activeSection === "Resources" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900">
                    Resources
                  </h2>
                  <p className="text-gray-600 mt-2 text-lg">
                    Our comprehensive resources include advanced manufacturing
                    technologies, a skilled workforce, and cutting-edge
                    facilities to ensure top-tier production capabilities and
                    customer satisfaction.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-10 text-lg text-gray-800 font-medium">
                  <div>
                    {[
                      "Blog",
                      "Case Studies",
                      "Technical Documents",
                      "Downloads",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <span className="text-black-600">
                          <SlArrowRight />
                        </span>
                        <span className="hover:text-red-900">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    {["Online Tools", "Certificates", "Gallery"].map(
                      (item, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <span className="text-black-600">
                            <SlArrowRight />
                          </span>
                          <span className="hover:text-red-900">{item}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Menu Content */}
            {menuOpen && !activeSection && (
              <div className="grid grid-cols-2 gap-10">
                {/* Left Column */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Our Company</h3>
                  <ul className="mt-3 space-y-2 text-gray-700 font-medium">
                    <li className="flex items-center space-x-2">
                      <SlArrowRight className="text-black-600" />
                      <span className="hover:text-red-900">About Us</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <SlArrowRight className="text-black-600" />
                      <span className="hover:text-red-900">News & Events</span>
                    </li>
                  </ul>
                </div>

                {/* Right Column */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Innovation & Quality</h3>
                  <ul className="mt-3 space-y-2 text-gray-700 font-medium">
                    <li className="flex items-center space-x-2">
                      <SlArrowRight className="text-black-600" />
                      <span className="hover:text-red-900">Research & Development</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <SlArrowRight className="text-black-600 " />
                      <span className="hover:text-red-900">Quality Assurance & Certifications</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
