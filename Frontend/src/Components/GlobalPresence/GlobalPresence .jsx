import { motion } from "framer-motion";
import map from "../../assets/map.png"
import { FaArrowRight } from "react-icons/fa";
import arr from "../../assets/Arrow rigth.png";

const GlobalPresence = () => {
  return (
    <div className="mt-[-60px] relative w-full h-[1154px] bg-[#400000] flex flex-col items-center justify-center text-white pt-[200px]">
      {/* Title */}
      <motion.h2
        className="text-[24px] leading-[33.6px] font-extrabold uppercase text-center -mt-[240px] tracking-[0.06em] font-redhat"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        GLOBAL PRESENCE
      </motion.h2>

      <motion.h1
        className="text-[60px] leading-[84px] font-bold text-center mt-2 font-redhat"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        We Export & Cater To Following Countries
      </motion.h1>

      {/* CTA Button */}

      <button
        className="w-[250px] h-[60px] px-[24px] py-[16px] rounded-[48px] border-[2px] mt-[20px] border-[#9D0A0E] bg-white text-[#9D0A0E] font-semibold font-['Manrope'] shadow-md 
        ease-in-out relative flex items-center justify-center gap-2 group 
        hover:bg-gradient-to-r hover:from-[#9D0A0E] hover:to-[#F15922] hover:text-white"
      >
        Find A Distributor
        {/* Right Arrow - Initially Hidden, Appears & Moves on Hover */}
        <span
          className="opacity-0 transform translate-x-0 transition-all duration-300 ease-in-out text-white 
            group-hover:opacity-100 group-hover:translate-x-2"
        >
          <FaArrowRight />
        </span>
      </button>
      

      {/* Map Section with Background */}
      <div className="relative w-[100%] h-[60%] ">
        <img
          src={map} // Using your uploaded image
          alt="Hexagonal World Map"
          className="w-[1220px] h-[899.7px] object-contain ml-[10%]"
        />
      </div>
    </div>
  );
};

export default GlobalPresence;
