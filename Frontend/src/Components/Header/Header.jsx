import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import slider1 from "../../assets/HeroOne.png";
import slider2 from "../../assets/HeroTwo.png";
import slider3 from "../../assets/HeroThree.png";
import slider4 from "../../assets/HeroFour.png";

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

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index + 1); // Adjust to match extended array index
  };

  return (
    <>
      <div className="w-full mx-auto relative h-175 overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 z-10">
          <h1 className="text-6xl w-full font-bold justify-center text-center">
            Global Leaders in Engineering Plastics, <br /> Hydraulic Seals, &
            <br /> Advanced Industrial Solutions.
          </h1>
          <p className="mt-5 text-2xl">
            Innovating for Over 30 Years | Expanding for the Future.
          </p>
          <button className="mt-4 bg-red-500 text-white px-6 py-2 rounded-full text-lg transition duration-300 ease-in-out border border-red-500 flex items-center space-x-2 group shadow-md hover:bg-white hover:text-red-500">
            <span className="transition-all duration-300 ease-in-out">
              Explore Our Products
            </span>
            <span className="transition-all duration-300 ease-in-out">→</span>
          </button>
        </div>

        {/* Image Slider */}
        <div
          ref={sliderRef}
          className="absolute inset-0 w-full h-full flex transition-transform duration-1000 ease-linear"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? "transform 1s ease-in-out" : "none",
          }}
        >
          {extendedImages.map((img, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-25 left-1/2 transform -translate-x-1/2 flex space-x-2">
  {images.map((_, index) => (
    <motion.span
      key={index}
      className={`relative w-[15px] h-[15px] flex items-center justify-center rounded-full border-2 border-white cursor-pointer transition-all duration-500 ease-in-out ${
        index !== currentIndex % images.length ? "bg-white" : "bg-transparent"
      }`}
      onClick={() => handleDotClick(index)}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  ))}

  {/* Sliding Active Button */}
  <span
    className="absolute w-[15px] h-[15px]  rounded-full border-2 border-white bg-transparent"
   
  />
</div>;


      {/* Stats Section */}
      <div className="w-full bg-white mt-0 mb-20 flex justify-center border-b border-gray-300">
        <div className="grid grid-cols-5 text-center pl-20 pr-20 text-red-700 font-bold text-3xl w-full border-b border-gray-300">
          {[
            { value: "25,000", label: "Sq Feet Area of Manufacturing" },
            { value: "25,000", label: "SKU Products" },
            { value: "500+", label: "Products in Portfolio" },
            { value: "500+", label: "Customers Network" },
            { value: "7+", label: "Countries Served" },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`py-4 flex flex-col items-center p-20 pt-10 pb-10 ${
                idx !== 4 ? "border-r border-gray-300" : ""
              }`}
            >
              <p className="text-4xl">{item.value}</p>
              <span className="text-gray-600 text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
