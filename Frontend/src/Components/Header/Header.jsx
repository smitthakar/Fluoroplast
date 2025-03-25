import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import slider1 from "../../assets/HeroOne.png";
import slider2 from "../../assets/HeroTwo.png";
import slider3 from "../../assets/HeroThree.png";
import slider4 from "../../assets/HeroFour.png";
import { FaArrowRight } from "react-icons/fa";
import "./Header.css";

const images = [slider1, slider2, slider3, slider4];

const stats = [
  { value: "25000", label: "Sq Feet Area of Manufacturing" },
  { value: "25000", label: "SKU Products" },
  { value: "500", label: "Products in Portfolio", suffix: "+" },
  { value: "500", label: "Customers Network", suffix: "+" },
  { value: "7", label: "Countries Served", suffix: "+" },
];

// Clone first and last images for seamless loop
const extendedImages = [images[images.length - 1], ...images, images[0]];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const sliderRef = useRef(null);
  const statsRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  // Handle resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Looping reset
  useEffect(() => {
    if (currentIndex === extendedImages.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 1000);
    }
  }, [currentIndex]);

  // Dots
  const handleDotClick = (index) => {
    setCurrentIndex(index + 1);
  };

  // Trigger counting animation when stats section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="custom-container">
        {/* Hero Text Overlay */}
        <div className="custom-absolute-container">
          <h1 className="custom-heading">
            Global Leaders in Engineering Plastics, <br /> Hydraulic Seals, & <br />
            Advanced Industrial Solutions.
          </h1>
          <p className="custom-paragraph">
            Innovating for Over 30 Years | Expanding for the Future.
          </p>
          <button className="custom-button">
            <span>Explore Our Products</span>
            <span className="arrow">
              <FaArrowRight className="ml-20" />
            </span>
          </button>
        </div>

        {/* Image Slider */}
        <div
          ref={sliderRef}
          className={`custom-slider-container ${isTransitioning ? "" : "no-transition"}`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {extendedImages.map((img, index) => (
            <div key={index} className="custom-slide" style={{ backgroundImage: `url(${img})` }}></div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="custom-pagination-container">
          {images.map((_, index) => (
            <span
              key={index}
              className={`custom-dot ${
                index === (currentIndex - 1 + images.length) % images.length ? "active" : ""
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="custom-stats-container" ref={statsRef}>
        <div className="custom-stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`custom-stat-item ${index === stats.length - 1 ? "last" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={startCount ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="custom-stat-number">
                {startCount ? (
                  <CountUp end={parseInt(stat.value, 10)} suffix={stat.suffix || ""} />
                ) : (
                  "0"
                )}
              </p>
              <span className="custom-stat-text">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSlider;


//
// CountUp using Framer Motion
//
const CountUp = ({ end, suffix = "", duration = 1.5 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest).toLocaleString());
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const controls = animate(count, end, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplay(Math.floor(latest).toLocaleString());
      },
    });

    return controls.stop;
  }, [end]);

  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {display}
      {suffix}
    </motion.span>
  );
};
