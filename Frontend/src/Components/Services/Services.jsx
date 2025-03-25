import { useState, useRef,useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion"; // Import Framer Motion
import GroupOne from "../../assets/GroupOne.png";
import GroupTwo from "../../assets/GroupTwo.png";
import GroupThree from "../../assets/GroupThree.png";
import pneumatic from "../../assets/pneumatic.png";
import combination from "../../assets/combination.png";
import arr from "../../assets/Arrow rigth.png";
import arrLeft from "../../assets/Arrow left.png";
import { FaArrowRight } from "react-icons/fa";
import "./Services.css";

const services = [
  {
    title: (
      <>
        Engineering <br /> Plastics
      </>
    ),
    description:
      "High-performance materials with mechanical and thermal properties, used in automotive, aerospace, and electronics.",
    icon: GroupOne,
  },
  {
    title: (
      <>
        Hydraulic <br /> Seals
      </>
    ),
    description:
      "Critical components designed to prevent fluid leakage and maintain pressure in hydraulic systems, ensuring efficient operation.",
    icon: GroupTwo,
  },
  {
    title: (
      <>
        Compressor <br /> Parts
      </>
    ),
    description:
      "Essential components used to repair or maintain compressors, ensuring optimal performance.",
    icon: GroupThree,
  },
  {
    title: (
      <>
        Hydraulic <br /> Cylinders
      </>
    ),
    description:
      "Mechanical actuators that convert hydraulic energy into linear motion, providing force in lifting, pushing, and pulling.",
    icon: pneumatic,
  },
  {
    title: (
      <>
        Hydraulic <br /> Cylinders
      </>
    ),
    description:
      "FEP and PFA lined valves and fittings offer high chemical resistance for corrosive fluid handling industries like chemical and pharmaceuticals.",
    icon: combination,
  },
];

// Duplicate services for seamless infinite loop
const infiniteServices = [...services, ...services];

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth <= 768);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  // Move to next slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };
  

  // Swipeable gesture handling
  const handlers = useSwipeable({
    trackTouch: true,
    trackMouse: true,
    preventScrollOnSwipe: true,
    delta: 10,
  });

  // Handle touchpad & mouse drag (no clicking required)
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust sensitivity
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="services-container">
      <div className="section-wrapper">
        <p className="section-subheading">
          The Best Industry and Company Services
        </p>

        <h2 className="section-heading">Provides High Performance Services</h2>

        {/* Navigation Buttons */}
        <div className="nav-buttons">
          <button onClick={prevSlide} className="nav-button-prev">
            <img src={arrLeft} alt="Previous Slide" />
          </button>
          <button onClick={nextSlide} className="nav-button-next">
            <img src={arr} alt="Next Slide" />
          </button>
        </div>
      </div>

      <section className="carousel-section">
  {isMobile ? (
    // 👉 MOBILE: Single card slider with buttons
    <div className="carousel-wrapper mobile">
      <div className="carousel-slide">
        <div className="service-card">
          <div className="service-content">
            <img
              src={services[currentIndex].icon}
              alt={services[currentIndex].title}
              className="service-icon"
            />
            <h3 className="service-title">{services[currentIndex].title}</h3>
            <p className="service-description">
              {services[currentIndex].description}
            </p>
          </div>
          <a href="#" className="read-more">
            Read More
            <span className="read-more-arrow">
              <FaArrowRight className="w-[15px] h-[15px]" />
            </span>
          </a>
        </div>
      </div>
    </div>
  ) : (
    // 👉 DESKTOP: Infinite motion carousel (as-is)
    <div
      {...handlers}
      ref={carouselRef}
      className="carousel-wrapper"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <motion.div
        className="slider-container"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {infiniteServices.map((service, index) => (
          <div key={index} className="carousel-slide">
            <div className="service-card">
              <div className="service-content">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="service-icon"
                />
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
              <a href="#" className="read-more">
                Read More
                <span className="read-more-arrow">
                  <FaArrowRight className="w-[15px] h-[15px]" />
                </span>
              </a>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )}
</section>
    </div>
  );
};

export default ServicesCarousel;
