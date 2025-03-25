import { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import logo from "../../assets/logo.svg";
import { IoCaretDownOutline, IoClose } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";


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
    <div className="header">
      <div className="header-inner">
        <div className="menu-wrapper">
          {["Products", "Industries Served", "Resources"].map((section) => (
            <button
              key={section}
              className={`menu-button ${
                activeSection === section ? "active" : ""
              }`}
              onClick={() => handleSectionClick(section)}
            >
              <span>{section}</span>
              <IoCaretDownOutline className="menu-icon" />
            </button>
          ))}
        </div>

        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Fluoroplast Engineers Pvt. Ltd." />
          </Link>
          <p className="logo-tagline">Welcome to the world of possibilities</p>
        </div>

        <div className="navbar-right">
          <select className="language-select">
            <option>English</option>
          </select>

          <Link to="/Contact-Us" className="contact-button">
            <span className="bg-hover"></span>
            <span className="btn-content">
              <FaPhoneAlt style={{ marginRight: "8px", marginLeft: "16px" }} />
              Contact us
              <span className="arrow">
                <FaArrowRight className="arrow-icon" />
              </span>
            </span>
          </Link>

          <button className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? <IoClose /> : "☰"}
          </button>
        </div>
      </div>
      {/* </nav> */}

      {(activeSection || menuOpen) && <div className="navbar-indicator"></div>}

      {!menuOpen && activeSection && (
        <div
        className="mega-dropdown"
        onMouseLeave={() => setActiveSection(null)}
      >
        <div className="mega-dropdown-inner">
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
                <div className="products-section">
                  <div>
                    <h2 className="products-title">Our Products</h2>
                    <p className="products-description">
                      We offer high-quality, precision-engineered products,
                      designed to meet the demanding needs of modern
                      manufacturing across a range of applications.
                    </p>
                  </div>
                  <div>
                    <ul className="product-list">
                      {productItems.map((item, index) => (
                        <li key={index} className="product-item">
                          <span>
                            <SlArrowRight className="icon" />
                          </span>
                          <Link to={item.link}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeSection === "Industries Served" && (
                <div className="industries-grid">
                  {industries.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className={`industry-item ${
                        item.name === "Hydraulic & Pneumatic Cylinders"
                          ? "active"
                          : ""
                      }`}
                    >
                      <SlArrowRight className="industry-icon" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}

              {activeSection === "Resources" && (
                <div className="resources-section">
                  <div>
                    <h2 className="resources-title">Resources</h2>
                    <p className="resources-description">
                      Our comprehensive resources include advanced manufacturing
                      technologies, a skilled workforce, and cutting-edge
                      facilities to ensure top-tier production capabilities and
                      customer satisfaction.
                    </p>
                  </div>

                  <div className="resources-links">
                    <div>
                      {resourceItems.map((item, index) => (
                        <Link
                          to={item.link}
                          key={index}
                          className="resources-link-item"
                        >
                          <SlArrowRight className="resources-link-icon" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div>
                      {resourceItemsLinks.map((item, index) => (
                        <Link
                          to={item.link}
                          key={index}
                          className="resources-link-item"
                        >
                          <SlArrowRight className="resources-link-icon" />
                          {item.name}
                        </Link>
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
          className="dropdown-wrapper"
          onMouseLeave={() => {
            setMenuOpen(false);
            setActiveSection(null);
          }}
        >
          <div className="dropdown-grid">
            {/* Left Column */}
            <div>
              <h3 className="dropdown-heading">Our Company</h3>
              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <SlArrowRight className="icon" />
                  <Link to="/aboutus">About Us</Link>
                </li>
                <li className="dropdown-item">
                  <SlArrowRight className="icon" />
                  <Link to="/news&events">News & Events</Link>
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="dropdown-heading">Innovation & Quality</h3>
              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <SlArrowRight className="icon" />
                  <span>Research & Development</span>
                </li>
                <li className="dropdown-item">
                  <SlArrowRight className="icon" />
                  <Link to="/quality-assurance">
                    Quality Assurance & Certifications
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
