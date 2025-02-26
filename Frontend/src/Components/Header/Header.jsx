import { useEffect, useState, useRef } from "react";
import slider1 from "../../assets/HeroOne.png";
import slider2 from "../../assets/HeroTwo.png";
import slider3 from "../../assets/HeroThree.png";
import slider4 from "../../assets/HeroFour.png";
import { FaArrowRight } from "react-icons/fa";

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
      <div className="w-full mx-auto my-[65px] relative h-[700px] overflow-hidden">
        {/* Hero Text Overlay */}
        <div className="absolute  w[1632px] h-[667px] gap-[40px] inset-0 flex flex-col items-center justify-center text-white px-6 z-10">
          <h1 className="text-[65px] w-[1232px] font-medium justify-center text-center text-6xl  font-redhat leading-[75px] ">
            Global Leaders in Engineering Plastics, <br /> Hydraulic Seals, &{" "}
            <br />
            Advanced Industrial Solutions.
          </h1>
          <p className="text-2xl font-redhat">
            Innovating for Over 30 Years | Expanding for the Future.
          </p>
          <button className="w-[250px] h-[55px] rounded-full border-transparent bg-gradient-to-r from-[#9D0A0E] to-[#F15922] text-white font-semibold
   ease-in-out transform flex items-center justify-center relative group 
  hover:bg-white hover:bg-none hover:text-[#9D0A0E] hover:border-2 hover:border-[#9D0A0E] ">
  
  <span className="absolute ">Explore Our Products</span>

  {/* Right Arrow - Appears and Moves Right on Hover */}
  <span className="opacity-0 transform translate-x-0 transition-all duration-300 ease-in-out text-[#9D0A0E] 
      group-hover:opacity-100 group-hover:translate-x-12">
    <FaArrowRight className="ml-20" />
  </span>

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

        {/* Dot Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-[15px] h-[15px] rounded-full border-2 border-white cursor-pointer transition-all duration-500 ease-in-out ${
                index === (currentIndex - 1 + images.length) % images.length
                  ? "bg-white"
                  : "bg-transparent"
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full bg-white  -mt-[65px] mb-20 flex justify-center border-b border-gray-300">
        <div className="grid grid-cols-5   text-center pl-[144px] pr-[144px] text-red-700 font-bold text-3xl w-full border-b border-gray-300">
          <div className="border-r rounded-[2px] border-gray-300 py-4 flex flex-col items-center  pt-[56px] pr-[48px] pb-[56px] pl-[48px] ">
            <p className="text-4xl font-redhat">25,000</p>
            <span className="text-[#0A0A0A] text-[24px] leading-[28.6px] font-normal mt-4 w-[165px] h-[48px] flex items-center justify-center font-redhat">
              Sq Feet Area of Manufacturing
            </span>
          </div>
          <div className="border-r rounded-[2px] border-gray-300 py-4 flex flex-col items-center pt-[56px] pr-[48px] pb-[56px] pl-[48px]">
            <p className="text-4xl font-redhat ">25,000</p>
            <span className="text-[#0A0A0A] text-[24px] leading-[28.6px] font-normal mt-4 w-[125px] h-[48px] flex items-center justify-center font-redhat">
              SKU Products
            </span>
          </div>
          <div className="border-r rounded-[2px] border-gray-300 py-4 flex flex-col items-center pt-[56px] pr-[48px] pb-[56px] pl-[48px]">
            <p className="text-4xl font-redhat ">500+</p>
            <span className="text-[#0A0A0A] text-[24px] leading-[28.6px] font-normal mt-4 w-[125px] h-[48px] flex items-center justify-center font-redhat">
              Products in Portfolio
            </span>
          </div>
          <div className="border-r rounded-[2px] border-gray-300 py-4 flex flex-col items-center pt-[56px] pr-[48px] pb-[56px] pl-[48px]">
            <p className="text-4xl font-redhat">500+</p>
            <span className="text-[#0A0A0A] text-[24px] leading-[28.6px] font-normal mt-4 w-[125px] h-[48px] flex items-center justify-center font-redhat">
              Customers Network
            </span>
          </div>
          <div className="py-4 flex flex-col items-center pt-[56px] pr-[48px] pb-[56px] pl-[48px]">
            <p className="text-4xl font-redhat">7+</p>
            <span className="text-[#0A0A0A] text-[24px] leading-[28.6px] font-normal mt-4 w-[125px] h-[48px] flex items-center justify-center font-redhat">
              Countries Served
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
