import rightImage from "../../assets/right.png";
import backgroundImage from "../../assets/left.png"; // Left section background image
import qualityIcon from "../../assets/quality-icon.png";
import innovationIcon from "../../assets/innovation-icon.png";
import expertiseIcon from "../../assets/expertise-icon.png";
import customerFocusIcon from "../../assets/customer-focus-icon.png";
import { FaArrowRight } from "react-icons/fa";

const WhyChooseUsSection = () => {
  return (
    <div className="flex w-full h-[500px]">
      {/* Left Section - 50% Width */}
      <div className="relative w-1/2 h-full bg-[#510002] text-white flex flex-col justify-center items-start 
          pl-[144px] pr-[100px] pt-[80px] pb-[80px] gap-[10px]">
        
        {/* Background Image with 5% Opacity */}
        <img src={backgroundImage} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover opacity-5" />

        {/* Content */}
        <h3 className="text-white font-bold text-lg uppercase relative z-10" style={{ fontFamily: 'Red Hat Display', fontWeight: 800, fontSize: '24px', lineHeight: '33.6px', letterSpacing: '6%' }}>Why Choose Us</h3>
        <h2 className="text-white font-bold text-[50px] leading-[84px] tracking-[0%] font-['Red Hat Display'] w-[700px] relative z-10">
        Providing Innovative &<br/>Sustainable Solutions
      </h2>
        <div className="flex justify-between items-center w-full gap-[40px] relative z-10">
  <div className="text-left flex flex-col items-start">
    <img src={qualityIcon} alt="Quality" className="w-[60px] h-[60px]" />
    <p
  className="mt-2 text-[15px] leading-[28px] font-bold tracking-[0%] font-['Manrope']"
>
  Quality
</p>

    <span className="w-[40px] h-[2px] bg-white mt-1"></span>
  </div>
  <div className="text-left flex flex-col items-start">
    <img src={innovationIcon} alt="Innovation" className="w-[60px] h-[60px]" />
    <p className="mt-2 text-[15px] leading-[28px] font-bold tracking-[0%] font-['Manrope']">Innovation</p>
    <span className="w-[40px] h-[2px] bg-white mt-1"></span>
  </div>
  <div className="text-left flex flex-col items-start">
    <img src={expertiseIcon} alt="Expertise" className="w-[60px] h-[60px]" />
    <p className="mt-2 text-[15px] leading-[28px] font-bold tracking-[0%] font-['Manrope']">Expertise</p>
    <span className="w-[40px] h-[2px] bg-white mt-1"></span>
  </div>
  <div className="text-left flex flex-col items-start">
    <img src={customerFocusIcon} alt="Customer Focus" className="w-[60px] h-[60px]" />
    <p className="mt-2 text-[15px] leading-[28px] font-bold tracking-[0%] font-['Manrope']">Customer Focus</p>
    <span className="w-[40px] h-[2px] bg-white mt-1"></span>
  </div>
</div>

<button className="w-[250px] h-[55px] px-[24px] py-[16px] rounded-[48px] border-[2px] mt-[20px] border-[#9D0A0E] bg-white text-[#9D0A0E] font-semibold font-['Manrope'] shadow-md 
  transition-all duration-300 ease-in-out relative flex items-center justify-center gap-2 group 
  hover:bg-gradient-to-r hover:from-[#9D0A0E] hover:to-[#F15922] hover:text-white">
  
  <span className="ml-2">Explore Industry</span>

  {/* Right Arrow - Initially Hidden, Appears & Moves on Hover */}
  <span className="opacity-0 transform translate-x-0 transition-all duration-300 ease-in-out text-white 
      group-hover:opacity-100 group-hover:translate-x-2">
  <FaArrowRight />
</span>

</button>


      </div>
      
      {/* Right Section - 50% Width */}
      <div className="w-1/2 h-full">
        <img src={rightImage} alt="Industry Image" className="w-full h-full " />
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
