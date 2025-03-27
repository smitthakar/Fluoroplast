import { useState, useRef,useEffect } from "react";
import GroupOne from "../../assets/GroupOne.svg";
import GroupTwo from "../../assets/GroupTwo.svg";
import GroupThree from "../../assets/GroupThree.svg";
import pneumatic from "../../assets/pneumatic.svg";
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
];

// Duplicate services for seamless infinite loop
const infiniteServices = [...services, ...services];

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth <= 768);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

const nextSlide = () => {
  if (isMobile) {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  } else {
    const card = carouselRef.current.querySelector(".carousel-slide");
    const cardStyle = window.getComputedStyle(card);
    const cardWidth = card.offsetWidth;
    const gap = parseInt(cardStyle.marginRight || 0);
    const totalScroll = cardWidth + gap;

    carouselRef.current.scrollBy({ left: totalScroll, behavior: "smooth" });
  }
};


const prevSlide = () => {
  if (isMobile) {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  } else {
    const card = carouselRef.current.querySelector(".carousel-slide");
    const cardStyle = window.getComputedStyle(card);
    const cardWidth = card.offsetWidth;
    const gap = parseInt(cardStyle.marginRight || 0);
    const totalScroll = cardWidth + gap;

    carouselRef.current.scrollBy({ left: -totalScroll, behavior: "smooth" });
  }
};



  


  // Handle touchpad & mouse drag (no clicking required)
  

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
      ref={carouselRef}
      className="carousel-wrapper"
    >
      <div className="slider-container">
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
      </div>
    </div>
  )}
</section>
    </div>
  );
};

export default ServicesCarousel;
