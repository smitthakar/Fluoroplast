import { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import logo from "../../assets/logo.jpeg";
import { IoCaretDownOutline, IoClose } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSectionClick = (section) => {
    setActiveSection((prevSection) =>
      prevSection === section ? null : section
    );
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prevMenu) => !prevMenu);
    setActiveSection(null);
  };

  // Content sliding animation
  const contentVariants = {
    hiddenRight: {
      opacity: 0.5, // Slightly faded out
      x: 50, // Moves slightly right
      transition: {
        duration: 1, // Slightly shorter for snappy effect
        ease: "easeInOut",
        type: "spring",
        stiffness: 100, // Adds subtle bounce
        damping: 20, // Prevents excessive bouncing
      },
    },
    hiddenLeft: {
      opacity: 0.5, // Slightly faded out
      x: -50, // Moves slightly left
      transition: {
        duration: 1,
        ease: "easeInOut",
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    visible: {
      opacity: 1, // Fully visible
      x: 0, // Moves to normal position
      transition: {
        duration: 1,
        ease: "easeInOut",
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const resourceItems = [
    { name: "Blog", link: "/blogs" },
    { name: "Case Studies", link: "/case-studies" },
    { name: "Technical Documents", link: "/document" },
    { name: "Downloads", link: "/downloads" }
  ];

  const resourceItemsLinks = [
    { name: "Online Tools", link: "/online-tools" },
    { name: "Certificates", link: "/certificates" },
    { name: "Gallery", link: "/gallery" },
  ];
  
  const productItems = [
    {
      name: "Engineering Plastics",
      link: "/engineering-plastics",
    },
    { name: "Hydraulic Seals", link: "/hydraulic-seals" },
    {
      name: "Compressor Replacement Parts",
      link: "/compressor-replacement",
    },
    {
      name: "Hydraulic Cylinders",
      link: "/hydraulic-cylinders",
    },
    {
      name: "FEP and PFA Lined Valves & Fittings",
      link: "/fep-pfa-valves",
    }
  ];

  const industries = [
    { name: "Hydraulic & Pneumatic Cylinders", link: "/hydraulic-pneumatic" },
    { name: "Valve Industry", link: "/valve-industry" },
    { name: "Steel Industry", link: "/steel-industry" },
    { name: "Food & Pharma Industry", link: "/food-pharma" },
    { name: "Press Forming Industry", link: "/press-forming" },
    { name: "Pump Motor & Gear Boxes", link: "/pump-motor-gearbox" },
    { name: "Oil & Gas Industry", link: "/oil-gas" },
    { name: "Earthmoving Industry", link: "/earthmoving" },
    { name: "Tyre Industry", link: "/tyre" },
    { name: "Engineering & Fabrication Industry", link: "/engineering-fabrication" },
    { name: "Automobile Industry", link: "/automobile" },
    { name: "Aluminum Industry", link: "/aluminum" },
    { name: "Textile Industry", link: "/textile" },
    { name: "Wind Mill Industry", link: "/wind-mill" },
    { name: "Cement Industry", link: "/cement" },
    { name: "Pulp & Paper Industry", link: "/pulp-paper" },
    { name: "Sugar Industry", link: "/sugar" },
    { name: "Chemical & Fertilizer Industry", link: "/chemical-fertilizer" },
    { name: "Gems and Jewellery Industry", link: "/gems-jewellery" },
    { name: "Plastic Industry", link: "/plastic" },
    { name: "Pharmaceutical Industry", link: "/pharmaceutical" },
    { name: "Chemical Industry", link: "/chemical" },
    { name: "Marine Industry", link: "/marine" },
  ];
  


  return (
    <div className="lg:w-full md:w-full sm:w-full font-manropen fixed top-0 left-0 bg-white shadow-md z-50 border-b border-gray-200">
      {/* <nav className="bg-white w-full h-22 pt-3 relative"> */}
      <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between relative">
        <div className="hidden md:flex w-[168px] h-[28px] space-x-10  text-[#0A0A0A] flex-grow size-[20px] justify-right font-['Manrope']">
          {["Products", "Industries Served", "Resources"].map((section) => (
            <button
              key={section}
              className={`relative pb-2 transition-all flex items-center space-x-1 ${
                activeSection === section
                  ? "text-black-600 font-semibold after:absolute after:left-0 after:bottom-[-24px] after:w-full after:h-[4px] after:bg-red-600"
                  : "hover:text-black-600"
              }`}
              onClick={() => handleSectionClick(section)}
            >
              <span>{section}</span>
              <IoCaretDownOutline className="w-[22px] h-[29px] py-[9px] px-[7px] gap-[10px]" />
            </button>
          ))}
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center mt-5">
          <Link to="/">
            <img
              src={logo}
              alt="Fluoroplast Engineers Pvt. Ltd."
              className="h-12"
            />
          </Link>
          <p className="text-xs text-black-600 mt-1 mb-6 text-center font-['Manrope']">
            Welcome to the world of possibilities
          </p>
        </div>

        <div className="flex items-center space-x-6 flex-grow justify-end">
          <select className="bg-transparent text-gray-700 border-none focus:outline-none cursor-pointer">
            <option>English</option>
          </select>

          <Link
            to="/Contact-Us"
            className="relative bg-gradient-to-r from-red-700 to-orange-500 text-white px-6 py-3 rounded-full flex items-center justify-center font-medium transition-all duration-300 group overflow-hidden"
          >
            <span className="absolute inset-0 bg-black opacity-0 transition-all duration-300 group-hover:opacity-100 rounded-full"></span>
            <span className="relative flex items-center z-10 text-white transition-all duration-300">
              <FaPhoneAlt className="mr-2 ml-4 justify-center" />
              Contact us
              <span className="ml-2 relative w-5 h-5 flex items-center justify-center overflow-hidden">
                <FaArrowRight className="absolute left-[-10px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100" />
              </span>
            </span>
          </Link>

          <button className="text-gray-700 text-2xl" onClick={toggleMenu}>
            {menuOpen ? <IoClose /> : "☰"}
          </button>
        </div>
      </div>
      {/* </nav> */}

      {(activeSection || menuOpen) && (
        <div className="w-full h-[3px] bg-red-600"></div>
      )}

      {!menuOpen && activeSection && (
        <div
          className="absolute w-full bg-white transition-all duration-300 py-10 px-6 z-50"
          onMouseLeave={() => setActiveSection(null)}
        >
          <div className="max-w-screen-xl mx-auto">
            <motion.div
              key={activeSection}
              initial={
                activeSection === "Industries Served"
                  ? "hiddenRight"
                  : "hiddenLeft"
              }
              animate="visible"
              exit={{ opacity: 0, x: 0 }}
              variants={contentVariants}
            >
              {activeSection === "Products" && (
                <div className="grid grid-cols-1 md:grid-cols-2 items-start">
                  <div>
                    <h2 className="text-4xl  font-bold text-gray-900 font-['Red Hat Display']">
                      Our Products
                    </h2>
                    <p className="text-black-600 mt-2 text-lg font-['Red Hat Display']">
                      We offer high-quality, precision-engineered products,
                      designed to meet the demanding needs of modern
                      manufacturing across a range of applications.
                    </p>
                  </div>
                  <div>
                    <ul className="text-lg text-gray-800 font-medium space-y-4">
                      {productItems.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center space-x-3 font-['Red Hat Display']"
                        >
                          <span>
                            <SlArrowRight className="text-black-600 w-3 h-3" />
                          </span>
                          <Link to={item.link} className="hover:text-red-900">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeSection === "Industries Served" && (
                <div className="grid grid-cols-4 gap-4 text-lg text-gray-800 font-medium font-['Red Hat Display']">
                  {industries.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="flex items-center space-x-3 hover:text-red-900 transition-all"
                    >
                      <SlArrowRight className="w-3 h-3" />
                      <span>{item.name}</span>
                    </a>
                  ))}
                </div>
              )}

              {activeSection === "Resources" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900 font-['Red Hat Display']">
                      Resources
                    </h2>
                    <p className="text-black-600 mt-2 text-lg font-['Red Hat Display']">
                      Our comprehensive resources include advanced manufacturing
                      technologies, a skilled workforce, and cutting-edge
                      facilities to ensure top-tier production capabilities and
                      customer satisfaction.
                    </p>
                  </div>

                  {/* Splitting into Two Columns */}
                  <div className="grid grid-cols-2 gap-4 text-lg text-gray-800 font-medium font-['Red Hat Display']">
                    <div>
                      {resourceItems.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 py-2"
                        >
                          <span className="text-black-600">
                            <SlArrowRight className="w-3 h-3" />
                          </span>
                          <Link to={item.link} className="hover:text-red-900">
                            {item.name}
                          </Link>
                        </div>
                      ))}
                    </div>

                    <div>
                      {resourceItemsLinks.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 py-2"
                        >
                          <span className="text-black-600">
                            <SlArrowRight className="w-3 h-3" />
                          </span>
                          <Link to={item.link} className="hover:text-red-900">
                            {item.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
      {menuOpen && !activeSection && (
        <div
          className="absolute w-full bg-white transition-all duration-300 py-10 px-6 z-50"
          onMouseLeave={() => {
            setMenuOpen(false); // Close menu on mouse leave
            setActiveSection(null);
          }}
        >
          <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-10">
            {/* Left Column */}
            <div>
              <h3 className="text-xl font-bold font-redhat text-gray-900 font-['Red Hat Display']">
                Our Company
              </h3>
              <ul className="mt-3 space-y-4 text-gray-700 font-medium">
                <li className="flex items-center space-x-2">
                  <SlArrowRight className="text-black-600 w-3 h-3" />
                  <Link to="/aboutus">
                    <span className="hover:text-red-900 font-['Red Hat Display']">
                      About Us
                    </span>
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <SlArrowRight className="text-black-600 w-3 h-3" />
                  <Link to="/news&events">
                    <span className="hover:text-red-900 font-['Red Hat Display']">
                      News & Events
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-xl font-semibold py-2 font-['Red Hat Display'] text-gray-900">
                Innovation & Quality
              </h3>
              <ul className="mt-3 space-y-4 text-gray-700 font-medium font-['Red Hat Display']">
                <li className="flex items-center space-x-2">
                  <SlArrowRight className="text-black-600 w-3 h-3" />
                  <span className="hover:text-red-900">
                    Research & Development
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <SlArrowRight className="text-black-600 w-3 h-3 " />
                  <Link to="/quality-assurance">
                    <span className="hover:text-red-900">
                      Quality Assurance & Certifications
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
