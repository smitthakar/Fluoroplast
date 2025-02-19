import { FaArrowRight } from "react-icons/fa";
import cylinder from "../../assets/cylinder.png"; 
import Seals from "../../assets/seals.png";
import plastic from "../../assets/EngineeringPlastic.png";
import valves from "../../assets/Valves&Fittings.png";
import machinery from "../../assets/IndustrialMachinery.png";
import IndustrialMachinery from "../../assets/IndustrialMachinery.png";
import valves1 from "../../assets/Valves & Fittings.png"; 
import plastic1 from "../../assets/EngineeringPlastic.png";
import seals1 from "../../assets/Valves&Fittings.png";
import plastic2 from "../../assets/EngineeringPlastic.png";
import valves2 from "../../assets/Valves & Fittings.png";

export default function GridLayout() {
  const items = [
    { id: 1, label: "Hydraulic Cylinders", description: "Engineering plastics are high-performance materials.", image: cylinder },
    { id: 2, label: "Hydraulic Seals", description: "High-durability seals for hydraulic applications.", image: Seals },
    { id: 3, label: "Engineering Plastic", description: "Strong and lightweight industrial plastic.", image: plastic },
    { id: 4, label: "Valves & Fittings", description: "Precision-engineered valves for fluid control.", image: valves },
    { id: 5, label: "Industrial Machinery", description: "Advanced machinery for manufacturing needs.", image: machinery },
    { id: 6, label: "Industrial Machinery", description: "High-performance industrial tools.", image: IndustrialMachinery },
    { id: 7, label: "Valves & Fittings", description: "Reliable fittings for fluid regulation.", image: valves1 },
    { id: 8, label: "Engineering Plastic", description: "Durable and flexible plastic materials.", image: plastic1 },
    { id: 9, label: "Hydraulic Seals", description: "Sealing solutions for high-pressure systems.", image: seals1 },
    { id: 10, label: "Hydraulic Cylinders", description: "Powerful hydraulic force components.", image: cylinder },
    { id: 11, label: "Hydraulic Cylinders", description: "Reliable cylinders for industrial use.", image: plastic2 },
    { id: 12, label: "Valves & Fittings", description: "Quality valves for various industries.", image: valves2 }
  ];

  return (
    <div className="p-20 pt-[80px] px-[144px] py-[112px] w-full h-auto">
      <div className="text-center mb-8">
        <p className="text-[#9D0A0E] text-[24px] leading-[33.6px] font-semibold font-redhat">
          NEW PRODUCTS/EXPANSIONS
        </p>
        <h2 className="text-[#0A0A0A] text-[60px] leading-[84px] text-center font-redhat font-semibold">
          Feature The Latest Expansions
        </h2>
      </div>
      
      {/* Grid Container with Fixed Width for Exactly 6 Images Per Row */}
      <div className="w-full">
        <div className="grid grid-cols-6 gap-[24px] justify-center">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative bg-white shadow-lg rounded-[8px] flex flex-col items-center w-[210px] h-[300px] overflow-hidden group transition-all duration-300"
            >
              {/* Image Container - Centered Image */}
              <div className="flex-grow flex justify-center items-center w-full h-[250px]">
                <img
                  src={item.image}
                  alt={item.label}
                  className="max-h-full max-w-full object-contain transition-all duration-300 group-hover:opacity-0"
                />
              </div>
              <div className="absolute inset-0 bg-[#9D0A0E] flex flex-col items-start justify-between p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <div>
                  <p className="text-white font-manrope font-semibold text-[16px] leading-[24px]">
                    {item.label}
                  </p>
                  <p className="text-white text-sm mt-2">{item.description}</p>
                </div>

                {/* Bottom Section - Read More */}
                <div className="w-full">
                  <div className="w-full h-[1px] bg-white my-2"></div>
                  <button className="flex items-center justify-between text-white font-manrope font-semibold text-[16px] leading-[24px] w-full">
                    <span>Read More</span> <FaArrowRight />
                  </button>
                </div>
              </div>

              {/* Bottom Product Title - Always at the Bottom */}
              <p className="text-center text-gray-700 font-manrope font-semibold text-[16px] leading-[24px] w-full pb-4">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
