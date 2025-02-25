import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import aerospaceImg from "../../assets/Aerospace.png";
import industrialImg from "../../assets/Industrial.png";
import oilGasImg from "../../assets/Oil.png";
import chemicalImg from "../../assets/Chemical.png";

const industries = [
  { name: "Aerospace", src: aerospaceImg },
  { name: "Industrial Machinery", src: industrialImg },
  { name: "Oil & Gas", src: oilGasImg },
  { name: "Chemical Processing", src: chemicalImg },
  { name: "Aerospace", src: aerospaceImg },
  { name: "Industrial Machinery", src: industrialImg },
  { name: "Oil & Gas", src: oilGasImg },
  { name: "Chemical Processing", src: chemicalImg },
  { name: "Oil & Gas", src: oilGasImg },
  { name: "Chemical Processing", src: chemicalImg },
];

const IndustriesCarousel = () => {
  const [index, setIndex] = useState(0);
  const itemsPerSlide = 6;
  const totalItems = industries.length;

  const nextSlide = () => {
    if (index + itemsPerSlide < totalItems) {
      setIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full flex flex-col items-center py-10 bg-white">
      <h3 className="text-red-600 font-semibold text-sm">INDUSTRIES SERVED</h3>
      <h2 className="text-3xl font-bold text-black">Our Best Industries</h2>

      <div className="relative flex items-center mt-6 overflow-hidden w-4/5">
        <button 
          className="absolute left-7 bg-red-500 p-3 rounded-full z-10 text-white shadow-lg -ml-4"
          onClick={prevSlide}
          disabled={index === 0}
        >
          <FaArrowLeft size={20} />
        </button>

        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * (100 / itemsPerSlide)}%)`, width: `${(totalItems / itemsPerSlide) * 100}%` }}
        >
          {industries.map((industry, idx) => (
            <div key={idx} className="w-1/6 flex-shrink-0 text-center bg-white px-2">
              <img
                src={industry.src}
                alt={industry.name}
                className="w-[250px] h-[250px] object-contain mx-auto"
              />
              <p className="text-black mt-2 text-base font-semibold -mt-7">{industry.name}</p>
            </div>
          ))}
        </div>

        <button 
          className="absolute right-10 bg-red-500 p-3 rounded-full z-10 text-white shadow-lg -mr-4"
          onClick={nextSlide}
          disabled={index + itemsPerSlide >= totalItems}
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default IndustriesCarousel;
