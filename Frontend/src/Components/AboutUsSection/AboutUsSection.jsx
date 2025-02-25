import newImage from "../../assets/Group 1.png"; // Your combined image
import { FaArrowRight } from "react-icons/fa6";

const AboutUsSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white w-full min-h-[900px] py-[112px] px-[144px] gap-[80px]">
      

      {/* Right Content - Text */}
      <div className="w-full lg:w-[50%] flex flex-col gap-6">
      <h3 className="text-[#9D0A0E] font-[800] text-[24px] leading-[33.6px] tracking-[6%]  -mb-8 uppercase" style={{ fontFamily: 'Red Hat Display' }}>About Us</h3>
      <h2 className="text-black font-[800] text-[60px] leading-[84px] tracking-[0%]  " style={{ fontFamily: 'Red Hat Display' }}>
  Delivering Excellence
</h2>

<p className="text-[26px] text-gray-700 leading-[29px] tracking-[0%]" style={{ fontFamily: 'Red Hat Display', fontWeight: 600 }}>
  All the parts are available as per the customer design, drawing & sample with
  <span className="font-bold text-[#9D0A0E]">100% PTFE as well as filled grade PTFE</span>.
</p>
<p className="text-gray-600 text-[16px] leading-[22.4px] tracking-[0%]" style={{ fontFamily: 'Manrope', fontWeight: 600 }}>
  Fluoroplast Engineers Pvt Ltd (FEPL), established in 1994, is a leading manufacturer of PTFE and specialty products.
  With a strong commitment to quality and innovation, FEPL has grown from a small venture to a trusted global supplier of PTFE products and compressor spares for major industries.
</p>

<p className="text-gray-600 text-[16px] leading-[22.4px] tracking-[0%] " style={{ fontFamily: 'Manrope', fontWeight: 600 }}>
  Based in Ahmedabad, Gujarat, India, the company has been serving the market since 1996, consistently delivering efficient and high-quality solutions to meet customer needs.
  FEPL continues to expand its reach, developing export markets worldwide.
</p>
<button className="w-[180px] h-[55px] rounded-full border-transparent bg-gradient-to-r from-[#9D0A0E] to-[#F15922] text-white font-semibold ease-in-out transform flex items-center justify-center gap-2 group hover:bg-white hover:bg-none hover:text-[#9D0A0E] hover:border-2 hover:border-[#9D0A0E] mt-8">
        <span className="ml-4">Learn More</span>

        <span className="opacity-0 transform translate-x-0 transition-all duration-300 ease-in-out text-[#9D0A0E] group-hover:opacity-100 group-hover:translate-x-2">
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
            className="rounded-lg w-full h-[600px] object-contain"
          />
        </div>
      </div>

    </div>
  );
};

export default AboutUsSection;
