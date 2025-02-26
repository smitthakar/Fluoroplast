import { useState, useRef } from "react";
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
        Compressor  <br /> Parts
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

  // Move to next slide
  const nextSlide = () => {
    if (currentIndex < services.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Move to previous slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Swipeable gesture handling
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
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
    <div>
      <div className="text-center justify-center py-16 pl-[50px] relative z-20">
        <p className="text-red-700 font-extrabold uppercase text-[24px] leading-[33.6px] text-center tracking-[0.06em] font-redhat">
          The Best Industry and Company Services
        </p>

        <h2 className="text-[60px] leading-[74px] font-extrabold text-center mt-2 font-redhat">
          Provides High Performance Services
        </h2>

        {/* Navigation Buttons */}
        <div className="flex justify-end items-center gap-4 mb-2 mt-[-90px] pr-8">
          <button
            onClick={prevSlide}
            className="w-[56px] h-[56px] flex items-center justify-center bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition"
          >
            <img src={arrLeft} alt="" />
          </button>
          <button
            onClick={nextSlide}
            className="w-[56px] h-[56px] flex items-center justify-center bg-red-700 text-white rounded-full  hover:bg-red-800 transition"
          >
            <img src={arr} alt="" />
          </button>
        </div>
      </div>

      <section className="text-center justify-center py-0 pl-[50px] mt-[-20px] ml-[150px] relative z-20">
        {/* Section Title */}

        {/* Carousel Wrapper (Handles Touchpad Dragging) */}
        <div
          {...handlers}
          ref={carouselRef}
          className="relative w-full flex justify-start text-start mt-10 overflow-hidden pl-[5%] cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Animated Slider Container (Adding Infinite Motion) */}
          <motion.div
            className="flex w-full"
            animate={{
              x: ["0%", "-100%"], // Moves from right to left
            }}
            transition={{
              duration: 35, // Slow movement (increase for even slower)
              repeat: Infinity, // Infinite loop
              ease: "linear", // Smooth transition
            }}
          >
            {infiniteServices.map((service, index) => (
              <div
                key={index}
                className="flex-none sm:w-1/2 lg:w-1/4 px-4 duration-500"
              >
                <div className="bg-white shadow-lg rounded-xl   w-[300px] text-left h-[370px] p-[32px] gap-[16px] hover:bg-red-700 flex flex-col justify-start group">
                  {/* Icon & Title */}
                  <div>
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-15 h-15 group-hover:invert group-hover:brightness-0"
                    />
                    <h3 className="text-[24px] leading-[33.6px] font-extrabold w-[240px] mt-4 group-hover:text-white font-redhat">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-[16px] leading-[22.4px] font-normal mt-2 group-hover:text-white font-manrope">
                      {service.description}
                    </p>
                  </div>

                  {/* Fixed Read More Button */}
                  <a
                    href="#"
                    className="text-[#0A0A0A] font-bold mt-auto pt-2  group-hover:text-white flex justify-between items-center"
                  >
                    Read More
                    <span className="opacity-0 group-hover:opacity-100   transform group-hover:translate-x-1 group-hover:scale-125 text-lg">
                      <FaArrowRight className="w-[15px] h-[15px]" />
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesCarousel;
