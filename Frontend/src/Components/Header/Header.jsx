import { useEffect, useState, useRef } from "react";
import slider1 from "../../assets/HeroOne.png";
import slider2 from "../../assets/HeroTwo.png";
import slider3 from "../../assets/HeroThree.png";
import slider4 from "../../assets/HeroFour.png";
import { FaArrowRight } from "react-icons/fa";
import './Header.css';

const images = [slider1, slider2, slider3, slider4];

// Clone first and last images for a seamless loop
const extendedImages = [images[images.length - 1], ...images, images[0]];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at first real image
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    if (currentIndex === extendedImages.length - 1) {
      // Delay reset to remove transition effect
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
        setTimeout(() => setIsTransitioning(true), 50); // Restore transition effect
      }, 1000);
    }
  }, [currentIndex]);

  const handleDotClick = (index) => {
    setCurrentIndex(index + 1); // Adjust to match extended array index
  };

  return (
    <>
      <div className="custom-container">
        {/* Hero Text Overlay */}
        <div className="custom-absolute-container">
          <h1 className="custom-heading">
            Global Leaders in Engineering Plastics, <br /> Hydraulic Seals, &{" "}
            <br />
            Advanced Industrial Solutions.
          </h1>
          <p className="custom-paragraph">
            Innovating for Over 30 Years | Expanding for the Future.
          </p>
          <button className="custom-button">
  <span>Explore Our Products</span>

  {/* Right Arrow - Moves Right on Hover */}
  <span className="arrow">
    <FaArrowRight className="ml-20" />
  </span>
</button>

        </div>

        {/* Image Slider */}
        <div
  ref={sliderRef}
  className={`custom-slider-container ${isTransitioning ? "" : "no-transition"}`}
  style={{
    transform: `translateX(-${currentIndex * 100}%)`,
  }}
>
          {extendedImages.map((img, index) => (
            <div
            key={index}
            className="custom-slide"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="custom-pagination-container">
  {images.map((_, index) => (
    <span
      key={index}
      className={`custom-dot ${
        index === (currentIndex - 1 + images.length) % images.length
          ? "active"
          : ""
      }`}
      onClick={() => handleDotClick(index)}
    />
  ))}
</div>

      </div>

      {/* Stats Section */}
      <div className="custom-stats-container">
  <div className="custom-stats-grid">
    <div className="custom-stat-item">
      <p className="custom-stat-number">25,000</p>
      <span className="custom-stat-text">Sq Feet Area of  Manufacturing</span>
    </div>
    <div className="custom-stat-item">
      <p className="custom-stat-number">25,000</p>
      <span className="custom-stat-text">SKU Products</span>
    </div>
    <div className="custom-stat-item">
      <p className="custom-stat-number">500+</p>
      <span className="custom-stat-text">Products in Portfolio</span>
    </div>
    <div className="custom-stat-item">
      <p className="custom-stat-number">500+</p>
      <span className="custom-stat-text">Customers Network</span>
    </div>
    <div className="custom-stat-item last">
      <p className="custom-stat-number">7+</p>
      <span className="custom-stat-text">Countries Served</span>
    </div>
  </div>
</div>

    </>
  );
};

export default HeroSlider;
