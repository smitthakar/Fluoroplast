import newImage from "../../assets/Group 1.png"; // Your combined image
import { FaArrowRight } from "react-icons/fa6";

const AboutUsSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white w-full min-h-[900px] py-[112px] px-[144px] gap-[80px]">
      

      {/* Right Content - Text */}
      <div className="w-full lg:w-[50%] flex flex-col gap-6">
        <h3 className="text-red-600 font-semibold font-['Red Hat Display'] text-[24px] uppercase tracking-widest -mb-8">
          About Us
        </h3>
        <h2 className="text-black font-extrabold font-['Red Hat Display'] text-[55px] leading-tight whitespace-nowrap overflow-hidden text-clip">
  Delivering Excellence
</h2>

        <p className="text-[30px] text-gray-700">
          All the parts are available as per the customer design, drawing & sample with
          <span className="font-bold text-[#9D0A0E]"> 100% PTFE as well as filled grade PTFE</span>.
        </p>
        <p className="text-gray-600 text-[16px] lh-[28px]">
          Fluoroplast Engineers Pvt Ltd (FEPL), established in 1994, is a leading manufacturer of PTFE and specialty products. 
          With a strong commitment to quality and innovation, FEPL has grown from a small venture to a trusted global supplier of PTFE products and compressor spares for major industries.
        </p>
        <p className="text-gray-600 text-[16px] lh-[28px]">
          Based in Ahmedabad, Gujarat, India, the company has been serving the market since 1996, consistently delivering efficient and high-quality solutions to meet customer needs. 
          FEPL continues to expand its reach, developing export markets worldwide.
        </p>
        <button className="w-[200px] h-[55px] rounded-full border-transparent bg-gradient-to-r from-[#9D0A0E] to-[#F15922] text-white font-semibold
  transition-all duration-300 ease-in-out transform flex items-center justify-center gap-2 group 
  hover:scale-105 hover:bg-white hover:bg-none hover:text-[#9D0A0E] hover:border-2 hover:border-[#9D0A0E]">
  
  Learn More

  {/* Right Arrow - Appears and Moves Right on Hover */}
  <span className="opacity-0 transform translate-x-0 transition-all duration-300 ease-in-out text-[#9D0A0E] 
      group-hover:opacity-100 group-hover:translate-x-2">
  <FaArrowRight />
</span>

</button>

      </div>
      <div className="relative w-full lg:w-[50%] flex justify-center">
        {/* Single Combined Image */}
        <div className="relative w-full h-[550px]">
          <img
            src={newImage} 
            alt="Company Overview"
            className="rounded-lg w-full h-[600px] object-cover"
          />
        </div>
      </div>

    </div>
  );
};

export default AboutUsSection;
