import { useState } from "react";
import logo from "../../assets/logo.jpeg";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="w-full">
      {/* Navbar */}
      <nav className="bg-white shadow-md w-full border-b border-gray-200 relative">
        <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between relative">
          
          {/* Left Section - Navigation Links */}
          <div className="hidden md:flex space-x-10 font-medium text-gray-700 flex-grow justify-start">
            {["products", "industries", "resources"].map((section) => (
              <button
                key={section}
                className={`relative pb-3 transition-all ${
                  activeSection === section
                    ? "text-red-600 font-semibold after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-red-600"
                    : "hover:text-red-600"
                }`}
                onClick={() => setActiveSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)} <span className="ml-1">▼</span>
              </button>
            ))}
          </div>

          {/* Centered Logo & Tagline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <img src={logo} alt="Fluoroplast Engineers Pvt. Ltd." className="h-12" />
            <p className="text-xs text-gray-500 mt-1 text-center">
              welcome to the world of possibilities
            </p>
          </div>

          {/* Right Section - Language Selector & Contact Button */}
          <div className="flex items-center space-x-6 flex-grow justify-end">
            <select className="bg-transparent text-gray-700 border-none focus:outline-none cursor-pointer">
              <option>English </option>
            </select>

            <a
              href="#"
              className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-5 py-2 rounded-full hover:opacity-80 flex items-center shadow-md font-medium"
            >
              📞 Contact Us
            </a>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-700 text-2xl">
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Red Underline Below Navbar When Active */}
      {activeSection && <div className="w-full h-[3px] bg-red-600"></div>}

      {/* Full-Width Section Expands When Active */}
      {activeSection && (
        <div className="w-full bg-white transition-all duration-300 shadow-lg py-10 px-6">
          <div className="max-w-screen-xl mx-auto">
            {activeSection === "products" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Left Side - Title & Description */}
                <div className="text-left">
                  <h2 className="text-4xl font-bold text-gray-900">Our Products</h2>
                  <p className="text-gray-600 mt-2 text-lg leading-relaxed">
                    We offer high-quality, precision-engineered products, designed to meet the demanding 
                    needs of modern manufacturing across a range of applications.
                  </p>
                </div>

                {/* Right Side - Product List (Right-Aligned) */}
                <div className="text-lg text-gray-800 font-medium text-right">
                  <ul className="space-y-4">
                    {[
                      "Engineering Plastics",
                      "Hydraulic Seals",
                      "Compressor Replacement Parts",
                      "Hydraulic Cylinders",
                      "FEP and PFA Lined Valves & Fittings"
                    ].map((item, index) => (
                      <li key={index} className="flex justify-end items-center space-x-3">
                        <span>{item}</span>
                        <span className="text-red-600">▶</span> 
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeSection === "industries" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg text-gray-800 font-medium text-left">
                {[
                  ["Hydraulic & Pneumatic Cylinders", "Valve Industry", "Steel Industry", "Food & Pharma Industry", "Press Forming Industry", "Pump Motor & Gear Boxes"],
                  ["Oil & Gas Industry", "Earthmoving Industry", "Tyre Industry", "Engineering & Fabrication Industry", "Automobile Industry", "Aluminum Industry"],
                  ["Textile Industry", "Wind Mill Industry", "Cement Industry", "Pulp & Paper Industry", "Sugar Industry", "Chemical & Fertilizer Industry"],
                  ["Gems and Jewellery Industry", "Plastic Industry", "Pharmaceutical Industry", "Chemical Industry", "Marine Industry"]
                ].map((column, colIndex) => (
                  <ul key={colIndex} className="space-y-3">
                    {column.map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <span className="text-red-600">▶</span> 
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            )}

            {activeSection === "resources" && (
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900">Resources</h2>
                <p className="text-gray-600 mt-2 text-lg">
                  Explore our latest whitepapers, blogs, and product manuals to get deeper insights.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
