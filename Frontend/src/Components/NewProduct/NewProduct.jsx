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
    <div className="p-20 pt-[112px] pr-[144px] pl-[144px] pb-[12px] w-full h-auto">
      <div className="text-center mb-8">
        <p className="text-[#9D0A0E] text-[24px] leading-[33.6px] font-semibold font-redhat">
          NEW PRODUCTS/EXPANSIONS
        </p>
        <h2 className="text-[#0A0A0A] text-[60px] leading-[84px] text-center font-redhat font-semibold">
          Feature The Latest Expansions
        </h2>
      </div>
      
      {/* Grid Container with Reduced Gap */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-[10px] w-full h-auto rounded-[8px] py-[16px]">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative bg-white shadow-lg rounded-[8px] flex flex-col items-center w-[250px] h-[328px] overflow-hidden group transition-all duration-300"
          >
            {/* Product Image (Hidden on Hover) */}
            <img
              src={item.image}
              alt={item.label}
              className="h-full w-full object-contain rounded-md transition-all duration-300 group-hover:opacity-0"
            />

            {/* Hover Overlay (Red Background) */}
            <div className="absolute inset-0 bg-[#9D0A0E] flex flex-col items-start justify-between p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
              {/* Product Info */}
              <div>
                <p className="text-white font-manrope font-semibold text-[16px] leading-[28px]">
                  {item.label}
                </p>
                <p className="text-white text-sm mt-2">{item.description}</p>
              </div>

              {/* Bottom Section - Read More */}
              <div className="w-full">
                {/* White Separator Line */}
                <div className="w-full h-[1px] bg-white my-2"></div>

                {/* Read More Button */}
                <button className="flex items-center justify-between text-white font-manrope font-semibold text-[16px] leading-[28px] w-full">
                  <span>Read More</span> <FaArrowRight />
                </button>
              </div>
            </div>

            {/* Bottom Product Title (Hidden on Hover) */}
            <p className="text-center text-gray-700 font-manrope font-semibold text-[16px] leading-[28px] w-[204px] h-[28px] transition-all duration-300 group-hover:opacity-0">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
