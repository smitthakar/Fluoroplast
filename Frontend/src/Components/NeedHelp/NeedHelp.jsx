import backgroundImage from "../../assets/help.png";
import { FaArrowRight } from "react-icons/fa";

export default function CallToAction() {
  return (
    <div 
      className="relative bg-[#510002] text-white flex justify-between items-center bg-cover bg-center ml-[120px] mb-[-70px]"
      style={{ 
        backgroundImage: `linear-gradient(rgba(128, 0, 0, 0.85), rgba(128, 0, 0, 0.85)), url(${backgroundImage})`,
        width: "1332px",
        height: "112px",
        paddingTop: "64px",
        paddingRight: "40px",
        paddingBottom: "64px",
        paddingLeft: "40px",
        borderRadius: "8px"
      }}
    >
      {/* CTA Content */}
      <div className="relative z-10 flex flex-col gap-2">
        <h2 className="text-4xl font-bold">Need Help? Call Us Today</h2>
      </div>

      {/* CTA Button */}
      <div className="relative z-10">
        <button className="w-[250px] h-[60px] px-[24px] py-[16px] rounded-[48px] border-[2px] mt-[20px] border-[#9D0A0E] bg-white text-[#9D0A0E] font-semibold font-['Manrope'] shadow-md 
          transition-all duration-300 ease-in-out relative flex items-center justify-center gap-2 group 
          hover:bg-gradient-to-r hover:from-[#9D0A0E] hover:to-[#F15922] hover:text-white">
          
          Let&apos;s Talk
        
          {/* Right Arrow - Initially Hidden, Appears & Moves on Hover */}
          <span className="opacity-0 transform translate-x-0 transition-all duration-300 ease-in-out text-white 
              group-hover:opacity-100 group-hover:translate-x-2">
          <FaArrowRight />
        </span>
        
        </button>
      </div>
    </div>
  );
}