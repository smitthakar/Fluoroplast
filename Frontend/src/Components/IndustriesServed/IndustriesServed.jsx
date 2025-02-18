import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import automotiveImg from "../../assets/Automotive.png";
import aerospaceImg from "../../assets/Aerospace.png";
import industrialImg from "../../assets/Industrial.png";
import oilGasImg from "../../assets/Oil.png";
import chemicalImg from "../../assets/Chemical.png";

const industries = [
  { name: "Automotive", src: automotiveImg },
  { name: "Aerospace", src: aerospaceImg },
  { name: "Industrial Machinery", src: industrialImg },
  { name: "Oil & Gas", src: oilGasImg },
  { name: "Chemical Processing", src: chemicalImg },
  { name: "Automotive", src: automotiveImg }
];

const IndustriesCarousel = () => {
  const [index, setIndex] = useState(0);
  const itemsPerSlide = 6;
  const totalSlides = Math.ceil(industries.length / itemsPerSlide);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="w-full flex flex-col items-center py-10 bg-white">
      <h3 className="text-red-600 font-semibold text-sm">INDUSTRIES SERVED</h3>
      <h2 className="text-3xl font-bold text-black">Our Best Industries</h2>

      <div className="relative flex items-center mt-6 overflow-hidden w-4/5">
        {/* Left Button */}
        <button 
          className="absolute left-7 bg-red-500 p-3 rounded-full z-10 text-white shadow-lg -ml-4"
          onClick={prevSlide}
        >
          <FaArrowLeft size={20} />
        </button>

        <div className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * (100 / totalSlides)}%)`, width: `${totalSlides * 100}%` }}>
          {industries.map((industry, idx) => (
            <div key={idx} className="w-1/6 flex-shrink-0 shadow-md rounded-lg text-center bg-white">
              <div className="p-2">
                <img
                  src={industry.src}
                  alt={industry.name}
                  className=" w-full h-40 object-cover"
                />
              </div>
              <p className="text-black mt-2 text-base font-semibold">{industry.name}</p>
            </div>
          ))}
        </div>
        
        {/* Right Button */}
        <button 
          className="absolute right-10 bg-red-500 p-3 rounded-full z-10 text-white shadow-lg -mr-4"
          onClick={nextSlide}
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default IndustriesCarousel;
