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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSectionClick = (section) => {
    setActiveSection((prevSection) =>
      prevSection === section ? null : section
    );
    setMenuOpen(false);
  };

  // const toggleMenu = () => {
  //   setMenuOpen((prevMenu) => !prevMenu);
  //   setActiveSection(null);
  // };

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
    { name: "Case Studies", link: "/coming-soon" },
    { name: "Technical Documents", link: "/document" },
    { name: "Downloads", link: "/coming-soon" },
  ];

  const resourceItemsLinks = [
    { name: "Online Tools", link: "/coming-soon" },
    { name: "Certificates", link: "/certificates" },
    { name: "Gallery", link: "/gallery" },
  ];

  const productItems = [
    {
      name: "Engineering Plastics",
      link: "/coming-soon",
    },
    { name: "Hydraulic Seals", link: "/coming-soon" },
    {
      name: "Compressor Replacement Parts",
      link: "/coming-soon",
    },
    {
      name: "Hydraulic Cylinders",
      link: "/coming-soon",
    },
    {
      name: "FEP and PFA Lined Valves & Fittings",
      link: "/coming-soon",
    },
  ];

  const industries = [
    { name: "Hydraulic & Pneumatic Cylinders", link: "/coming-soon" },
    { name: "Valve Industry", link: "/coming-soon" },
    { name: "Steel Industry", link: "/coming-soon" },
    { name: "Food & Pharma Industry", link: "/coming-soon" },
    { name: "Press Forming Industry", link: "/coming-soon" },
    { name: "Pump Motor & Gear Boxes", link: "/coming-soon" },
    { name: "Oil & Gas Industry", link: "/coming-soon" },
    { name: "Earthmoving Industry", link: "/coming-soon" },
    { name: "Tyre Industry", link: "/coming-soon" },
    { name: "Engineering & Fabrication Industry", link: "/coming-soon" },
    { name: "Automobile Industry", link: "/coming-soon" },
    { name: "Aluminum Industry", link: "/coming-soon" },
    { name: "Textile Industry", link: "/coming-soon" },
    { name: "Wind Mill Industry", link: "/coming-soon" },
    { name: "Cement Industry", link: "/coming-soon" },
    { name: "Pulp & Paper Industry", link: "/coming-soon" },
    { name: "Sugar Industry", link: "/coming-soon" },
    { name: "Chemical & Fertilizer Industry", link: "/coming-soon" },
    { name: "Gems and Jewellery Industry", link: "/coming-soon" },
    { name: "Plastic Industry", link: "/coming-soon" },
    { name: "Pharmaceutical Industry", link: "/coming-soon" },
    { name: "Chemical Industry", link: "/coming-soon" },
    { name: "Marine Industry", link: "/coming-soon" },
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

          <button
  className="menu-toggle"
  onClick={() => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      setMobileMenuOpen((prev) => !prev);
      setMenuOpen(false);
    } else {
      setMenuOpen((prev) => !prev);
      setMobileMenuOpen(false);
    }

    setActiveSection(null);
  }}
>
  {(window.innerWidth <= 768 ? mobileMenuOpen : menuOpen) ? (
    <IoClose />
  ) : (
    "☰"
  )}
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
                  <Link to="/coming-soon">Research & Development</Link> 
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
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="menu-section">
            English <IoCaretDownOutline />
          </div>

          {[
            "Products",
            "Industries Served",
            "Resources",
            "Our Company",
            "Innovation & Quality",
          ].map((section) => (
            <div key={section}>
              <div
                className="menu-section"
                onClick={() => handleSectionClick(section)}
              >
                {section} <SlArrowRight />
              </div>
              {activeSection === section && (
                <div className="submenu">
                  {section === "Products" &&
                    productItems.map((item) => (
                      <Link
                        to={item.link}
                        key={item.name}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  {section === "Industries Served" &&
                    industries.slice(0, 10).map((item) => (
                      <Link
                        to={item.link}
                        key={item.name}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  {section === "Resources" &&
                    [...resourceItems, ...resourceItemsLinks].map((item) => (
                      <Link
                        to={item.link}
                        key={item.name}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  {section === "Our Company" && (
                    <>
                      <Link
                        to="/aboutus"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        About Us
                      </Link>
                      <Link
                        to="/news&events"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        News & Events
                      </Link>
                    </>
                  )}
                  {section === "Innovation & Quality" && (
                    <>
                      <Link to="/coming-soon" onClick={() => setMobileMenuOpen(false)}>
                        Research & Development
                      </Link>
                      <Link
                        to="/quality-assurance"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Quality Assurance
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}

          <div className="menu-section">
            <Link to="/Contact-Us" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
