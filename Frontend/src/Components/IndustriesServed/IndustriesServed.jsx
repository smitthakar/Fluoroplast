import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import aerospaceImg from "../../assets/Aerospace.png";
import industrialImg from "../../assets/Industrial.png";
import oilGasImg from "../../assets/Oil.png";
import chemicalImg from "../../assets/Chemical.png";
import arr from "../../assets/Arrow rigth.png";
import arrLeft from "../../assets/Arrow left.png";

const industries = [
  { name: "Automotive", src: chemicalImg },
  { name: "Aerospace", src: aerospaceImg },
  { name: "Industrial Machinery", src: industrialImg },
  { name: "Oil & Gas", src: oilGasImg },
  { name: "Chemical Processing", src: chemicalImg },
  { name: "Automotive", src: aerospaceImg },
  { name: "Automotive", src: chemicalImg },
  { name: "Aerospace", src: aerospaceImg },
  { name: "Industrial Machinery", src: industrialImg },
  { name: "Oil & Gas", src: oilGasImg },
  { name: "Chemical Processing", src: chemicalImg },
  { name: "Automotive", src: aerospaceImg }
];

const IndustriesCarousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % industries.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + industries.length) % industries.length);
  };

  return (
    <div className="w-full flex flex-col items-center py-10 bg-white">
     <h3 className="text-[#9D0A0E] font-[800] text-[24px] leading-[33.6px] tracking-[6%] text-center " style={{ fontFamily: 'Red Hat Display' }}>INDUSTRIES SERVED</h3>
     <h2 className="text-black font-[800] text-[60px] leading-[84px] tracking-[0%] text-center " style={{ fontFamily: 'Red Hat Display' }}>Our Best Industries</h2>

      <div className="relative flex items-center mt-6 w-4/5 overflow-hidden">
        {/* Left Button */}
        <button
            onClick={prevSlide}
             className="absolute top-16  w-14 h-14 flex items-center justify-center bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition p-4 z-10 shadow-lg"
          >
            <img src={arrLeft} alt="" />
          </button>

        <div
          className="flex transition-transform duration-500 ease-in-out "
          style={{ transform: `translateX(-${index * (100 / 6)}%)`, width: `${(industries.length * 100) / 6}%` }}
        >
          {industries.map((industry, idx) => (
            <div key={idx} className="w-1/6 text-center flex-shrink-0">
              <img
                src={industry.src}
                alt={industry.name}
                className="w-full h-[200px] object-contain"
              />
              <p className="text-black mt-2 text-base font-semibold">{industry.name}</p>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
            onClick={nextSlide}
            className="absolute top-16 right-0 w-14 h-14 flex items-center justify-center bg-red-700 text-white rounded-full hover:bg-red-800 transition p-4 z-10 shadow-lg"
          >
            <img src={arr} alt="" />
          </button>
      </div>
    </div>
  );
};

export default IndustriesCarousel;