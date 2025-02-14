import { motion } from "framer-motion";
import map from "../../assets/map.png"
import arr from "../../assets/Arrow rigth.png"

const GlobalPresence = () => {
  return (
    <div className="relative w-full h-[1354px] bg-[#400000] flex flex-col items-center justify-center text-white pt-[200px]">
      {/* Title */}
      <motion.h2 
        className="text-lg font-semibold uppercase"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        GLOBAL PRESENCE
      </motion.h2>

      <motion.h1
        className="text-3xl font-bold text-center mt-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        We Export & Cater To Following Countries
      </motion.h1>

      {/* CTA Button */}
      <button
  className="mt-4 pt-[16px] pb-[16px] pr-[16px] pl-[24px] gap-[8px] bg-white text-red-700 rounded-full font-semibold shadow-md border-[2px] border-red-700 transition-all duration-500 w-[200px] h-[50px] rounded-[48px] bo
  hover:bg-gradient-to-r hover:from-[#9D0A0E] hover:to-[#F15922] hover:text-white hover:shadow-lg flex items-center justify-center space-x-2 overflow-hidden group"
>
  <span className="whitespace-nowrap">Find A Distributor</span>
  {/* Sliding Custom Arrow (Appears on Hover) */}
  <img
    src={arr}
    alt="Arrow"
    className="w-[20px] h-[20px] transform translate-x-[-10px] opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 group-hover:invert"
  />
</button>




      {/* Map Section with Background */}
      <div className="relative w-[100%] h-[70%] mt-8">
        <img
          src={map} // Using your uploaded image
          alt="Hexagonal World Map"
          className="w-[1920px] h-[899.7px] object-contain "
        />
      </div>
    </div>
  );
};

export default GlobalPresence;
