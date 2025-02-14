import { useState } from "react";
import GroupOne from "../../assets/GroupOne.png";
import GroupTwo from "../../assets/GroupTwo.png";
import GroupThree from "../../assets/GroupThree.png";
import pneumatic from "../../assets/pneumatic.png";
import combination from "../../assets/combination.png";

const services = [
  {
    title: "Engineering Plastics",
    description:
      "High-performance materials with mechanical and thermal properties, used in automotive, aerospace, and electronics.",
    icon:  GroupOne,
  },
  {
    title: "Hydraulic Seals",
    description:
      "Critical components designed to prevent fluid leakage and maintain pressure in hydraulic systems, ensuring efficient operation.",
    icon: GroupTwo,
  },
  {
    title: "Compressor Parts",
    description:
      "Essential components used to repair or maintain compressors, ensuring optimal performance.",
    icon: GroupThree,
  },
  {
    title: "Hydraulic Cylinders",
    description:
      "Mechanical actuators that convert hydraulic energy into linear motion, providing force in lifting, pushing, and pulling.",
    icon: pneumatic,
  },
  {
    title: "FEP and PFA Lined Valves & Fittings",
    description:
        "FEP and PFA lined valves and fittings offer high chemical resistance for corrosive fluid handling industries like chemical and pharmaceuticals.",
    icon:combination,
  }
];

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const nextSlide = () => {
    if (currentIndex + itemsPerPage < services.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <section className="text-center py-16 relative">
     

      {/* Section Title */}
      <p className="text-red-700 font-bold uppercase tracking-widest">
        The Best Industry and Company Services
      </p>
      <h2 className="text-4xl font-bold mt-2">
        Provides High Performance Services
      </h2>
       {/* Navigation Buttons (Moved Above Title) */}
       <div className="flex justify-end items-center gap-4 mb-35 mt-[-50px] pr-40">
        <button
          onClick={prevSlide}
          className="w-10 h-10 flex items-center justify-center bg-red-100 text-red-600 rounded-full shadow-lg hover:bg-red-200 transition"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 flex items-center justify-center bg-red-700 text-white rounded-full shadow-lg hover:bg-red-800 transition"
        >
          →
        </button>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative w-full flex justify-end text-start mt-10 ">
        {/* Slider Container */}
        <div className="w-[90%] flex overflow-hidden ">
          {services.slice(currentIndex, currentIndex + itemsPerPage).map((service, index) => (
            <div
              key={index}
              className="flex-none w-full sm:w-1/2 lg:w-1/4 px-2 transition-transform duration-500 hover:text-white "
            >
              <div className="bg-white  shadow-lg rounded-xl p-6 border hover:bg-red-700  transition-all hover:text-white">
              <img
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12 transition-all duration-300 items-start "
                />
                <h3 className="font-bold text-xl mt-4">{service.title}</h3>
                <p className="text-gray-600  text-sm mt-2">{service.description}</p>
                <a href="#" className="text-red-600 font-bold mt-4 block">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
